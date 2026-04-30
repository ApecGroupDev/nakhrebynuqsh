"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-helpers";
import { slugify, PRODUCT_CATEGORIES } from "@/lib/products";
import { parsePriceToCents } from "@/lib/format";

export type ProductFormState =
  | {
      error?: string;
      fieldErrors?: Partial<Record<"name" | "slug" | "category" | "price" | "image" | "description", string>>;
      values?: Record<string, string>;
    }
  | undefined;

const baseSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  slug: z
    .string()
    .min(2, "Slug is too short")
    .max(80)
    .regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, hyphens only")
    .optional()
    .or(z.literal("")),
  category: z.enum(PRODUCT_CATEGORIES, { message: "Pick a category" }),
  description: z.string().max(2000).optional().or(z.literal("")),
  image: z.string().url("Must be a valid URL").max(2048),
  price: z.string().min(1, "Price is required"),
  featured: z.union([z.literal("on"), z.literal("")]).optional(),
  active: z.union([z.literal("on"), z.literal("")]).optional(),
});

function pickValues(formData: FormData) {
  const keys = ["name", "slug", "category", "description", "image", "price", "featured", "active"];
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = formData.get(k);
    if (typeof v === "string") out[k] = v;
  }
  return out;
}

async function ensureUniqueSlug(slug: string, excludeId?: string) {
  let candidate = slug || "product";
  let n = 1;
  for (;;) {
    const existing = await prisma.product.findUnique({ where: { slug: candidate } });
    if (!existing || existing.id === excludeId) return candidate;
    n += 1;
    candidate = `${slug}-${n}`;
  }
}

export async function createProductAction(
  _prev: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  await requireAdmin();
  const values = pickValues(formData);
  const parsed = baseSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: NonNullable<ProductFormState>["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as keyof NonNullable<NonNullable<ProductFormState>["fieldErrors"]>;
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    return { fieldErrors, values };
  }

  const priceCents = parsePriceToCents(parsed.data.price);
  if (priceCents == null) {
    return { fieldErrors: { price: "Enter a valid price (e.g. 148 or 148.00)" }, values };
  }

  const slugSeed = parsed.data.slug && parsed.data.slug.length > 0
    ? slugify(parsed.data.slug)
    : slugify(parsed.data.name);
  const slug = await ensureUniqueSlug(slugSeed);

  const created = await prisma.product.create({
    data: {
      name: parsed.data.name,
      slug,
      category: parsed.data.category,
      description: parsed.data.description || null,
      image: parsed.data.image,
      priceCents,
      featured: parsed.data.featured === "on",
      active: parsed.data.active === "on",
    },
  });

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/admin/products");
  redirect(`/admin/products/${created.id}/edit`);
}

export async function updateProductAction(
  id: string,
  _prev: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  await requireAdmin();
  const values = pickValues(formData);
  const parsed = baseSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: NonNullable<ProductFormState>["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as keyof NonNullable<NonNullable<ProductFormState>["fieldErrors"]>;
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    return { fieldErrors, values };
  }

  const priceCents = parsePriceToCents(parsed.data.price);
  if (priceCents == null) {
    return { fieldErrors: { price: "Enter a valid price (e.g. 148 or 148.00)" }, values };
  }

  const slugSeed = parsed.data.slug && parsed.data.slug.length > 0
    ? slugify(parsed.data.slug)
    : slugify(parsed.data.name);
  const slug = await ensureUniqueSlug(slugSeed, id);

  const updated = await prisma.product.update({
    where: { id },
    data: {
      name: parsed.data.name,
      slug,
      category: parsed.data.category,
      description: parsed.data.description || null,
      image: parsed.data.image,
      priceCents,
      featured: parsed.data.featured === "on",
      active: parsed.data.active === "on",
    },
  });

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath(`/shop/${updated.slug}`);
  revalidatePath("/admin/products");
  return { values };
}

export async function deleteProductAction(formData: FormData) {
  "use server";
  await requireAdmin();
  const id = formData.get("id");
  if (typeof id !== "string" || !id) return;
  await prisma.product.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/admin/products");
}
