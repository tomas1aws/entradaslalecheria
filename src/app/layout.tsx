import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Lechería | Entradas",
  description: "Entradas para La Lechería, 29 de agosto en Club San Fernando.",
  openGraph: {
    title: "La Lechería | Entradas",
    description: "Entradas para La Lechería, 29 de agosto en Club San Fernando.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
