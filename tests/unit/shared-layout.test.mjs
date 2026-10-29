import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import ts from "typescript";

// Follow the existing Button test's TSX loading approach; no new loader dependency.
// Compilation here strips types; npm run typecheck checks the contracts separately.
const components = {};
for (const name of ["Loader", "Footer"]) {
  const source = await readFile(new URL(`../../src/components/${name}.tsx`, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const artifact = new URL(`../../output/playwright/phase-1b2b/${name}.mjs`, import.meta.url);
  await mkdir(new URL("./", artifact), { recursive: true });
  await writeFile(artifact, compiled);
  components[name] = (await import(artifact.href)).default;
}
const { Loader, Footer } = components;
const renderLoader = props => renderToStaticMarkup(createElement(Loader, props));
const renderFooter = () => renderToStaticMarkup(createElement(StaticRouter, { location: "/cars" }, createElement(Footer)));

test("default and explicit false loader retain the full-screen mode and progress content", () => {
  const html = renderLoader({});
  assert.equal(html, renderLoader({ compact: false }));
  assert.match(html, /^<div class="loader-screen"/);
  assert.match(html, /class="loader-wordmark"[^>]*>DanAuto</);
  assert.match(html, /class="loader-progress-track"/);
  assert.match(html, /class="loader-progress-bar"/);
  assert.match(html, /Initializing Dan Automobile/);
  assert.doesNotMatch(html, /loader-compact|<button|<a\s/);
});

test("compact loader retains its spinner and distinct loading label without full-screen content", () => {
  const html = renderLoader({ compact: true });
  assert.match(html, /^<div class="loader-compact"/);
  assert.match(html, /class="loader-compact-spinner"/);
  assert.match(html, /class="loader-compact-text">Loading DanAuto</);
  assert.doesNotMatch(html, /loader-screen|loader-progress-track|Initializing Dan Automobile/);
});

test("footer retains all internal business and legal destinations as anchors", () => {
  const html = renderFooter();
  const links = [...html.matchAll(/<a class="site-footer-(link|meta-link)" href="([^"]+)"[^>]*>([^<]+)<\/a>/g)]
    .map(([, kind, href, label]) => ({ kind, href, label }));
  assert.deepEqual(links, [
    { kind: "link", href: "/", label: "Home" },
    { kind: "link", href: "/about", label: "About" },
    { kind: "link", href: "/services", label: "Services" },
    { kind: "link", href: "/gallery", label: "Gallery" },
    { kind: "link", href: "/cars", label: "Cars" },
    { kind: "link", href: "/contact", label: "Contact" },
    { kind: "meta-link", href: "/privacy", label: "Privacy" },
    { kind: "meta-link", href: "/terms", label: "Terms" },
    { kind: "meta-link", href: "/cookies", label: "Cookies" },
  ]);
});

test("footer social anchors retain accessible names, destinations and decorative SVG semantics", () => {
  const html = renderFooter();
  const anchors = [...html.matchAll(/<a ([^>]*class="site-footer-social-link"[^>]*)>(.*?)<\/a>/g)];
  assert.equal(anchors.length, 4);
  const destinations = [
    ["Facebook", "https://facebook.com/danauto"],
    ["LinkedIn", "https://linkedin.com/company/danauto"],
    ["X", "https://x.com/danauto"],
    ["WhatsApp", "https://wa.me/2348000002026"],
  ];
  for (const [index, [, attributes, content]] of anchors.entries()) {
    const [label, href] = destinations[index];
    assert.ok(attributes.includes(`href="${href}"`));
    assert.ok(attributes.includes(`aria-label="${label}"`));
    assert.match(attributes, /target="_blank"/);
    assert.match(attributes, /rel="noreferrer"/);
    assert.match(content, /^<svg [^>]*aria-hidden="true"[^>]*class="site-footer-social-icon"/);
  }
});

test("footer retains its landmark, business contact content and current copyright year", () => {
  const html = renderFooter();
  assert.match(html, /^<footer class="site-footer">/);
  for (const text of ["Plot 14 Admiralty Way, Lekki Phase 1, Lagos", "+234 (0) 800 000 2026", "bookings@danauto.africa", "Mon-Sat: 9:00 AM - 6:00 PM"]) {
    assert.ok(html.includes(text));
  }
  assert.ok(html.includes(`© ${new Date().getFullYear()} DanAuto. All rights reserved.`));
});
