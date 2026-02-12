import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";

export default function SpeakingPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Speaking & Media" title="Practical conversations for high-stakes technology teams" description={siteConfig.speaking.intro} />
      <section className="space-y-4">
        {siteConfig.speaking.engagements.map((engagement) => (
          <article key={engagement.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-rose">{engagement.type}</p>
            <h2 className="mt-2 font-serif text-2xl text-ink">{engagement.title}</h2>
            <p className="mt-1 text-sm text-stone">{engagement.org} · {engagement.year}</p>
          </article>
        ))}
      </section>
      <a
        href="/contact"
        className="inline-flex rounded-full border border-rose/50 px-5 py-3 text-sm text-ink hover:border-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
      >
        {siteConfig.speaking.cta}
      </a>
    </div>
  );
}
