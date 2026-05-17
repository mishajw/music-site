import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Records",
  description: "A curated record collection",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
