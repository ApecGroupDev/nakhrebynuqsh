"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, signupAction, type AuthFormState } from "./actions";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const action = mode === "login" ? loginAction : signupAction;
  const [state, formAction, pending] = useActionState<AuthFormState, FormData>(action, undefined);

  return (
    <div className="space-y-8">
      {state?.error && (
        <div className="border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-7">
        {mode === "signup" && (
          <Field
            label="Name"
            name="name"
            type="text"
            placeholder="Ayesha Khan"
            error={state?.fieldErrors?.name}
            autoComplete="name"
          />
        )}
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          error={state?.fieldErrors?.email}
          autoComplete="email"
          required
        />
        <Field
          label="Password"
          name="password"
          type="password"
          placeholder={mode === "signup" ? "At least 8 characters" : "••••••••"}
          error={state?.fieldErrors?.password}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          required
        />

        <button
          type="submit"
          disabled={pending}
          className="group inline-flex w-full items-center justify-center h-12 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Please wait…" : mode === "login" ? "Sign In" : "Create Account"}
          <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
        </button>
      </form>

      <p className="text-[11px] text-muted text-center">
        {mode === "login" ? (
          <>
            New here?{" "}
            <Link href="/signup" className="text-foreground underline-offset-4 hover:underline hover:text-accent">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-foreground underline-offset-4 hover:underline hover:text-accent">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors aria-[invalid=true]:border-red-500/60"
      />
      {error && <p className="mt-2 text-[11px] text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
