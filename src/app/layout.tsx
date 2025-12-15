import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/layout/Navbar";

// 1. Configuramos la fuente
const inter = Inter({ subsets: ["latin"] });

// 2. Configuramos el título de la página (SEO)
export const metadata: Metadata = {
  title: "Zenvy Shop",
  description: "Tienda exclusiva",
};

// 3. Definimos la estructura principal (SOLO UNA VEZ)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}