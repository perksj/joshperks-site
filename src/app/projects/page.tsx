import Link from "next/link";

import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-18">
      <h1 className="text-4xl font-serif mb-12">Projects</h1>

      <div className="space-y-10">
        {PROJECTS.map((p) => (
          <div key={p.slug}>
            <h2 className="text-xl font-semibold">
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-foreground/70 mt-2">{p.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}