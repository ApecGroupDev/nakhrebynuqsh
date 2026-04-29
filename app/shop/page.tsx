import { ProductCard } from "@/components/product-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Nakhré by Nuqsh",
  description: "Browse our handwork pret and embroidered festive wear — designed in Atlanta, crafted in Pakistan.",
};

const categories = [
  "All",
  "Pret",
  "Festive",
  "Bridal",
  "Accessories",
];

const products = [
  { name: "Gulposh Handwork Kurta", price: "$148.00", category: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop" },
  { name: "Mehrab Embroidered Suit", price: "$225.00", category: "Festive", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop" },
  { name: "Roshni Anarkali", price: "$295.00", category: "Festive", image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&h=800&fit=crop" },
  { name: "Noor Organza Dupatta", price: "$78.00", category: "Accessories", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop" },
  { name: "Sehr Cotton Kurta", price: "$98.00", category: "Pret", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop" },
  { name: "Zarmeena Velvet Shawl", price: "$165.00", category: "Accessories", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop" },
  { name: "Mehfil Bridal Lehenga", price: "$1,150.00", category: "Bridal", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop" },
  { name: "Aabroo Chikankari Suit", price: "$135.00", category: "Pret", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop" },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-4">
          The Edit — SS’26
        </p>
        <h1 className="font-serif text-4xl lg:text-6xl mb-6">
          Shop the <span className="italic">collection.</span>
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          Handwork pret &amp; embroidered festive wear — each piece
          stitched slowly, in small batches, by artisans who care.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 border rounded-full transition-colors duration-200 ${
              i === 0
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/15 text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
