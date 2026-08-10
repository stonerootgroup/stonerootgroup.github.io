import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Habla con StoneRoot Group sobre tu próximo proyecto de IA, automatización o transformación digital.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Contacto | StoneRoot Group", description: "Conversemos sobre tu próximo proyecto de IA, automatización o transformación digital.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "StoneRoot Group — Soluciones que escalan" }] },
};

export default function ContactPage() {
  const mailto = `mailto:${siteContent.company.email}?subject=Quiero%20hablar%20con%20StoneRoot`;
  return <SiteShell><section className="page-hero contact-page section"><div><p className="kicker">HABLEMOS</p><h1>Todo proyecto empieza por entender el problema.</h1><p className="lead">Cuéntanos qué proceso, idea u oportunidad quieres mejorar. Te ayudaremos a convertirlo en un siguiente paso concreto.</p></div><aside><MessageSquareText aria-hidden="true" /><h2>Inicia una conversación</h2><p>Incluye una descripción breve del proceso, quiénes participan y qué resultado esperas.</p><div className="contact-actions"><a className="button" href={mailto}><Mail size={18} /> {siteContent.company.email}</a><a className="button button-ghost" href={siteContent.company.phone.href}><Phone size={18} /> {siteContent.company.phone.display}</a></div><div className="contact-note"><MapPin size={17} /><span>Trabajamos con empresas en Colombia y otros mercados.</span></div></aside></section></SiteShell>;
}
