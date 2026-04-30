import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe Auth.js config.
 * Used by proxy.ts (no DB / no bcrypt imports here).
 */
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;
      const path = nextUrl.pathname;

      if (path.startsWith("/admin")) {
        return isLoggedIn && role === "admin";
      }
      if (path.startsWith("/account")) {
        return isLoggedIn;
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        if (user.id) token.id = user.id;
        if (user.role) token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        if (token?.id) session.user.id = token.id as string;
        if (token?.role) session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
