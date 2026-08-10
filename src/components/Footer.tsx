import { Brand } from "@/components/Brand";
import { siteContent } from "@/lib/site-content";

export function Footer() {
  return <footer><Brand /><p>© 2026 StoneRoot Group. Todos los derechos reservados.</p><a href={siteContent.company.phone.href}>{siteContent.company.phone.display}</a></footer>;
}
