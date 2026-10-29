import { createElement } from "react";
import type { ComponentProps } from "react";
import Loader from "../../src/components/Loader";
import Footer from "../../src/components/Footer";

// Compiled by npm run typecheck; not executed or shipped with the application.
type Props = ComponentProps<typeof Loader>;
type AssertTrue<T extends true> = T;
type AssertFalse<T extends false> = T;

export const supportedLoaders: Props[] = [{}, { compact: true }, { compact: false }];
export const defaultLoader = createElement(Loader, {});
export const compactLoader = createElement(Loader, { compact: true });
export const footer = createElement(Footer);

export type CompactIsOptional = AssertTrue<{} extends Props ? true : false>;
export type StringCompactRejected = AssertFalse<{ compact: string } extends Props ? true : false>;
export type NumberCompactRejected = AssertFalse<{ compact: number } extends Props ? true : false>;
export type ChildrenNotDeclared = AssertFalse<"children" extends keyof Props ? true : false>;
export type FooterHasNoParameters = AssertTrue<Parameters<typeof Footer>["length"] extends 0 ? true : false>;
