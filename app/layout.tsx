import type { Metadata } from "next";
import Script from "next/script";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, buildWebsiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Actividades, Escuelas y Mapa de Buceo en España`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Compara actividades de buceo, bautismos, cursos Open Water, escuelas de buceo, puntos de inmersión y fauna marina en España con mapa interactivo.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Actividades, Escuelas y Mapa de Buceo en España`,
    description:
      "Compara actividades de buceo, bautismos, cursos Open Water, escuelas de buceo y fauna marina en España con mapa interactivo.",
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Actividades, Escuelas y Mapa de Buceo en España`,
    description:
      "Compara actividades de buceo, puntos de inmersión en España, escuelas de buceo y fauna marina.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const yumpingPartnerId =
    process.env.NEXT_PUBLIC_YUMPING_PARTNER_ID?.trim() || "449fb0b2d23ef85c3ee63f78b6e90eae";
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <html lang="es">
      <head>
        <meta name="yumping-analytics" content="global" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Script id="yumping-pa-loader" strategy="lazyOnload">
          {`(function(){var loaded=false;function load(){if(loaded)return;loaded=true;var s=document.createElement('script');s.src='https://www.yumping.com/afiliados/js/js_pa.min.js?v=11.38;';s.async=true;s.setAttribute('data-partner-id','${yumpingPartnerId}');document.body.appendChild(s);}['pointerdown','keydown','touchstart','scroll','mouseover'].forEach(function(e){window.addEventListener(e,load,{once:true,passive:true});});})();`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
