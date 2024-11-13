import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { poppins } from "@/utils";
import type { ReactNode } from "react";

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
      </body>
    </html>
  );
}
