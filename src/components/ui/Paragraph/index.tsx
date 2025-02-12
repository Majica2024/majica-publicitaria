"use client";

import type { ParagraphProps } from "@/types/ui";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";

export const Paragraph = ({
  children,
  size = "1rem",
  width,
  className,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        "text-majica-text-paragraph font-bold",
        className,
        redHatDisplay.className,
      )}
      style={{
        fontSize: size,
        width: width,
      }}
    >
      {children}
    </p>
  );
};
