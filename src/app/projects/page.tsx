import Link from "next/link";

export default function Projects() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-4xl font-serif mb-12">Projects</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold">
              <Link href="/projects/sp500">
                S&P 500 Return Analysis
              </Link>
          </h2>
          <p className="text-black/70 mt-2">
            Statistical analysis of daily returns and backtesting of
            volatility and momentum strategies using pandas and NumPy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            <Link href="#">Neural Networks from Scratch</Link>
          </h2>
          <p className="text-black/70 mt-2">
            Manual implementation of backpropagation and MLP training using
            only NumPy to understand gradient dynamics.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            <Link href="#">Building an LLM</Link>
          </h2>
          <p className="text-black/70 mt-2">
            Educational implementation of transformer components in PyTorch
            following a from-scratch textbook approach.
          </p>
        </div>
      </div>
    </main>
  );
}