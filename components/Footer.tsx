import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.title}</p>
        <div className="flex flex-wrap gap-4">
          <Link href={siteConfig.github} target="_blank">
            GitHub
          </Link>
          <Link href={siteConfig.scholar} target="_blank">
            Google Scholar
          </Link>
          <Link href={`mailto:${siteConfig.email}`}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
