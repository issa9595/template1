import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";
type As = "button" | "link";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: Extract<As, "button">;
    to?: never;
  };

type LinkProps = BaseProps & {
  as: Extract<As, "link">;
  to: string;
};

export type PrimaryButtonProps = ButtonProps | LinkProps;

export function PrimaryButton(props: PrimaryButtonProps) {
  const {
    variant = "primary",
    children,
    className = "",
    ...rest
  } = props as PrimaryButtonProps;

  const base =
    "inline-flex items-center justify-center rounded-lg px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light disabled:opacity-60";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-background-dark hover:bg-primary/90",
    secondary:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20",
  };

  if ("as" in props && props.as === "link") {
    const { as: _as, to, ...linkRest } = props as LinkProps;
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]} ${className}`}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const { as: _buttonAs, ...buttonRest } = rest as ButtonProps;

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
