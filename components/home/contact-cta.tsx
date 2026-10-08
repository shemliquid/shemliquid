import Link from "next/link";

export function ContactCta() {
  return (
    <section className="section-pad border-t border-border">
      <div className="content-shell text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          04 — Let&apos;s build
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Have a problem worth solving?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-foreground-muted">
          Good software doesn&apos;t just look good. It makes difficult work
          simpler.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center border border-accent/40 bg-accent-soft px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/20"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
