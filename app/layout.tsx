import type { Metadata } from "next";
import Script from "next/script";
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
  const yumpingPartnerId=process.env.NEXT_PUBLIC_YUMPING_PARTNER_ID?.trim() || "449fb0b2d23ef85c3ee63f78b6e90eae";
  return <html lang="es"><head><meta name="yumping-analytics" content="global" /></head><body><Script
          src="https://www.yumping.com/afiliados/js/js_pa.min.js?v=11.38;"
          data-partner-id={yumpingPartnerId}
          strategy="beforeInteractive"
        /><Header /><main>{children}</main><Footer /></body></html>;
}
