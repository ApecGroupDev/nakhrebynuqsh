import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AuthForm } from "../auth-form";

export const metadata: Metadata = {
  title: "Create Account | Nakhré by Nuqsh",
};

export default async function SignupPage() {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <section className="max-w-md mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <div className="mb-12">
        <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-accent" />
          Join the Circle
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight">
          Create an <span className="italic">account.</span>
        </h1>
        <p className="text-muted text-sm leading-relaxed mt-4">
          Save your favourites, track orders, and be first to know when new
          handwork arrives.
        </p>
      </div>

      <AuthForm mode="signup" />
    </section>
  );
}
