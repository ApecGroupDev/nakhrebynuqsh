"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 lg:h-[4.5rem]">
          {/* Left: nav links (desktop) / hamburger (mobile) */}
          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -ml-2 hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="flex items-center justify-center group"
            aria-label="Nakhré by Nuqsh — Home"
          >
            <Image
              src="/main-logo.png"
              alt=""
              width={180}
              height={180}
              priority
              className="h-12 lg:h-16 pt-2 w-auto object-contain dark:invert dark:brightness-150 transition-opacity group-hover:opacity-80"
            />
            <span className="flex flex-col items-start leading-none">
              <span className="font-serif text-base lg:text-lg tracking-[0.22em]">
                NAKHRÉ
              </span>
              <span className="text-[8px] lg:text-[9px] tracking-[0.4em] uppercase text-muted mt-1.5">
                by Nuqsh
              </span>
            </span>
          </Link>

          {/* Right: actions */}
          <div className="flex items-center justify-end gap-1">
            <ThemeToggle />
            <button
              className="p-2 hover:text-accent transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/shop"
              className="p-2 hover:text-accent transition-colors duration-200"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-foreground/5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
