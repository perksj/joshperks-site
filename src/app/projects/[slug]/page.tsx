import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProject, PROJECTS } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-18">
      <div className="mb-10">
        <Link href="/projects" className="text-sm underline">
          ← Back to Projects
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-4xl font-serif mb-4">{project.title}</h1>
        <p className="text-foreground/70">{project.summary}</p>

        {project.stack && project.stack.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 rounded border border-foreground/15 text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm underline">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label} →
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <div className="space-y-10">
        {project.sections?.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <div className="space-y-4 text-foreground/80">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
