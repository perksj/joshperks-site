export default function Home() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-5xl font-serif mb-8 leading-tight">
        Curious about how things work.
      </h1>

      <p className="text-lg mb-6">
        I’m a Physics Researcher working in lattice QCD with a background in
        mathematics and physics from the University of Adelaide.
      </p>

      <p className="text-lg mb-6">
        Outside formal research, I build neural networks from scratch, implement
        backpropagation manually, and experiment with trading algorithms to
        understand how difficult it is to beat the market.
      </p>

      <p className="text-lg mb-12">
        I’m motivated by structure, rigor, and systems that reward careful
        thinking.
      </p>

      <div className="space-y-3 text-sm underline">
        <a href="/projects">View Projects →</a>
        <br />
        <a href="/writing">Read Writing →</a>
      </div>
    </main>
  );
}