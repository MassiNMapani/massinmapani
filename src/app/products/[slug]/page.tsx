import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/lib/content";
import { siteConfig } from "@/content/site.config";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <section className="grid grid-cols-12 gap-6 rounded-3xl border border-white/10 bg-panel/50 p-6">
        <div className="col-span-12 md:col-span-5">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image src={product.coverImage} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-rose">{product.status}</p>
          <h1 className="mt-2 font-serif text-4xl text-ink">{product.name}</h1>
          <p className="mt-4 text-stone">{product.description}</p>
          <p className="mt-4 text-sm text-stone">Format: {product.format}</p>
          <p className="text-sm text-stone">Who it’s for: {product.whoItsFor}</p>
          <p className="mt-2 text-sm text-stone">Price: {product.price}</p>
          <a
            href={product.paypalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-rose px-5 py-3 text-sm font-semibold text-white hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            Buy through mobile money
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 p-6">
        <h2 className="font-serif text-2xl text-ink">What you get</h2>
        <ul className="mt-3 space-y-2 text-stone">
          {product.whatYouGet.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/20 p-6">
        <h2 className="font-serif text-2xl text-ink">IP Protection Note</h2>
        <p className="mt-3 text-stone">{siteConfig.productIpNote}</p>
      </section>
    </article>
  );
}
