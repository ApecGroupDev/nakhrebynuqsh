import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nakhré by Nuqsh",
  description: "Custom orders, press, and collaborations — say hello.",
};

const SOCIAL_HANDLE = "nakhrebynuqsh";

const quickReach = [
  {
    label: "Email",
    value: "hello@nakhrebynuqsh.com",
    href: "mailto:hello@nakhrebynuqsh.com",
    note: "Replies within 24 — 48h",
  },
  {
    label: "Instagram",
    value: `@${SOCIAL_HANDLE}`,
    href: `https://instagram.com/${SOCIAL_HANDLE}`,
    note: "DMs always open",
  },
  {
    label: "TikTok",
    value: `@${SOCIAL_HANDLE}`,
    href: `https://tiktok.com/@${SOCIAL_HANDLE}`,
    note: "Behind the scenes",
  },
];

const reasons = [
  "Just saying hi",
  "Custom order",
  "Press / Feature",
  "Wholesale",
  "Collaboration",
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Say Hello
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              Let&apos;s <span className="italic">talk.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted text-base leading-relaxed max-w-md">
              Custom orders, press, collaborations, or just to say hi —
              we read every message and reply, slowly but always.
            </p>
          </div>
        </div>
      </section>

      {/* Quick reach cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-foreground/10 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {quickReach.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group p-8 lg:p-10 hover:bg-accent-soft/30 transition-colors"
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-accent mb-4">
                {item.label}
              </p>
              <p className="font-serif text-xl lg:text-2xl group-hover:italic transition-all">
                {item.value}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-muted flex items-center gap-2">
                {item.note}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Studio info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7 lg:pr-8 lg:border-r lg:border-foreground/10">
            <div className="mb-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-3">
                — Write to Us
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl">
                Send a <span className="italic">message.</span>
              </h2>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ayesha"
                    className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Khan"
                    className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  I&apos;m reaching out about
                </label>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((r, i) => (
                    <label
                      key={r}
                      className="cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={r}
                        defaultChecked={i === 0}
                        className="peer sr-only"
                      />
                      <span className="block px-4 py-2 text-[11px] tracking-[0.2em] uppercase border border-foreground/15 rounded-full text-muted transition-colors peer-checked:bg-foreground peer-checked:text-background peer-checked:border-foreground hover:border-accent hover:text-accent peer-checked:hover:bg-accent peer-checked:hover:border-accent peer-checked:hover:text-background">
                        {r}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a little bit…"
                  className="w-full bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors resize-none py-2"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center h-12 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-300"
                >
                  Send Message
                  <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-[11px] text-muted">
                  We typically reply within 24 — 48 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Studio info */}
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-3">
                — The Studio
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl">
                Visit <span className="italic">us.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  Address
                </h3>
                <p className="font-serif text-lg leading-relaxed">
                  456 Peachtree Artisan Way
                  <br />
                  Atlanta, Georgia 30301
                </p>
                <a
                  href="https://maps.google.com/?q=Peachtree+Atlanta+GA"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors"
                >
                  Open in maps →
                </a>
              </div>

              <div className="border-t border-foreground/10 pt-8">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  Hours
                </h3>
                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Mon — Fri</dt>
                    <dd>11am — 7pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Saturday</dt>
                    <dd>12pm — 6pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
                <p className="mt-3 text-[11px] text-muted">All times EST.</p>
              </div>

              <div className="border-t border-foreground/10 pt-8">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+14045551234"
                  className="font-serif text-lg hover:text-accent transition-colors"
                >
                  +1 (404) 555-1234
                </a>
              </div>

              <div className="border-t border-foreground/10 pt-8 bg-accent-soft/30 -mx-6 px-6 py-6 lg:mx-0 lg:px-6 lg:rounded-sm">
                <p className="font-serif italic text-base leading-relaxed">
                  &ldquo;The fastest way to reach us is through Instagram
                  DMs — we&apos;re there most of the day.&rdquo;
                </p>
                <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted">
                  — Studio Team
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
