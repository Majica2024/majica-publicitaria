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
    "Agencia de publicidad e impresión: avisos acrílicos, gran formato, señalización, material P.O.P, textiles y más. Diseñamos, producimos e instalamos en Bogotá y toda Colombia.",
  keywords: [
    "impresión publicitaria Bogotá",
    "avisos acrílicos",
    "impresión gran formato",
    "señalización comercial",
    "material P.O.P",
    "agencia de publicidad Bogotá",
    "pendones e inflables publicitarios",
    "dotación empresarial bordada",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.majicapublicitaria.com",
    siteName: "Majica Publicitaria",
    title: "Majica Publicitaria — Impresión y publicidad en Bogotá",
    description:
      "Transforma tus ideas en impresiones de impacto: 12 líneas de producción publicitaria con diseño, fabricación e instalación.",
    images: [
      {
        url: "/assets/images/work/hero-honda-wide.webp",
        width: 1920,
        height: 1085,
        alt: "Producción publicitaria de Majica instalada en un concesionario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Majica Publicitaria — Impresión y publicidad en Bogotá",
    description:
      "Avisos, gran formato, P.O.P y textiles: diseño, producción e instalación en toda Colombia.",
    images: ["/assets/images/work/hero-honda-wide.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Majica Publicitaria",
  description:
    "Agencia de publicidad e impresión: avisos acrílicos, impresión gran formato, señalización, material P.O.P y textiles corporativos.",
  url: "https://www.majicapublicitaria.com",
  telephone: "+573102778819",
  email: "ventas@majicapublicitaria.com",
  image: "https://www.majicapublicitaria.com/assets/images/work/hero-honda-wide.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  areaServed: "Colombia",
  sameAs: ["https://www.instagram.com/majicapublicitaria"],
  makesOffer: [
    "Avisos acrílicos",
    "Impresión gran formato",
    "Señalización",
    "Plotter de corte",
    "Porta pendones",
    "Inflables y dummies",
    "Material P.O.P",
    "Corte y grabado láser",
    "Exhibidores",
    "Estructuras metálicas",
    "Bastidores",
    "Textiles y dotación",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={clsx(poppins.variable, bricolage.variable)}>
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático generado en build
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
