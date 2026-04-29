import Image from "next/image";
import Link from "next/link";

const SOCIAL_HANDLE = "nakhrebynuqsh";
const INSTAGRAM_URL = `https://instagram.com/${SOCIAL_HANDLE}`;
const TIKTOK_URL = `https://tiktok.com/@${SOCIAL_HANDLE}`;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.6a8.16 8.16 0 0 0 4.77 1.52V6.7c-.66 0-1.31-.01-1.84-.01Z" />
    </svg>
  );
}

const footerLinks = {
  shop: [
    { href: "/shop", label: "Pret" },
    { href: "/shop", label: "Festive" },
    { href: "/collections", label: "Collections" },
    { href: "/shop", label: "Coming Soon" },
  ],
  studio: [
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
    { href: INSTAGRAM_URL, label: "Instagram" },
    { href: TIKTOK_URL, label: "TikTok" },
  ],
  care: [
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Exchanges" },
    { href: "/contact", label: "Size Guide" },
    { href: "/contact", label: "FAQ" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground/[0.02] border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="Nakhré by Nuqsh — Home">
              <Image
                src="/main-logo.png"
                alt=""
                width={180}
                height={180}
                className="h-12 lg:h-16 pt-2 w-auto object-contain dark:invert dark:brightness-150"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg tracking-[0.18em]">
                  NAKHRÉ
                </span>
                <span className="block text-[8px] tracking-[0.35em] uppercase text-muted mt-1">
                  by Nuqsh
                </span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-muted leading-relaxed max-w-xs">
              Handwork pret &amp; embroidered festive wear — for your
              <em className="font-serif italic"> nakhré wale </em>
              moments.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <span className="ml-1 text-xs tracking-[0.2em] uppercase text-muted">
                @{SOCIAL_HANDLE}
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-[0.2em] uppercase mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-sm text-muted hover:text-accent transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Nakhré by Nuqsh. Designed in Atlanta · Crafted in Pakistan.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
