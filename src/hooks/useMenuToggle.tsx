"use client";

import { useEffect, useRef, useState } from "react";

export const useMenuToggle = () => {
  const mediaQueryRef = useRef<MediaQueryList>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Inicializar mediaQuery
    mediaQueryRef.current = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQueryRef.current.matches);
    setIsMenuOpen(mediaQueryRef.current.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      setIsMenuOpen(event.matches);
    };

    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryRef.current?.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(prev => !prev);
    }
  };

  // En desktop siempre mostramos el menú
  return { 
    isMenuOpen: isDesktop ? true : isMenuOpen, 
    toggleMenu 
  };
};

export const useLogoComponent = () => {
  const mediaQueryRef = useRef<MediaQueryList>();
  const [isLogoVisible, setIsLogoVisible] = useState<boolean>(false);

  useEffect(() => {
    mediaQueryRef.current = window.matchMedia("(min-width: 768px)");
    setIsLogoVisible(mediaQueryRef.current.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsLogoVisible(event.matches);
    };

    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryRef.current?.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return { isLogoVisible };
};
