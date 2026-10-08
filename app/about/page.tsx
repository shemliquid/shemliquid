import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Behind Shemliquid — Shem Narh, software developer and product builder.",
};

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
            products, the problems they solve, and the impact they create.
          </p>
          <p className="text-sm italic text-foreground-subtle">
            Experience, skills, technologies, and CV details will land here as
            the portfolio fills in.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
