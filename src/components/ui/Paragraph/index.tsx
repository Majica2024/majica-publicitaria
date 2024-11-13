"use client";

import type { ParagraphProps } from "@/types/ui";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  size = "1rem",
  width,
  className,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(styles.Paragraph, className, redHatDisplay.className)}
      style={{
        fontSize: size,
        width: width,
      }}
    >
      {children}
    </p>
  );
};
