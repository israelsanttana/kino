import { Cabecalho } from "@/components/template/Cabecalho";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kino",
  description: "Aplicação para consulta de filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-full`}>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}
