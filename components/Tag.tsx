import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-accent/20 bg-accentSoft/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
