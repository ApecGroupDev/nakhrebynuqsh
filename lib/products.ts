import { prisma } from "@/lib/prisma";

export const PRODUCT_CATEGORIES = ["Pret", "Festive", "Bridal", "Accessories"] as const;
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export async function getAllProducts(opts?: { category?: string }) {
  const where: { active: boolean; category?: string } = { active: true };
  if (opts?.category && opts.category !== "All") {
    where.category = opts.category;
  }
  return prisma.product.findMany({
    where,
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
}

export async function getFeaturedProducts(limit = 4) {
  return prisma.product.findMany({
    where: { active: true, featured: true },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({ where: { slug } });
}

export async function getAllProductsForAdmin() {
  return prisma.product.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({ where: { id } });
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
