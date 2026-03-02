export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack?: string[];
  links?: ProjectLink[];
  sections?: ProjectSection[];
};

export const PROJECTS: Project[] = [
  {
    slug: "sp500",
    title: "S&P 500 Return Analysis",
    summary:
      "Statistical analysis of daily returns and backtesting of volatility and momentum strategies using pandas and NumPy.",
    stack: ["Python", "pandas", "NumPy", "Jupyter"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I looked at historical daily S&P 500 returns and explored what the distribution looks like, how volatility clusters over time, and what simple rules-based strategies do in backtests.",
          "This page is a living summary of the key ideas, results, and plots from the work.",
        ],
      },
      {
        title: "What I did",
        paragraphs: [
          "Return distribution checks (moments, tails, and outliers).",
          "Volatility/momentum signal construction and simple backtests.",
          "Performance evaluation with realistic assumptions and sanity checks.",
        ],
      },
    ],
  },
  {
    slug: "neural-networks-from-scratch",
    title: "Neural Networks from Scratch",
    summary:
      "Manual implementation of backpropagation and MLP training using only NumPy to understand gradient dynamics.",
    stack: ["Python", "NumPy"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A from-scratch multilayer perceptron: forward pass, loss functions, backpropagation, and basic optimizers — all in NumPy.",
          "The focus is understanding what each matrix multiply is doing and how gradients flow through the network.",
        ],
      },
    ],
  },
  {
    slug: "building-an-llm",
    title: "Building an LLM",
    summary:
      "Educational implementation of transformer components in PyTorch following a from-scratch approach.",
    stack: ["Python", "PyTorch"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "An educational build of transformer building blocks (attention, MLP blocks, layer norm), then training/evaluating a small language model.",
          "The emphasis is on clarity and learning — not squeezing out benchmark performance.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
