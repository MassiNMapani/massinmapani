"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";
import { SocialIcons } from "@/components/social-icons";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-canvas/80 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-4">
        <Link href="/" className="col-span-6 md:col-span-3 font-serif text-xl text-ink">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="col-span-12 hidden md:col-span-6 md:flex md:justify-center">
          <ul className="flex items-center gap-5">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-stone transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose",
                      active && "text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                  {active ? (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 h-px w-full bg-rose"
                      transition={{ duration: 0.2 }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <SocialIcons className="col-span-6 justify-self-end flex items-center gap-2" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
        <nav aria-label="Mobile Primary">
          <ul className="flex gap-4 overflow-x-auto pb-1">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "whitespace-nowrap rounded-full border border-white/15 px-3 py-1 text-xs text-stone",
                      active && "border-rose/50 text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
