import type { NavItemProps } from "@/types";
import Link from "next/link";
import styles from "./NavItem.module.css";

export const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <li className={styles.ListItem}>
      <Link href={url} className={styles.link}>
        {name}
      </Link>
    </li>
  );
};
