import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section className="relative section-pad overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,182,255,0.1),transparent_60%)]"
      />
      <Reveal className="content-shell relative text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          04 — Let&apos;s build
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Have a problem worth solving?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-foreground-muted">
          If the work is repetitive, scattered, or error-prone — there&apos;s
          probably a better system waiting to be built.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center border border-accent/40 bg-accent-soft px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/20"
        >
          Contact me
        </Link>
      </Reveal>
    </section>
  );
}
