import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: string;
  span: string;
  href: string;
}

export const Button = ({ type = "", span, href }: ButtonProps) => {
  return (
    <Link href={href} className={styles.button}>
      {span}
    </Link>
  );
};
