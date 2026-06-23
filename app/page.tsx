import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationItem } from "@/components/PublicationItem";
import { Tag } from "@/components/Tag";
import { getProjectList } from "@/lib/mdx";
import { getSelectedPublications } from "@/lib/publications";
import { siteConfig } from "@/lib/site";

const interests = [
  "Human-AI Collaboration",
  "Ubiquitous Computing",
  "Wearable Sensing",
  "Smart Home HAR",
  "Health Sensing"
];

export default function HomePage() {
  const featuredProjects = getProjectList().slice(0, 3);
  const selectedPublications = getSelectedPublications(3);

  return (
    <div className="space-y-20">
      <section className="grid gap-10 rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-panel md:grid-cols-[1.4fr_0.9fr] md:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Academic Homepage</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-ink md:text-6xl">
            Research portfolio for PhD work in human-centered intelligent systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
            I am a PhD student in Computer Science at Georgia Tech, advised by Dr. Thomas Ploetz. My research focuses on
            ubiquitous computing and AI, with a particular interest in human-AI co-evolution across wearable sensing,
            multimodal interaction, smart-home intelligence, and health-oriented systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white" href="/projects">
              Explore projects
            </Link>
            <Link className="rounded-full border border-ink px-5 py-3 text-sm font-medium text-ink" href={siteConfig.cv}>
              Download CV
            </Link>
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-ink p-8 text-white">
          <div className="flex items-center gap-4">
            <Image
              alt="Yingtian Shi"
              className="h-20 w-20 rounded-full border border-white/20 object-cover"
              height={80}
              src="/images/profile.png"
              width={80}
            />
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-accentSoft">Quick Links</p>
              <p className="mt-2 text-sm text-slate-200">{siteConfig.affiliation}</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            <Link className="block border-b border-white/15 pb-3 hover:text-accentSoft" href={siteConfig.github} target="_blank">
              GitHub
            </Link>
            <Link className="block border-b border-white/15 pb-3 hover:text-accentSoft" href={siteConfig.scholar} target="_blank">
              Google Scholar
            </Link>
            <Link className="block border-b border-white/15 pb-3 hover:text-accentSoft" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Research Interests</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">Current directions</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {interests.map((interest) => (
            <div key={interest} className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-panel">
              <p className="font-medium text-ink">{interest}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Featured Projects</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">Selected systems and prototypes</h2>
          </div>
          <Link className="text-sm font-medium text-accent underline-offset-4 hover:underline" href="/projects">
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Selected Publications</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">Recent papers and workshop work</h2>
          </div>
          <Link className="text-sm font-medium text-accent underline-offset-4 hover:underline" href="/publications">
            Full publication list
          </Link>
        </div>
        <div className="space-y-5">
          {selectedPublications.map((publication) => (
            <PublicationItem key={`${publication.title}-${publication.year}`} publication={publication} />
          ))}
        </div>
      </section>
    </div>
  );
}
