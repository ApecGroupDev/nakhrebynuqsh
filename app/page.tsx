import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { CollectionCard } from "@/components/collection-card";

const featuredProducts = [
  { name: "Silk Draped Kurta", price: "$89.00", category: "Clothing", image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&h=800&fit=crop" },
  { name: "Gold Jhumka Earrings", price: "$58.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop" },
  { name: "Embroidered Shawl", price: "$105.00", category: "Clothing", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop" },
  { name: "Pearl Choker Set", price: "$129.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            New Season 2026
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
            Where Tradition Meets
            <br />
            <span className="italic">Contemporary Elegance</span>
          </h1>
          <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
            Discover our curated collection of clothing and jewellery,
            handcrafted for the modern soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center h-12 px-8 border border-foreground/20 text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl">Our Collections</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CollectionCard
            name="Clothing"
            description="Timeless silhouettes meet modern design in our signature clothing line."
            href="/collections"
            image="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop"
          />
          <CollectionCard
            name="Jewellery"
            description="Handcrafted pieces that tell a story of heritage and artistry."
            href="/collections"
            image="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
          />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              New Arrivals
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl">Just In</h2>
          </div>
          <Link
            href="/shop"
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200 hidden sm:block"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/shop"
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors"
          >
            View All &rarr;
          </Link>
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="relative py-32 lg:py-40 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed italic">
            &ldquo;Every piece we create is a dialogue between the
            artisan&apos;s hands and the wearer&apos;s soul.&rdquo;
          </blockquote>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-4">
            Join the World of Nakhre
          </h2>
          <p className="text-muted text-sm mb-8">
            Be the first to know about new collections, exclusive offers, and
            behind-the-scenes stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 bg-transparent border border-foreground/20 text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-8 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
