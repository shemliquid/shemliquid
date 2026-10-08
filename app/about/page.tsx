import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Behind Shemliquid — Shem Narh, software developer and product builder.",
};

const focusAreas = [
  {
    title: "Workflow automation",
    detail: "Turning repetitive manual steps into reliable digital processes.",
  },
  {
    title: "Operational software",
    detail: "Systems people actually use day-to-day — not demos that sit unused.",
  },
  {
    title: "Clarity over complexity",
    detail: "Fewer moving parts. Clearer outcomes. Software that earns its place.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="section-pad pt-28 md:pt-36">
      <div className="content-shell max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          About the builder
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Behind these products
        </h1>
        <p className="mt-2 text-sm tracking-wide text-accent">Shem Narh</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
          <p>
            I&apos;m Shem Narh, a software developer and product builder focused
            on turning real-world problems and inefficient workflows into
            practical software systems.
          </p>
          <p>
            Shemliquid is the identity behind that work — a place for the
            products, the problems they solve, and the impact they create. The
            products come first. My name comes after.
          </p>
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            How I build
          </h2>
          <ul className="mt-8 space-y-0">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="border-b border-border py-5 first:border-t"
              >
                <p className="font-display text-base font-medium text-foreground">
                  {area.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {area.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            The approach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Start with the friction. Understand the manual process. Design the
            simpler path. Then build the software that makes that path
            repeatable.
          </p>
          <p className="mt-4 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            Problem → Friction → Idea → Software → Impact
          </p>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="https://github.com/shemliquid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
