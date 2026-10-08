import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a problem worth solving? Get in touch with Shemliquid.",
};

export default function ContactPage() {
  return (
    <div className="section-pad pt-28 md:pt-36">
      <div className="content-shell max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Have a problem worth solving?
        </h1>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
          Tell me about the friction — the repetitive work, the scattered
          records, the process that should be simpler. If it&apos;s a real
          workflow problem, it&apos;s worth exploring.
        </p>

        <div className="mt-12 space-y-0 border-t border-border">
          <div className="border-b border-border py-8">
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              Gmail
            </p>
            <a
              href="mailto:shemliquid@gmail.com"
              className="mt-3 inline-block text-lg text-accent transition-opacity hover:opacity-80"
            >
              shemliquid@gmail.com
            </a>
            <p className="mt-2 text-sm text-foreground-muted">
              Best for describing a workflow problem or starting a conversation.
            </p>
          </div>

          <div className="border-b border-border py-8">
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              WhatsApp
            </p>
            <a
              href="https://wa.me/233594617422"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-accent transition-opacity hover:opacity-80"
            >
              +233 59 461 7422
            </a>
            <p className="mt-2 text-sm text-foreground-muted">
              Quick questions and direct conversations.
            </p>
          </div>

          <div className="border-b border-border py-8">
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              GitHub
            </p>
            <a
              href="https://github.com/shemliquid"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-accent transition-opacity hover:opacity-80"
            >
              github.com/shemliquid
            </a>
            <p className="mt-2 text-sm text-foreground-muted">
              Code, experiments, and the engineering behind the products.
            </p>
          </div>

          <div className="py-8">
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              Start with the products
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              Not sure how to describe the problem yet? Look through the work
              first — then reach out with what feels similar.
            </p>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Browse products
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
