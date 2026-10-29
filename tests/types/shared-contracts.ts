import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../src/components/Button";
import { formatNaira } from "../../src/utils/formatNaira";

// Checked by npm run typecheck; these examples are never shipped or executed.
type Props = ComponentProps<typeof Button>;
export const supportedButtons: Props[] = [
  { children: "Cars", to: { pathname: "/cars", search: "?source=test" }, icon: ArrowRight },
  { children: "Help", href: "https://example.invalid/help", variant: "ghost" },
  { type: "submit", disabled: true, onClick: event => event.currentTarget.focus() },
];

type AssertFalse<T extends false> = T;
export type UnknownVariantsRejected = AssertFalse<"danger" extends NonNullable<Props["variant"]> ? true : false>;
export type InvalidButtonTypesRejected = AssertFalse<"link" extends NonNullable<Props["type"]> ? true : false>;
export type NonNumericAmountsRejected = AssertFalse<string extends Parameters<typeof formatNaira>[0] ? true : false>;

export const formattedNumber: string = formatNaira(124_000_000);
export const formattedBigInt: string = formatNaira(124_000_000n);
