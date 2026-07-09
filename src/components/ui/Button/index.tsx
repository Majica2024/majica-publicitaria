import { bricolage } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "whatsapp" | "ghost" | "ghost-dark" | "dark";

interface ButtonProps {
  span?: string;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-coral text-white hover:bg-brand-coral-ink active:scale-[0.98]",
  whatsapp:
    "bg-brand-whatsapp text-white hover:brightness-95 active:scale-[0.98]",
  dark: "bg-majica-dark text-white hover:bg-brand-ink-soft active:scale-[0.98]",
  ghost:
    "border-[1.5px] border-brand-ink/25 text-brand-ink hover:border-brand-ink hover:bg-brand-ink/5",
  "ghost-dark":
    "border-[1.5px] border-brand-on-ink-soft/60 text-brand-on-ink hover:border-brand-on-ink hover:bg-white/5",
};

export const Button = ({
  span,
  href = "/",
  variant = "dark",
  external = false,
  className,
  icon,
  ariaLabel,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "inline-flex w-fit min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-all duration-200",
        bricolage.className,
        variants[variant],
        className,
      )}
    >
      {icon}
      {span}
    </Link>
  );
};
