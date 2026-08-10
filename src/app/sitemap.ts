import type { MetadataRoute } from "next";

const baseUrl = "https://stonerootgroup.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/solutions/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact/`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
