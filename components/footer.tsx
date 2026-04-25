import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/collections", label: "Collections" },
    { href: "/shop", label: "New Arrivals" },
    { href: "/shop", label: "Best Sellers" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "Careers" },
    { href: "/about", label: "Press" },
  ],
  support: [
    { href: "/contact", label: "FAQ" },
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Returns" },
    { href: "/contact", label: "Size Guide" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground/[0.02] border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl tracking-[0.15em]">
                NAKHRE
              </span>
              <span className="block text-[9px] tracking-[0.3em] uppercase text-muted">
                by Nuqsh
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Where tradition meets contemporary elegance. Curated clothing and
              jewellery for the modern soul.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-[0.2em] uppercase mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Nakhre by Nuqsh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
