import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Axiom Research Compounds",
  description: "Research materials and analytical references for laboratory workflows."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
