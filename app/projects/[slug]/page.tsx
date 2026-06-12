import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    return {
      title: project.frontmatter.title,
      description: project.frontmatter.description
    };
  } catch {
    return {
      title: "Project"
    };
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    return (
      <article className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <Link className="text-sm font-medium text-accent underline-offset-4 hover:underline" href="/projects">
          Back to projects
        </Link>
        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate">{project.frontmatter.date}</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">{project.frontmatter.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate">{project.frontmatter.description}</p>
        <div className="prose prose-slate mt-10 max-w-none">{project.content}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
