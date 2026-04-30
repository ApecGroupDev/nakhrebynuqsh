import Image from "next/image";
import Link from "next/link";
import { getAllProductsForAdmin } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { deleteProductAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await getAllProductsForAdmin();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-2">
            Catalogue
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl">
            Products <span className="text-muted text-base ml-2">({products.length})</span>
          </h1>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center justify-center h-11 px-6 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors"
        >
          + New Product
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-muted text-sm py-20 text-center">No products yet. Create the first one.</p>
      ) : (
        <div className="border border-foreground/10">
          <table className="w-full text-sm">
            <thead className="bg-foreground/[0.02] text-[10px] tracking-[0.25em] uppercase text-muted">
              <tr>
                <th className="text-left px-4 py-3 font-normal w-16">Image</th>
                <th className="text-left px-4 py-3 font-normal">Name</th>
                <th className="text-left px-4 py-3 font-normal">Category</th>
                <th className="text-left px-4 py-3 font-normal">Price</th>
                <th className="text-left px-4 py-3 font-normal">Status</th>
                <th className="text-right px-4 py-3 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-foreground/10">
                  <td className="px-4 py-3">
                    <div className="relative w-12 h-16 bg-foreground/5 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="font-serif hover:text-accent transition-colors"
                    >
                      {p.name}
                    </Link>
                    <p className="text-[11px] text-muted mt-0.5">/{p.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-muted">{p.category}</td>
                  <td className="px-4 py-3">{formatPrice(p.priceCents)}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1 text-[10px] tracking-[0.2em] uppercase">
                      <span className={p.active ? "text-emerald-600 dark:text-emerald-400" : "text-muted"}>
                        {p.active ? "● Active" : "○ Hidden"}
                      </span>
                      {p.featured && <span className="text-accent">★ Featured</span>}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-3">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors"
                      >
                        Edit
                      </Link>
                      <form action={deleteProductAction}>
                        <input type="hidden" name="id" value={p.id} />
                        <button
                          type="submit"
                          className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-red-500 transition-colors"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
