import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getAllProducts, PRODUCT_CATEGORIES } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Nakhré by Nuqsh",
  description: "Browse our handwork pret and embroidered festive wear — designed in Atlanta, crafted in Pakistan.",
};

const categories = ["All", ...PRODUCT_CATEGORIES] as const;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (categories as readonly string[]).includes(category ?? "")
    ? (category as string)
    : "All";

  const products = await getAllProducts({ category: active });

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
        {categories.map((cat) => {
          const isActive = cat === active;
          const href = cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`;
          return (
            <Link
              key={cat}
              href={href}
              className={`text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 border rounded-full transition-colors duration-200 ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/15 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {/* Products grid */}
      {products.length === 0 ? (
        <p className="text-center text-muted text-sm py-20">
          Nothing in this edit yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
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
      )}
    </div>
  );
}
