import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Buceo Atlas | Explora el mundo bajo el agua", template: "%s | Buceo Atlas" },
  description: "Mapa de buceo en España, fauna marina, destinos y actividades para descubrir y reservar experiencias bajo el agua.",
  openGraph: { title: "Buceo Atlas | Explora el mundo bajo el agua", description: "Descubre lugares, fauna, actividades y equipamiento para bucear en España.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><Header /><main>{children}</main><Footer /></body></html>;
}
