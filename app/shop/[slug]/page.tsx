import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Not found | Nakhré by Nuqsh" };
  return {
    title: `${product.name} | Nakhré by Nuqsh`,
    description: product.description ?? undefined,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || !product.active) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <nav className="text-[11px] tracking-[0.25em] uppercase text-muted mb-10">
        <Link href="/shop" className="hover:text-accent transition-colors">
          Shop
        </Link>
        <span className="mx-3">/</span>
        <span className="text-foreground/70">{product.category}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="relative aspect-[3/4] bg-foreground/[0.03] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-4">
            {product.category}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-6">
            {product.name}
          </h1>
          <p className="text-2xl font-serif mb-8">
            {formatPrice(product.priceCents)}
          </p>
          {product.description && (
            <p className="text-muted text-base leading-relaxed mb-10 max-w-md">
              {product.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <button
              type="button"
              className="flex-1 h-12 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-300"
            >
              Add to Bag
            </button>
            <button
              type="button"
              className="h-12 px-8 border border-foreground/20 text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Save
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/10 space-y-3 text-[11px] tracking-[0.2em] uppercase text-muted max-w-md">
            <p>— Free US shipping over $150</p>
            <p>— Made-to-order pieces ship in 4–6 weeks</p>
            <p>— Atlanta studio · crafted in Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
