import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Builder() {
  return (
    <section className="section-pad border-t border-border">
      <div className="content-shell max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
            03 — The builder
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built by Shem Narh
          </h2>
          <p className="mt-2 text-sm tracking-wide text-accent">
            Behind Shemliquid
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            Software developer and product builder focused on turning real-world
            problems and inefficient workflows into practical software systems.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-subtle">
            Good software doesn&apos;t just look good. It makes difficult work
            simpler.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              About me
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
        </Reveal>
      </div>
    </section>
  );
}
