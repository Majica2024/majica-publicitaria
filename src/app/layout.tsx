import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import type { ReactNode } from "react";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majica Publicitaria",
  description: "Transforma tus ideas en impresiones de impacto",
  icons: {
    icon: "/assets/icons/favicon.png",
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
