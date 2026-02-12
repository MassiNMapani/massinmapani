import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="rounded-3xl border border-white/10 bg-panel/50 p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-rose">Case study</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">{project.title}</h1>
        <p className="mt-3 text-stone">{project.summary}</p>
      </header>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Problem</h2>
          <p className="mt-3 text-stone">{project.problem}</p>
        </div>
        <div className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Approach</h2>
          <p className="mt-3 text-stone">{project.approach}</p>
        </div>
        <div className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Impact</h2>
          <p className="mt-3 text-stone">{project.impact}</p>
        </div>
        <div className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Tech stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-stone">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 p-6">
        <h2 className="font-serif text-2xl text-ink">Metrics</h2>
        <ul className="mt-4 space-y-2 text-stone">
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
