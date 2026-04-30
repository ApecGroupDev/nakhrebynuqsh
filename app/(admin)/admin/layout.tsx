import Link from "next/link";
import { requireAdmin } from "@/lib/auth-helpers";
import { signOutAction } from "@/app/actions/auth";

export const metadata = {
  title: "Admin | Nakhré by Nuqsh",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-foreground/10 bg-background sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/admin"
              className="font-serif text-base tracking-[0.18em]"
            >
              NAKHRÉ <span className="text-muted text-[10px] tracking-[0.3em] ml-1">/ ADMIN</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/admin/products"
                className="text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-accent transition-colors"
              >
                Products
              </Link>
              <Link
                href="/"
                className="text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-accent transition-colors"
              >
                View Storefront
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[11px] text-muted truncate max-w-[180px]">
              {session.user?.email}
            </span>
            <form action={signOutAction}>
              <button
                type="submit"
                className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
