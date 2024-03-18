import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "davsPortfolio",
  icons: "favico.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <head>
        <link rel="shortcut icon" href="images/davsLogooo.png" />
      </head>
      <body className="flex flex-col min-h-screen w-full font-montserrat text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
