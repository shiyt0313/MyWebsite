import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(204,251,241,0.9),transparent_38%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.25))]" />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">{children}</main>
      <Footer />
    </div>
  );
}
