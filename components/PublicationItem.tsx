import Link from "next/link";
import { Publication } from "@/data/publications";

export function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-panel">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-serif text-2xl text-ink">{publication.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate">{publication.authors.join(", ")}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-gold">
            {publication.venue} · {publication.year}
          </p>
        </div>
        {publication.selected ? (
          <span className="rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">Selected</span>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        {publication.paper ? (
          <Link className="font-medium text-accent underline-offset-4 hover:underline" href={publication.paper} target="_blank">
            Paper
          </Link>
        ) : null}
        {publication.code ? (
          <Link className="font-medium text-accent underline-offset-4 hover:underline" href={publication.code} target="_blank">
            Code
          </Link>
        ) : null}
        {publication.project ? (
          <Link className="font-medium text-accent underline-offset-4 hover:underline" href={publication.project}>
            Project
          </Link>
        ) : null}
      </div>
      {publication.bibtex ? (
        <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100">{publication.bibtex}</pre>
      ) : null}
    </article>
  );
}
