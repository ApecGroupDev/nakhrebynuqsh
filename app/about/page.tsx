import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nakhre by Nuqsh",
  description:
    "The story behind Nakhré by Nuqsh — designed in Atlanta, crafted in Pakistan. Handwork pret & embroidered festive wear.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center px-6">
        <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-6">
          — The Studio
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl max-w-3xl mx-auto leading-[1.05]">
          A small studio,
          <br />
          <span className="italic">a slow obsession.</span>
        </h1>
      </section>

      {/* Brand image placeholder */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative aspect-[16/7] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=700&fit=crop"
            alt="Nakhre by Nuqsh brand"
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20 lg:py-32">
        <div className="space-y-8 text-muted leading-relaxed">
          <p className="text-xl text-foreground font-serif italic leading-relaxed">
            Nakhré by Nuqsh is for the woman who carries her heritage
            like jewellery — quietly, beautifully, on her own terms.
          </p>
          <p>
            We&apos;re a small studio in Atlanta, Georgia, designing slowly
            and sending each design home to Pakistan — where every kurta,
            every dupatta, every handwork suit ends in the careful hands of
            artisans we&apos;ve known for years. No factories. No fast
            fashion. Just slow, deliberate stitching — the kind that takes
            weeks because it should.
          </p>
          <p>
            <em className="font-serif italic text-foreground">Nakhré </em>
            — that untranslatable Urdu word for the playful, knowing
            confidence of someone who knows her worth. And
            <em className="font-serif italic text-foreground"> nuqsh </em>
            — the imprint, the pattern, the mark we leave behind. Together,
            they&apos;re the brief: clothes for your most
            <em className="font-serif italic text-foreground"> nakhré wale </em>
            moments, marked with the imprint of a hundred hands.
          </p>
          <p>
            We launched in soft mode in 2026 — with a tiny capsule of
            handwork pret and a promise to grow only as fast as the craft
            allows.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-foreground/[0.02] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-4">
              — The Practice
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl">
              How we <span className="italic">work.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Slow, by hand",
                text: "Every kurta is hand-embroidered in small batches by artisans we work with directly. No outsourced factories, no shortcuts.",
              },
              {
                title: "Atlanta × Pakistan",
                text: "Designed at our Atlanta studio, hand-embroidered by karigars in Pakistan. Two homes, one obsession with craft.",
              },
              {
                title: "Quietly luxurious",
                text: "We don&apos;t do logos or loud branding. The luxury is in the weight of the fabric and the density of the handwork.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p
                  className="text-sm text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: value.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
