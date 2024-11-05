import type { NavItemProps } from "@/types";
import Link from "next/link";
import styles from "./NavItem.module.css";

export const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <Link href={url} className={styles.link}>
      {name}
    </Link>
  );
};
