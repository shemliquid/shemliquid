import { Reveal } from "@/components/reveal";
import { problemSolutionPairs } from "@/lib/products";

export function Problems() {
  return (
    <section className="section-pad border-t border-border">
      <div className="content-shell">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
            02 — Problems → solutions
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Chaos into clarity.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted">
            These systems were not built around features. They were built around
            friction that people already felt.
          </p>
        </Reveal>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {problemSolutionPairs.map((pair, index) => (
            <Reveal key={pair.problem} delay={index * 0.04}>
              <li className="grid grid-cols-1 items-baseline gap-2 border-b border-border py-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-8 sm:py-6">
                <span className="text-base text-foreground-muted sm:text-lg">
                  {pair.problem}
                </span>
                <span
                  aria-hidden
                  className="hidden font-mono text-accent sm:inline"
                >
                  →
                </span>
                <span className="font-display text-base font-medium text-foreground sm:text-right sm:text-lg">
                  <span className="mr-2 font-mono text-accent sm:hidden">
                    →
                  </span>
                  {pair.solution}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
