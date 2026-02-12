import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/speaking",
    "/partnerships",
    "/products",
    "/community",
    "/contact"
  ];

  const workRoutes = siteConfig.work.projects.map((project) => `/work/${project.slug}`);
  const productRoutes = siteConfig.products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...workRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
