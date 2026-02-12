import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Digital Products" title="Guides and assets built for practical outcomes" description="Premium digital resources for intentional travelers and founders operating across borders." />

      <section className="grid grid-cols-12 gap-6">
        {siteConfig.products.map((product) => (
          <article key={product.slug} className="col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-panel/50 md:col-span-6">
            <div className="relative h-72">
              <Image src={product.coverImage} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-rose">{product.status}</p>
              <h2 className="font-serif text-2xl text-ink">{product.name}</h2>
              <p className="text-stone">{product.description}</p>
              <p className="text-sm text-stone">Price: {product.price}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={product.gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-rose px-4 py-2 text-sm text-white hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                >
                  Buy on Gumroad
                </a>
                <Link
                  href={`/products/${product.slug}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-ink hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                >
                  Product details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/20 p-6">
        <h2 className="font-serif text-2xl text-ink">IP Protection Note</h2>
        <p className="mt-3 text-stone">{siteConfig.productIpNote}</p>
      </section>
    </div>
  );
}
