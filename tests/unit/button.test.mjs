import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import ts from "typescript";

// Use the installed TypeScript compiler to load TSX in Node without a new loader.
// Strict checking is performed separately by npm run typecheck.
const source = await readFile(new URL("../../src/components/Button.tsx", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const artifact = new URL("../../output/playwright/phase-1b2a/Button.mjs", import.meta.url);
await mkdir(new URL("./", artifact), { recursive: true });
await writeFile(artifact, compiled);
const { default: Button } = await import(artifact.href);
const render = props => renderToStaticMarkup(createElement(StaticRouter, { location: "/" }, createElement(Button, props)));

test("defaults to a native primary button with unchanged content wrappers", () => {
  const html = render({ children: "Save" });
  assert.match(html, /^<button type="button"/);
  assert.match(html, /class="button-base button-primary  "/);
  assert.match(html, /<span class="button-shine"><\/span><span class="button-content">Save<\/span>/);
});

test("preserves native submit, disabled state and each supported variant", () => {
  for (const variant of ["primary", "secondary", "ghost"]) {
    const html = render({ children: "Send", type: "submit", disabled: true, variant, className: "custom" });
    assert.match(html, /^<button type="submit" disabled=""/);
    assert.ok(html.includes(`button-base button-${variant} custom button-disabled`));
  }
});

test("internal destination retains precedence over href and link flags stay unchanged", () => {
  const html = render({ children: "Cars", to: { pathname: "/cars", search: "?source=test" }, href: "https://example.invalid", disabled: true });
  assert.match(html, /^<div[^>]*><a /);
  assert.match(html, /href="\/cars\?source=test"/);
  assert.doesNotMatch(html, /disabled|example\.invalid/);
});

test("external links and empty internal destinations retain the anchor branch", () => {
  const html = render({ children: "Help", to: "", href: "https://example.invalid/help", variant: "secondary" });
  assert.match(html, /^<div[^>]*><a /);
  assert.match(html, /href="https:\/\/example\.invalid\/help"/);
  assert.match(html, /button-secondary/);
});

test("optional icon receives its existing size after the label", () => {
  const Icon = ({ size }) => createElement("i", { "data-size": size });
  const html = render({ children: "Next", icon: Icon });
  assert.match(html, /Next<i data-size="16"><\/i>/);
});
