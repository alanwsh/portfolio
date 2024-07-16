
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "@/components/navbar";
import { Providers } from "./provider";
import ImageModal from "@/components/imageModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Alan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className="bg-white">
        <body className={`${inter.className} bg-white`}>
          <NavBar />
          {children}
        </body>
        <ImageModal />
      </html>
    </Providers>
  );
}
