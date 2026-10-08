import type { Metadata } from "next";

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
          Tell me about the friction. If it&apos;s a real workflow problem,
          it&apos;s worth exploring.
        </p>

        <div className="mt-12 space-y-6 border-t border-border pt-10">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              Email
            </p>
            <p className="mt-2 text-foreground-muted italic">
              Contact details placeholder — add your preferred email when ready.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              GitHub
            </p>
            <a
              href="https://github.com/shemliquid"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-accent transition-opacity hover:opacity-80"
            >
              github.com/shemliquid
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
