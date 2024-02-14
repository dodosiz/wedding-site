import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans({ subsets: ["latin", "greek"], weight: "400" });

export const metadata: Metadata = {
  title: "Theo + Natalia",
  description: "Our wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
