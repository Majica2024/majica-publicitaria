"use client";

import { LogoComponent } from "@/components/ui/LogoComponent";
import { Navigation } from "@/components/ui/Navigation";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`
      fixed top-0 z-50 w-dvw px-4 
      bg-white md:bg-white/80 md:backdrop-blur-sm
      md:transition-all md:duration-300
      ${scrolled ? "h-20 md:h-32" : "h-16 md:h-20"}
    `}
    >
      <div className='h-full flex items-center justify-between'>
        <Link href='/'>
          <LogoComponent />
        </Link>
        {isMenuOpen && <Navigation />}
        <FaBars size={32} className={styles.icon} onClick={toggleMenu} />
      </div>
    </header>
  );
};
