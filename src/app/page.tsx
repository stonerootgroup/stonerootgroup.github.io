import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <SiteShell><HomePage /></SiteShell>;
}
