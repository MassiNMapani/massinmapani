import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { EditorialTile } from "@/components/editorial-tile";
import { Reveal } from "@/components/reveal";
import { SocialRibbon } from "@/components/social-ribbon";
import { NewsletterForm } from "@/components/newsletter-form";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Reveal>
        <section className="grid grid-cols-12 gap-6 rounded-[2rem] border border-white/10 bg-brand-gradient p-8 shadow-soft md:p-12">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.24em] text-rose">{siteConfig.hero.kicker}</p>
            <h1 className="mt-4 font-serif text-5xl text-ink md:text-7xl">{siteConfig.hero.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-stone">{siteConfig.hero.subtitle}</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone/95">{siteConfig.hero.mission}</p>
            <blockquote className="mt-8 max-w-2xl border-l border-rose/50 pl-4 text-sm italic text-stone/90">
              {siteConfig.hero.quote}
            </blockquote>
          </div>
          <div className="col-span-12 flex items-end lg:col-span-4 lg:justify-end">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-rose/50 bg-black/20 px-5 py-3 text-sm text-ink transition hover:border-rose hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              Explore profile <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.05}>
        <SocialRibbon />
      </Reveal>

      <Reveal delay={0.1}>
        <section className="grid auto-rows-[190px] grid-cols-12 gap-5">
          {siteConfig.homeTiles.map((tile) => (
            <EditorialTile key={tile.href} {...tile} />
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="grid grid-cols-12 gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="col-span-12 md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-rose">Newsletter</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">Systems notes from Massi</h2>
            <p className="mt-3 max-w-xl text-stone">Short dispatches on reliability, product governance, and building technical leadership pathways.</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <NewsletterForm />
          </div>
        </section>
      </Reveal>
    </div>
  );
}
