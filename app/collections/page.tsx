import { CollectionCard } from "@/components/collection-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Nakhré by Nuqsh",
  description: "Four worlds, slowly stitched — Gulposh, Mehfil, Sehr, and the Bridal Edit.",
};

const collections = [
  {
    name: "The Gulposh Edit",
    description:
      "Handwork pret kurtas — the everyday luxury of slow embroidery.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop",
  },
  {
    name: "Mehfil — Festive",
    description:
      "Embroidered suits and anarkalis for the nights you'll remember.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=1000&fit=crop",
  },
  {
    name: "Sehr — Daily Pret",
    description:
      "Lightweight cottons and cotton-nets for a softer everyday.",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&h=1000&fit=crop",
  },
  {
    name: "The Bridal Edit",
    description:
      "Made-to-order lehengas and ensembles. Booking by appointment.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-4">
          — Curated Worlds
        </p>
        <h1 className="font-serif text-4xl lg:text-6xl mb-6">
          Our <span className="italic">collections.</span>
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          Four little universes, stitched slowly. Each one a chapter in the
          larger story of Nakhré by Nuqsh.
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
