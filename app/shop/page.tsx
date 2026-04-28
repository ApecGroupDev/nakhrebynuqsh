import { ProductCard } from "@/components/product-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Nakhre by Nuqsh",
  description: "Browse our collection of handcrafted clothing and jewellery.",
};

const categories = [
  "All",
  "Clothing",
  "Jewellery",
  "Accessories",
  "New Arrivals",
];

const products = [
  { name: "Silk Draped Kurta", price: "$89.00", category: "Clothing", image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&h=800&fit=crop" },
  { name: "Gold Jhumka Earrings", price: "$58.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop" },
  { name: "Embroidered Shawl", price: "$105.00", category: "Clothing", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop" },
  { name: "Pearl Choker Set", price: "$129.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop" },
  { name: "Organza Dupatta", price: "$48.00", category: "Accessories", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop" },
  { name: "Kundan Maang Tikka", price: "$67.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop" },
  { name: "Velvet Embroidered Jacket", price: "$155.00", category: "Clothing", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop" },
  { name: "Filigree Bangles Set", price: "$78.00", category: "Jewellery", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop" },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl lg:text-5xl mb-4">Shop</h1>
        <p className="text-muted text-sm max-w-md mx-auto">
          Explore our curated selection of handcrafted clothing and jewellery
          pieces.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 ${
              i === 0
                ? "border-foreground text-foreground"
                : "border-foreground/20 text-muted hover:border-gold hover:text-gold"
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
