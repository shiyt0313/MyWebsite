import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: (props) => <h1 className="mt-10 font-serif text-4xl text-ink" {...props} />,
  h2: (props) => <h2 className="mt-10 border-t border-mist pt-6 font-serif text-2xl text-ink" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold text-ink" {...props} />,
  p: (props) => <p className="mt-4 leading-8 text-slate" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  a: ({ href = "", ...props }) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return <Link className="font-medium text-accent underline-offset-4 hover:underline" href={href} {...props} />;
    }
    return (
      <a
        className="font-medium text-accent underline-offset-4 hover:underline"
        href={href}
        rel="noreferrer"
        target="_blank"
        {...props}
      />
    );
  },
  blockquote: (props) => <blockquote className="mt-6 border-l-4 border-accent bg-accentSoft/30 px-5 py-3 italic text-slate" {...props} />,
  code: (props) => <code className="rounded bg-slate-900 px-1.5 py-1 text-sm text-slate-100" {...props} />,
  pre: (props) => <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm text-slate-100" {...props} />
};

export function useMDXComponents(existingComponents: MDXComponents): MDXComponents {
  return {
    ...components,
    ...existingComponents
  };
}

export function getMDXComponents(): MDXComponents {
  return components;
}
