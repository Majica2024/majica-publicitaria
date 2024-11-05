import { Button } from "@/components/ui/Button";
import { NavItem } from "@/components/ui/NavItem";
import { pages } from "@/data/navigation";
import Link from "next/link";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {pages.map(({ name, url }) => (
          <NavItem key={name} name={name} url={url} />
        ))}
        <Button href='/contacto' span='Contáctanos' />
      </ul>
    </nav>
  );
};
