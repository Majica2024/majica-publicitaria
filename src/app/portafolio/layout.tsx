import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portafolio de servicios",
  description:
    "Conoce las 12 líneas de producción publicitaria de Majica: avisos acrílicos, impresión gran formato, señalización, material P.O.P, textiles y más. Trabajos reales para Honda, Chevrolet, Auteco y otras marcas.",
  alternates: {
    canonical: "/portafolio",
  },
};

export default function PortafolioLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
