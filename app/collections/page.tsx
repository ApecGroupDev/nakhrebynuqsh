import { CollectionCard } from "@/components/collection-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Nakhre by Nuqsh",
  description: "Explore our curated collections of clothing and jewellery.",
};

const collections = [
  {
    name: "The Heritage Collection",
    description:
      "Traditional designs reimagined for the modern wardrobe. Rich fabrics, intricate embroidery.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop",
  },
  {
    name: "Luminance Jewellery",
    description:
      "Handcrafted pieces that capture light and tell stories of timeless elegance.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop",
  },
  {
    name: "Summer Essentials",
    description:
      "Light fabrics and breezy silhouettes for warm days and starlit evenings.",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&h=1000&fit=crop",
  },
  {
    name: "Bridal Edit",
    description:
      "For the most special day. Opulent sets paired with heirloom jewellery.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Explore
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl mb-4">Collections</h1>
        <p className="text-muted text-sm max-w-md mx-auto">
          Each collection is a chapter in our story — a celebration of craft,
          culture, and contemporary design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((col) => (
          <CollectionCard
            key={col.name}
            name={col.name}
            description={col.description}
            image={col.image}
          />
        ))}
      </div>
    </div>
  );
}
