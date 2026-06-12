import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const post = await getBlogBySlug(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.summary
    };
  } catch {
    return {
      title: "Blog"
    };
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const post = await getBlogBySlug(slug);

    return (
      <article className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <Link className="text-sm font-medium text-accent underline-offset-4 hover:underline" href="/blog">
          Back to notes
        </Link>
        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate">{post.frontmatter.date}</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">{post.frontmatter.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate">{post.frontmatter.summary}</p>
        <div className="prose prose-slate mt-10 max-w-none">{post.content}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
