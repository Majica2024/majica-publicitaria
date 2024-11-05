import Link from "next/link";
import styles from "./Button.module.css";

export const Button = ({ type = "", span, href }) => {
  return (
    <Link href={href} className={styles.button}>
      {span}
    </Link>
  );
};
