import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nakhre by Nuqsh",
  description:
    "The story behind Nakhre by Nuqsh — where tradition meets contemporary elegance.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto leading-tight">
          Crafting Elegance,
          <br />
          <span className="italic">One Piece at a Time</span>
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
          <p className="text-lg">
            Nakhre by Nuqsh was born from a deep reverence for artisanal
            craftsmanship and a desire to bring traditional aesthetics into
            contemporary life.
          </p>
          <p>
            Each piece in our collection is a testament to the skilled hands
            that create it — from the intricate threadwork of our clothing line
            to the delicate metalwork of our jewellery. We believe that true
            luxury lies not in opulence, but in the story behind every stitch
            and every setting.
          </p>
          <p>
            Our name, &ldquo;Nakhre,&rdquo; speaks to the quiet confidence and
            grace that comes from wearing something truly special.
            &ldquo;Nuqsh&rdquo; — meaning pattern or impression — represents
            the indelible mark that artistry leaves on everything it touches.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-foreground/[0.02] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Artisan Craft",
                text: "Every piece is handcrafted by skilled artisans, preserving techniques passed down through generations.",
              },
              {
                title: "Sustainable Luxury",
                text: "We source responsibly and produce mindfully, ensuring beauty doesn\u2019t come at the cost of our planet.",
              },
              {
                title: "Timeless Design",
                text: "Our designs transcend trends, creating pieces that become cherished parts of your personal story.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
