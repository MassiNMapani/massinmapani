import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { SocialIcons } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-panel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-10">
        <div className="col-span-12 md:col-span-8">
          <p className="font-serif text-2xl text-ink">{siteConfig.name}</p>
          <p className="mt-3 max-w-2xl text-sm text-stone">
            Building resilient, compliant systems and mission-aligned products across Africa and beyond.
          </p>
          <p className="mt-3 text-sm text-stone">{siteConfig.businessEmail}</p>
        </div>
        <div className="col-span-12 md:col-span-4 md:justify-self-end">
          <SocialIcons className="flex items-center gap-2" />
        </div>
        <div className="col-span-12 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-xs text-stone/80">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
