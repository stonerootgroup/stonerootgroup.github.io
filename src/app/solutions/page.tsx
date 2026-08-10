import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Soluciones",
  description: "Soluciones de CRM, automatización, inteligencia artificial, web y software a la medida.",
  alternates: { canonical: "/solutions/" },
  openGraph: { url: "/solutions/", title: "Soluciones empresariales | StoneRoot Group", description: "CRM, automatización, inteligencia artificial, web y software a la medida.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "StoneRoot Group — Soluciones que escalan" }] },
};

export default function SolutionsPage() {
  return <SiteShell><section className="page-hero section" id="soluciones-top"><p className="kicker">SOLUCIONES STONEROOT</p><h1>Un punto de partida concreto para cada desafío.</h1><p className="lead">Combinamos negocio, diseño y tecnología para entregar valor temprano y una base que pueda crecer.</p></section><section className="section detail-grid">{siteContent.solutions.map((solution, index) => <article key={solution.title}><span>{String(index + 1).padStart(2, "0")} / {solution.tag}</span><h2>{solution.title}</h2><p>{solution.body}</p><ul>{solution.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section><section className="contact section"><p className="kicker">SIGUIENTE PASO</p><h2>¿Tienes un reto en mente?</h2><p>Cuéntanos qué quieres mejorar. Te ayudamos a definir el mejor punto de partida.</p><Link className="contact-link" href="/contact"><span>Hablemos de tu proyecto</span><ArrowUpRight aria-hidden="true" /></Link></section></SiteShell>;
}
