"use client";

import { LogoComponent } from "@/components/ui/LogoComponent";
import { Navigation } from "@/components/ui/Navigation";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();
  return (
    <header className='fixed top-0 z-50 flex items-center justify-between w-dvw px-4 bg-white/80 backdrop-blur-sm'>
      <Link href='/'>
        <LogoComponent />
      </Link>
      {isMenuOpen && <Navigation />}
      <FaBars size='32px' className={styles.icon} onClick={toggleMenu} />
    </header>
  );
};
