import type { ParagraphProps } from "@/types/ui";
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
      className={clsx(styles.Paragraph, className)}
      style={{
        fontSize: size,
        width: width,
      }}
    >
      {children}
    </p>
  );
};
