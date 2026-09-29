import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Buceo Atlas | Encuentra dónde bucear", template: "%s | Buceo Atlas" },
  description: "Descubre lugares de buceo, fauna marina, experiencias y destinos para planificar tu próxima inmersión.",
  openGraph: { title: "Buceo Atlas", description: "Explora destinos y puntos de buceo en España.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><Header /><main>{children}</main><Footer /></body></html>;
}