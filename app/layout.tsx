import "./globals.css";

export const metadata = {
  title: "Axiom Research Compounds",
  description: "Laboratory materials & analytical references",
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
