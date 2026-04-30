import Link from "next/link";
import { ProductForm } from "../product-form";
import { createProductAction } from "../actions";

export const metadata = {
  title: "New Product | Admin",
  robots: { index: false, follow: false },
};

export default function NewProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="mb-10">
        <Link
          href="/admin/products"
          className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors"
        >
          ← Products
        </Link>
        <h1 className="font-serif text-3xl lg:text-4xl mt-4">
          New <span className="italic">product.</span>
        </h1>
      </div>
      <ProductForm mode="create" action={createProductAction} />
    </div>
  );
}
