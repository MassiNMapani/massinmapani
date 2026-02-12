import { siteConfig } from "@/content/site.config";

export function getCaseStudyBySlug(slug: string) {
  return siteConfig.work.projects.find((project) => project.slug === slug);
}

export function getProductBySlug(slug: string) {
  return siteConfig.products.find((product) => product.slug === slug);
}
