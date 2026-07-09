import { bricolage } from "@/utils";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  id?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
  id,
}: SectionHeadingProps) => {
  return (
    <header
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <p
        className={clsx(
          "flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em]",
          onDark ? "text-brand-coral" : "text-brand-coral-ink",
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-brand-coral" />
        {eyebrow}
        {align === "center" && (
          <span aria-hidden="true" className="h-px w-8 bg-brand-coral" />
        )}
      </p>
      <h2
        id={id}
        className={clsx(
          bricolage.className,
          "max-w-[22ch] text-balance text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl",
          onDark ? "text-brand-on-ink" : "text-brand-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "max-w-xl text-base leading-relaxed md:text-lg",
            onDark ? "text-brand-on-ink-soft" : "text-brand-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
};
