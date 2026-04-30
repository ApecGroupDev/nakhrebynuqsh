import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "gulposh-handwork-kurta",
    name: "Gulposh Handwork Kurta",
    priceCents: 14800,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop",
    description:
      "A featherlight handwork kurta in pearl-soft viscose silk — gulposh embroidery on the neckline, finished slowly by hand in our Lahore atelier.",
    featured: true,
  },
  {
    slug: "mehrab-embroidered-suit",
    name: "Mehrab Embroidered Suit",
    priceCents: 22500,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop",
    description:
      "Three-piece embroidered suit with mehrab-arch motifs along the hemline. An everyday-festive piece for the women who like a little nakhré with their chai.",
    featured: true,
  },
  {
    slug: "roshni-anarkali",
    name: "Roshni Anarkali",
    priceCents: 29500,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&h=800&fit=crop",
    description:
      "A flowing anarkali in champagne organza, hand-embroidered with tiny mirror clusters that catch every bit of roshni in the room.",
    featured: true,
  },
  {
    slug: "noor-organza-dupatta",
    name: "Noor Organza Dupatta",
    priceCents: 7800,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    description:
      "Hand-finished organza dupatta with a delicate gota border — wear it with everything, throw it over a kurta, knot it like jewellery.",
    featured: true,
  },
  {
    slug: "sehr-cotton-kurta",
    name: "Sehr Cotton Kurta",
    priceCents: 9800,
    category: "Pret",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
    description:
      "Soft handloom cotton kurta with a subtle chikankari yoke. The piece you reach for when the day asks for ease.",
  },
  {
    slug: "zarmeena-velvet-shawl",
    name: "Zarmeena Velvet Shawl",
    priceCents: 16500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop",
    description:
      "A deep burgundy velvet shawl with antique-gold zardozi corners — heirloom-weight, made to be passed down.",
  },
  {
    slug: "mehfil-bridal-lehenga",
    name: "Mehfil Bridal Lehenga",
    priceCents: 115000,
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    description:
      "Made-to-order bridal lehenga in oxblood raw silk, layered with dabka, sequins, and tilla. Six weeks of slow work, one unforgettable mehfil.",
  },
  {
    slug: "aabroo-chikankari-suit",
    name: "Aabroo Chikankari Suit",
    priceCents: 13500,
    category: "Pret",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",
    description:
      "Pure white chikankari three-piece — the kind of quiet that turns heads. Hand-embroidered by artisans in Lucknow tradition.",
  },
];

async function main() {
  console.log("Seeding products...");
  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      create: p,
      update: p,
    });
  }
  console.log(`  -> ${products.length} products upserted.`);

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (adminEmail) {
    const updated = await prisma.user.updateMany({
      where: { email: adminEmail },
      data: { role: "admin" },
    });
    if (updated.count > 0) {
      console.log(`  -> Promoted ${adminEmail} to admin.`);
    } else {
      console.log(`  -> No user found for ADMIN_EMAIL=${adminEmail} (sign up first, then re-run seed).`);
    }
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
