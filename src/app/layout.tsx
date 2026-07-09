import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { bricolage, poppins } from "@/utils";
import clsx from "clsx";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.majicapublicitaria.com"),
  title: {
    default: "Majica Publicitaria — Impresión y publicidad en Bogotá",
    template: "%s | Majica Publicitaria",
  },
  description:
    "Agencia de publicidad e impresión: avisos acrílicos, gran formato, señalización, material P.O.P y más. Diseñamos, producimos e instalamos en Bogotá y toda Colombia.",
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Majica Publicitaria",
    title: "Majica Publicitaria — Impresión y publicidad en Bogotá",
    description:
      "Transforma tus ideas en impresiones de impacto: 11 líneas de producción publicitaria con diseño, fabricación e instalación.",
    images: [{ url: "/assets/images/hero.webp", width: 1600, height: 2000 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={clsx(poppins.variable, bricolage.variable)}>
      <body className={poppins.className}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
