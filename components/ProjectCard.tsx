import Link from "next/link";
import { ProjectFrontmatter } from "@/lib/mdx";
import { Tag } from "@/components/Tag";

export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/90 p-6 shadow-panel">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate">{project.date}</p>
          <h3 className="mt-2 font-serif text-2xl text-ink">{project.title}</h3>
        </div>
        <Tag>{project.status}</Tag>
      </div>
      <p className="text-sm leading-7 text-slate">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6 pt-2">
        <Link className="font-medium text-accent underline-offset-4 hover:underline" href={`/projects/${project.slug}`}>
          View project
        </Link>
      </div>
    </article>
  );
}
