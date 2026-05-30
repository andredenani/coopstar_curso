import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coopstar Express - Entregas Rápidas e Seguras em São Paulo",
  description: "Serviços de moto frete e delivery 24h em São Paulo e Grande SP. Agilidade, segurança e confiança com mais de 9 anos de experiência.",
  keywords: ["moto frete", "delivery", "entregas são paulo", "motoboy", "coleta e entrega"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
