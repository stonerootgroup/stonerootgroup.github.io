import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return <SiteShell><section className="page-hero section"><p className="kicker">404</p><h1>Esta página no existe.</h1><Link className="button" href="/">Volver al inicio</Link></section></SiteShell>;
}
