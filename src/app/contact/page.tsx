import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { SocialIcons } from "@/components/social-icons";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Contact" title={siteConfig.contact.heading} description={siteConfig.contact.description} />

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-3xl border border-white/10 bg-panel/50 p-6 md:col-span-7">
          <ContactForm />
        </div>
        <aside className="col-span-12 space-y-5 rounded-3xl border border-white/10 p-6 md:col-span-5">
          <h2 className="font-serif text-2xl text-ink">Business Contact</h2>
          <p className="text-stone">{siteConfig.businessEmail}</p>
          <p className="text-sm text-stone">Prefer social channels? Connect below.</p>
          <SocialIcons className="flex items-center gap-2" />
        </aside>
      </section>
    </div>
  );
}
