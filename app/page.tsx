import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { CollectionCard } from "@/components/collection-card";
import { getFeaturedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(4);
  return (
    <>
      {/* Soft launch ticker */}
      <div className="border-b border-foreground/5 bg-accent-soft/40 dark:bg-accent-soft overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5 text-[11px] tracking-[0.35em] uppercase text-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "Soft Launch ✨",
                "Handwork Pret",
                "Embroidered Festive Wear",
                "Atlanta Studio · Crafted in Pakistan",
                "Free US Shipping over $150",
                "Eid Edit — Coming Soon",
              ].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-8">{t}</span>
                  <span className="text-accent">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Split Hero */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">
        {/* Left: type */}
        <div className="lg:col-span-6 flex items-center px-6 lg:px-16 py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Soft Launch &mdash; SS’26
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              for your
              <br />
              <span className="italic">nakhr&eacute; wale</span>
              <br />
              moments <span className="text-accent">&#10024;</span>
            </h1>
            <p className="text-muted text-base lg:text-lg mt-8 max-w-md leading-relaxed">
              Handwork pret &amp; embroidered festive wear, made the slow way
              &mdash; for women who carry their heritage like jewellery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-300"
              >
                Shop the Edit
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-2 text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-accent transition-colors duration-300 group"
              >
                Our Story
                <span className="ml-3 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase text-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Live on Instagram
              </div>
              <a
                href="https://instagram.com/nakhrebynuqsh"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                @nakhrebynuqsh
              </a>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:col-span-6 relative min-h-[60vh] lg:min-h-[88vh] order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=1600&fit=crop"
            alt="Nakhré by Nuqsh — festive pret"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-foreground/[0.04]" />
          {/* Floating tag */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-background/90 backdrop-blur-sm px-5 py-4 max-w-[15rem]">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
              Featured
            </p>
            <p className="font-serif italic text-base">
              The Gulposh Edit
            </p>
            <p className="text-[11px] text-muted mt-1">
              Festive pret — from $148
            </p>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/5">
          {[
            { label: "Pret", note: "Everyday handwork" },
            { label: "Festive", note: "Embroidered statements" },
            { label: "Bridal", note: "Made-to-order" },
            { label: "Accessories", note: "Dupattas &amp; more" },
          ].map((c) => (
            <Link
              key={c.label}
              href="/shop"
              className="group py-10 px-6 text-center hover:bg-accent-soft/40 transition-colors"
            >
              <p className="font-serif text-xl lg:text-2xl group-hover:italic transition-all">
                {c.label}
              </p>
              <p
                className="text-[11px] tracking-[0.2em] uppercase text-muted mt-2"
                dangerouslySetInnerHTML={{ __html: c.note }}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-3">
              The Edit
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl">
              Just <span className="italic">in.</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors duration-200"
          >
            View Everything &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={formatPrice(product.priceCents)}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-3">
              Curated Worlds
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl">
              Our <span className="italic">collections.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CollectionCard
            name="Festive Pret"
            description="Embroidered kurtas &amp; suits for the everyday celebration."
            href="/collections"
            image="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=1000&fit=crop"
          />
          <CollectionCard
            name="The Bridal Edit"
            description="Made-to-order opulence — for the days that ask for more."
            href="/collections"
            image="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
          />
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="relative py-28 lg:py-40 border-y border-foreground/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-8">
            — The Studio
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.25]">
            <span className="italic">Nakhré</span> is the quiet
            confidence of being seen — stitch by stitch, a
            <span className="italic"> nuqsh </span>
            we leave on the world.
          </blockquote>
          <div className="mt-10">
            <Link
              href="/about"
              className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors duration-200"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-4">
              The Inner Circle
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl mb-6">
              Be the <span className="italic">first</span> to know.
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-md">
              New drops, restocks, and quiet little moments from the studio
              — straight to your inbox. No noise, just nakhré.
            </p>
          </div>
          <form className="flex flex-col gap-3">
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted">
              Email Address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 h-12 px-4 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-muted mt-2">
              By subscribing you agree to receive marketing emails. Unsubscribe
              anytime.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
