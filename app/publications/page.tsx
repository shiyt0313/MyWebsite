import { PublicationItem } from "@/components/PublicationItem";
import { getPublications } from "@/lib/publications";

export const metadata = {
  title: "Publications"
};

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">Publications</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Local metadata-driven publication list</h1>
        <p className="mt-6 max-w-3xl leading-8 text-slate">
          Publications are managed in a local TypeScript file and rendered in descending year order without a database.
        </p>
      </section>
      <div className="space-y-5">
        {publications.map((publication) => (
          <PublicationItem key={`${publication.title}-${publication.year}`} publication={publication} />
        ))}
      </div>
    </div>
  );
}
