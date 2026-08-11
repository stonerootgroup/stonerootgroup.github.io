import { Menu } from "lucide-react";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { siteContent } from "@/lib/site-content";

export function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegación principal">
        {siteContent.nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="button button-small header-cta" href="/contact">Contáctanos</Link>
      <details className="mobile-menu">
        <summary aria-label="Menú"><Menu size={19} /> Menú</summary>
        <nav aria-label="Navegación móvil">
          {siteContent.nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="button" href="/contact">Contáctanos</Link>
        </nav>
      </details>
    </header>
  );
}
