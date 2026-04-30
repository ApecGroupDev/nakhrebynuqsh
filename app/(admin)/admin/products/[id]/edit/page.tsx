import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { ProductForm } from "../../product-form";
import { updateProductAction, deleteProductAction } from "../../actions";

export const metadata = {
  title: "Edit Product | Admin",
  robots: { index: false, follow: false },
};

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  const action = updateProductAction.bind(null, id);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <Link
            href="/admin/products"
            className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors"
          >
            ← Products
          </Link>
          <h1 className="font-serif text-3xl lg:text-4xl mt-4">
            Edit <span className="italic">{product.name}</span>
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-2">
            <Link
              href={`/shop/${product.slug}`}
              target="_blank"
              className="hover:text-accent"
            >
              View on storefront ↗
            </Link>
          </p>
        </div>
        <form action={deleteProductAction}>
          <input type="hidden" name="id" value={product.id} />
          <button
            type="submit"
            className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-red-500 transition-colors"
          >
            Delete
          </button>
        </form>
      </div>

      <ProductForm mode="edit" initial={product} action={action} />
    </div>
  );
}
