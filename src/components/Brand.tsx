import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label={`${siteContent.company.name}, inicio`}>
      <span className="brand-mark"><Image src="/images/logo-mark-on-dark.png" width={39} height={45} alt="" priority /></span>
      <span><b>{siteContent.company.name}</b><small>{siteContent.company.tagline}</small></span>
    </Link>
  );
}
