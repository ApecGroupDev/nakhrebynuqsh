import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nakhre by Nuqsh",
  description: "Get in touch with Nakhre by Nuqsh.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Get In Touch
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl mb-4">Contact Us</h1>
        <p className="text-muted text-sm max-w-md mx-auto">
          We&apos;d love to hear from you. Reach out with any questions,
          feedback, or collaboration ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-transparent border border-foreground/20 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-transparent border border-foreground/20 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3">
                Email
              </label>
              <input
                type="email"
                className="w-full h-12 px-4 bg-transparent border border-foreground/20 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3">
                Subject
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 bg-transparent border border-foreground/20 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-foreground/20 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="h-12 px-8 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4">
              Visit Us
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              456 Peachtree Artisan Way
              <br />
              Atlanta, Georgia 30301
              <br />
              United States
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4">Email</h3>
            <a
              href="mailto:hello@nakhrebynuqsh.com"
              className="text-sm text-muted hover:text-gold transition-colors"
            >
              hello@nakhrebynuqsh.com
            </a>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4">Phone</h3>
            <a
              href="tel:+14045551234"
              className="text-sm text-muted hover:text-gold transition-colors"
            >
              +1 (404) 555-1234
            </a>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4">Hours</h3>
            <p className="text-sm text-muted leading-relaxed">
              Monday — Friday: 10am — 7pm
              <br />
              Saturday: 11am — 5pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
