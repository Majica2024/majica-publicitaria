import { Button } from "@/components/ui/Button";
import { NavItem } from "@/components/ui/NavItem";
import { pages } from "@/data/navigation";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className='flex justify-end absolute right-0 top-20 me-4 text-gray-700 z-20 md:relative md:top-auto md:me-0'>
      <ul
        className='flex flex-col items-center gap-8
                   bg-white rounded-b-3xl p-4
                   shadow-lg border border-white/30
                   md:flex-row md:gap-4 md:bg-transparent md:backdrop-blur-none
                   md:border-none md:shadow-none'
      >
        {pages.map(({ name, url }) => (
          <NavItem key={name} name={name} url={url} />
        ))}
        <Button href='/#contacto' span='Contáctanos' />
      </ul>
    </nav>
  );
};
