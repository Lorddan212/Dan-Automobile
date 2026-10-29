import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Navigate, StaticRouter } from "react-router";
import ts from "typescript";

// Reuse the installed compiler, as in the existing Button and layout tests.
const source = await readFile(new URL("../../src/pages/Legal.tsx", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const artifact = new URL("../../output/playwright/phase-1b2c/Legal.mjs", import.meta.url);
await mkdir(new URL("./", artifact), { recursive: true });
await writeFile(artifact, compiled);
const { default: Legal } = await import(artifact.href);

const cases = [
  { id: "privacy", title: "Privacy at DanAuto", sections: ["Information We Use", "How We Use It", "Retention and Your Choices"], importantText: "You can request correction or removal by contacting bookings@danauto.africa." },
  { id: "terms", title: "Website Terms", sections: ["Catalog Information", "Inspections and Appointments", "Payments and Third Parties"], importantText: "must be confirmed before quotation or payment." },
  { id: "cookies", title: "Cookie Notice", sections: ["Essential Behavior", "Analytics", "Control"], importantText: "You can manage browser-level privacy, cache, and cookie preferences through your browser settings." },
];

for (const page of cases) {
  test(`${page.id} retains its policy content, section hierarchy and home link`, () => {
    const html = renderToStaticMarkup(createElement(StaticRouter, { location: `/${page.id}` }, createElement(Legal, { pageId: page.id })));
    assert.match(html, /^<main /);
    assert.ok(html.includes(`class="legal-title">${page.title}</h1>`));
    assert.deepEqual([...html.matchAll(/<h2 class="legal-card-title">([^<]+)<\/h2>/g)].map(([, title]) => title), page.sections);
    assert.ok(html.includes(page.importantText));
    const backLink = html.match(/<a class="legal-back-link" href="\/"[^>]*>(.*?)<\/a>/);
    assert.ok(backLink, "Back to Home remains an anchor to the root route");
    assert.ok(backLink[1].includes("Back to Home"));
    assert.doesNotMatch(html, /<form|<button/);
  });
}

test("untyped unknown or missing identifiers retain the existing replace redirect", () => {
  // The component has no hooks. Inspect its fallback element without pretending
  // that StaticRouter executes client navigation or widening the TS contract.
  for (const pageId of ["unknown-policy", undefined]) {
    const element = Legal({ pageId });
    assert.equal(element.type, Navigate);
    assert.equal(element.props.to, "/");
    assert.equal(element.props.replace, true);
  }
});
