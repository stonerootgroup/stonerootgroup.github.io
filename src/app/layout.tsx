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
  openGraph: { type: "website", locale: "es_CO", siteName: "StoneRoot Group", title: "StoneRoot Group", description: "IA, automatización y soluciones digitales para empresas." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}<ScrollToTop /></body></html>;
}
