import { ProjectCard } from "@/components/ProjectCard";
import { getProjectList } from "@/lib/mdx";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  const projects = getProjectList();

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">Projects</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">MDX-managed project archive</h1>
        <p className="mt-6 max-w-3xl leading-8 text-slate">
          Each project lives in `content/projects/*.mdx` with frontmatter for title, slug, date, status, tags, description,
          image, and links.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
