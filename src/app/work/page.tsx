import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Work" title="Projects built for resilience and governance" description={siteConfig.work.intro} />

      <section className="grid grid-cols-12 gap-6">
        {siteConfig.work.projects.map((project) => (
          <article key={project.slug} className="col-span-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:col-span-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-5 font-serif text-2xl text-ink">{project.title}</h2>
            <p className="mt-3 text-stone">{project.summary}</p>
            <Link
              href={`/work/${project.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-rose hover:text-rose/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              View case study <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
