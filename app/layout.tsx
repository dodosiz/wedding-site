import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sans = Source_Sans_3({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "Theo + Natalia",
  description: "Προσκλητήριο γάμου",
  abstract: "Σας προσκαλούμε στον γάμο μας, ο οποίος θα πραγματοποιηθεί στην Σύρο"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
