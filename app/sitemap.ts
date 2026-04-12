import type { MetadataRoute } from "next";
import { absoluteUrl, routeSeo } from "./seo";

const routes = Object.values(routeSeo);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-12");

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/legal" ? "yearly" : "monthly",
    priority: route.priority,
  }));
}
