export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-serif mb-6">Josh Perks</h1>

      <p className="text-lg mb-6">
        Physics Researcher working in lattice QCD. I build things to
        understand how they work: neural networks from scratch, trading
        algorithms, and mathematically structured systems.
      </p>

      <div className="space-y-2 text-sm underline">
        <a href="/projects">Projects</a>
        <br />
        <a href="/writing">Writing</a>
        <br />
        <a href="/resume">Resume</a>
        <br />
        <a href="mailto:your-email@example.com">Contact</a>
      </div>
    </main>
  );
}