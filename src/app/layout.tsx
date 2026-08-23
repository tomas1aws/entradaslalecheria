import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Lechería | Entradas agotadas",
  description: "La Lechería vuelve el 29 de agosto en Club San Fernando. Entradas agotadas.",
  openGraph: {
    title: "La Lechería | Entradas agotadas",
    description: "La Lechería vuelve el 29 de agosto en Club San Fernando. Entradas agotadas.",
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
