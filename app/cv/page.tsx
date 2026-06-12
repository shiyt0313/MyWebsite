import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "CV"
};

export default function CVPage() {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
      <p className="text-sm uppercase tracking-[0.28em] text-accent">CV</p>
      <h1 className="mt-4 font-serif text-4xl text-ink">Curriculum Vitae</h1>
      <p className="mt-6 max-w-2xl leading-8 text-slate">
        Store your PDF at `public/cv.pdf`. This page keeps the interaction simple and deployment-friendly.
      </p>
      <div className="mt-8">
        <Link className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white" href={siteConfig.cv} target="_blank">
          Download CV
        </Link>
      </div>
    </section>
  );
}
