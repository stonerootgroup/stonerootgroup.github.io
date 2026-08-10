import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = { title: "Soluciones", description: "Soluciones de CRM, automatización, inteligencia artificial, web y software a la medida." };

export default function SolutionsPage() {
  return <SiteShell><section className="page-hero section"><p className="kicker">SOLUCIONES STONEROOT</p><h1>Un punto de partida concreto para cada desafío.</h1><p className="lead">Combinamos negocio, diseño y tecnología para entregar valor temprano y una base que pueda crecer.</p></section><section className="section detail-grid">{siteContent.solutions.map((solution, index) => <article key={solution.title}><span>{String(index + 1).padStart(2, "0")} / {solution.tag}</span><h2>{solution.title}</h2><p>{solution.body}</p><ul>{solution.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section><section className="contact section"><p className="kicker">SIGUIENTE PASO</p><h2>¿Cuál de estas soluciones se parece más a tu reto?</h2><Link className="contact-link" href="/contact"><span>Conversemos</span><b>↗</b></Link></section></SiteShell>;
}
