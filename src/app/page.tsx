export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-18">
      <h1 className="text-5xl font-serif mb-8 leading-tight">
        Hi, I'm Josh.
      </h1>

      <p className="text-lg mb-6">
        I’m currently working as a particle physicist at the University of Adelaide.
        I investigate the properties of protons and neutrons using a computational
        tool called{" "}
        <a
          href="https://en.wikipedia.org/wiki/Lattice_QCD"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          lattice QCD
        </a>.
      </p>
      <p className="text-lg mb-6">
        Outside formal research, I have built neural networks and a GPT-2 size large language model from scratch. 
        I enjoy analysing financial market data (SP500) and exploring how to build trading algorithms to understand 
        how difficult it is to `beat the market'.
      </p>

      <p className="text-lg mb-12">
        I love to learn and enjoy building things to better understand how they work.
      </p>

      <div className="space-y-3 text-sm underline">
        <a href="/projects">View Projects →</a>
        <br />
        <a href="/writing">Read Writing →</a>
      </div>
    </main>
  );
}