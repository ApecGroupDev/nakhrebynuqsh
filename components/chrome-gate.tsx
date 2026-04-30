"use client";

import { usePathname } from "next/navigation";

export function ChromeGate({
  hidePrefixes,
  children,
}: {
  hidePrefixes: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  if (hidePrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }
  return <>{children}</>;
}
