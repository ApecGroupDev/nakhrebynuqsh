"use server";

import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";

type FieldErrors = Partial<Record<"name" | "email" | "password", string>>;

export type AuthFormState =
  | {
      error?: string;
      fieldErrors?: FieldErrors;
    }
  | undefined;

const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(1, "Password is required."),
});

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(80),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "At least 8 characters."),
});

function flatten(err: z.ZodError): FieldErrors {
  const fieldErrors: FieldErrors = {};
  for (const issue of err.issues) {
    const key = issue.path[0];
    if (
      (key === "name" || key === "email" || key === "password") &&
      !fieldErrors[key]
    ) {
      fieldErrors[key] = issue.message;
    }
  }
  return fieldErrors;
}

export async function loginAction(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { fieldErrors: flatten(parsed.error) };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/",
    });
    return undefined;
  } catch (err) {
    if (isNextRedirect(err)) {
      throw err;
    }
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return { error: "Invalid email or password." };
      }
      console.error("[loginAction] AuthError:", err);
      return { error: "Could not sign in. Please try again." };
    }
    console.error("[loginAction] unexpected error:", err);
    return { error: "Something went wrong signing you in. Please try again." };
  }
}

function isNextRedirect(err: unknown): boolean {
  // signIn() throws a NEXT_REDIRECT error on success — we must let it propagate.
  return (
    typeof err === "object" &&
    err !== null &&
    "digest" in err &&
    typeof (err as { digest?: unknown }).digest === "string" &&
    (err as { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}

export async function signupAction(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsed = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { fieldErrors: flatten(parsed.error) };
  }

  const { name, email, password } = parsed.data;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return { fieldErrors: { email: "An account with this email already exists." } };
    }

    const hashed = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: { name, email, password: hashed },
    });
  } catch (err) {
    console.error("[signupAction] failed to create user:", err);
    return { error: "We couldn't create your account right now. Please try again in a moment." };
  }

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
    return undefined;
  } catch (err) {
    if (isNextRedirect(err)) {
      // Success — let Next.js perform the redirect.
      throw err;
    }
    if (err instanceof AuthError) {
      console.error("[signupAction] AuthError after signup:", err);
      return { error: "Account created, but sign-in failed. Please try logging in." };
    }
    console.error("[signupAction] unexpected error during signIn:", err);
    return { error: "Account created, but something went wrong signing you in. Please try logging in." };
  }
}
