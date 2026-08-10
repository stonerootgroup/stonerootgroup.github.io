import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stonerootgroup.com"),
  title: { default: "StoneRoot Group | IA, automatización y soluciones digitales", template: "%s | StoneRoot Group" },
  description: "StoneRoot Group ayuda a empresas a automatizar procesos, implementar IA y construir soluciones digitales que escalan.",
  icons: { icon: "/images/logo.ico" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "StoneRoot Group",
    title: "StoneRoot Group | Soluciones que escalan",
    description: "IA, automatización y soluciones digitales para empresas.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "StoneRoot Group — Soluciones que escalan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoneRoot Group | Soluciones que escalan",
    description: "IA, automatización y soluciones digitales para empresas.",
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stonerootgroup.com/#organization",
      name: "StoneRoot Group",
      url: "https://stonerootgroup.com/",
      logo: "https://stonerootgroup.com/images/logo-mark-on-dark.png",
      email: "comercial@stonerootgroup.com",
      telephone: "+57 313 339 5697",
      areaServed: ["Colombia", "Latin America"],
      description: "Soluciones de inteligencia artificial, automatización, CRM, experiencias digitales y software a la medida para empresas.",
    },
    {
      "@type": "WebSite",
      "@id": "https://stonerootgroup.com/#website",
      url: "https://stonerootgroup.com/",
      name: "StoneRoot Group",
      inLanguage: "es-CO",
      publisher: { "@id": "https://stonerootgroup.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}<ScrollToTop /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
