import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { poppins } from "@/utils";
import type { ReactNode } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Majica Publicitaria",
  description: "Transforma tus ideas en impresiones de impacto",
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <Header />
        <main className='content'>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
