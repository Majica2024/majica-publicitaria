import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: string;
  span: string;
  href: string;
}

export const Button = ({ type = "", span, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(styles.button, redHatDisplay.className)}
      style={{
        fontWeight: 600,
      }}
    >
      {span}
    </Link>
  );
};
