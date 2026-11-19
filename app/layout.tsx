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
    default: `${SITE_NAME} | Buceo en España: Bautismos, Cursos, Centros y Zonas`,
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
    images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Actividades, Escuelas y Mapa de Buceo en España`,
    description:
      "Compara actividades de buceo, puntos de inmersión en España, escuelas de buceo y fauna marina.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const yumpingPartnerId =
    process.env.NEXT_PUBLIC_YUMPING_PARTNER_ID?.trim() || "449fb0b2d23ef85c3ee63f78b6e90eae";
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-8QLPRDPJ86";
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <html lang="es">
      <head>
        <meta name="yumping-analytics" content="global" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');gtag('config','GTM-MNWX9SLV');document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[data-affiliate-provider],a[href*="iatiseguros.com"],a[href*="yumping.com/ofertas/"]'):null;if(!a||typeof window.gtag!=='function')return;var href=a.getAttribute('href')||'';var provider=a.getAttribute('data-affiliate-provider')||(href.indexOf('iatiseguros.com')!==-1?'IATI':'Yumping');var actId=a.getAttribute('data-activity-id')||'';var placement='';try{placement=new URL(href,window.location.origin).searchParams.get('placement')||'link';}catch(_){}window.gtag('event','affiliate_click',{provider:provider,activity_id:actId,placement:placement,link_url:href,page_path:window.location.pathname});},{passive:true});`,
          }}
        />
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
