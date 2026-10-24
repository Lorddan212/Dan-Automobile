import { createElement, lazy } from "react";
import type { ComponentProps } from "react";
import Legal from "../../src/pages/Legal";
import type { LegalPageId } from "../../src/pages/Legal";

// Checked by npm run typecheck; never executed or shipped.
type Props = ComponentProps<typeof Legal>;
type AssertTrue<T extends true> = T;
type AssertFalse<T extends false> = T;

export const supportedPages: LegalPageId[] = ["privacy", "terms", "cookies"];
export const privacy = createElement(Legal, { pageId: "privacy" });
export const terms = createElement(Legal, { pageId: "terms" });
export const cookies = createElement(Legal, { pageId: "cookies" });

// Match App's extensionless lazy import without editing the JavaScript router.
const LazyLegal = lazy(() => import("../../src/pages/Legal"));
export const lazyPrivacy = createElement(LazyLegal, { pageId: "privacy" });
export type LazyPropsPreserved = AssertTrue<ComponentProps<typeof LazyLegal> extends Props ? true : false>;
export type PageIdIsRequired = AssertFalse<{} extends Props ? true : false>;
export type UnknownPageIdRejected = AssertFalse<"unknown-policy" extends Props["pageId"] ? true : false>;
export type ArbitraryStringsRejected = AssertFalse<string extends Props["pageId"] ? true : false>;
export type NumericPageIdRejected = AssertFalse<number extends Props["pageId"] ? true : false>;
export type ChildrenNotDeclared = AssertFalse<"children" extends keyof Props ? true : false>;
