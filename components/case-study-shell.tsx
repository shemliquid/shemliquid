import Link from "next/link";
import type { Product } from "@/lib/products";

const sections = [
  { id: "problem", label: "The problem", placeholder: "What was inefficient?" },
  { id: "idea", label: "The idea", placeholder: "What needed to change?" },
  {
    id: "solution",
    label: "The solution",
    placeholder: "What did the software do?",
  },
  {
    id: "workflow",
    label: "The workflow",
    placeholder: "Before → After process story.",
  },
  {
    id: "product",
    label: "The product",
    placeholder: "Screenshots / interactive demo go here.",
  },
  {
    id: "impact",
    label: "The impact",
    placeholder:
      "What became faster, easier, safer, or more organized? Real figures only when available.",
  },
  {
    id: "technology",
    label: "Technology",
    placeholder: "Stack and technical details — after the business value.",
  },
] as const;

export function CaseStudyShell({ product }: { product: Product }) {
  return (
    <article className="section-pad pt-28 md:pt-36">
      <div className="content-shell">
        <Link
          href="/products"
          className="text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          ← Products
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Case study
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground-muted">
            {product.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-subtle">
            {product.problem}
          </p>
        </header>

        <div className="mt-16 space-y-0 border-t border-border">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="border-b border-border py-10 md:py-12"
            >
              <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {section.label}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted italic">
                {section.placeholder}
              </p>
            </section>
          ))}

          <section className="py-10 md:py-12">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Built by
            </h2>
            <p className="mt-3 text-base text-foreground-muted">
              Shem Narh ·{" "}
              <span className="text-accent">Shemliquid</span>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
