import { NavItem } from "@/components/ui/NavItem";
import { pages } from "@/data/navigation";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {pages.map(({ name, url }) => (
          <NavItem key={name} name={name} url={url} />
        ))}
      </ul>
    </nav>
  );
};
