import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";

export default function PartnershipsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Partnerships" title="Collaborations for ambitious institutions and brands" description={siteConfig.partnerships.intro} />

      <section className="rounded-3xl border border-white/10 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-rose">Partners</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {siteConfig.partnerships.logos.map((logo) => (
            <div key={logo} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-sm text-stone">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-12 gap-5">
        {siteConfig.partnerships.cards.map((card) => (
          <article key={card.title} className="col-span-12 rounded-3xl border border-white/10 bg-panel/50 p-6 md:col-span-4">
            <h2 className="font-serif text-2xl text-ink">{card.title}</h2>
            <p className="mt-3 text-stone">{card.description}</p>
          </article>
        ))}
      </section>

      <a href="/contact" className="inline-flex rounded-full bg-rose px-5 py-3 text-sm font-semibold text-white hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose">
        Brand collaborations / advisory
      </a>
    </div>
  );
}
