import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
      {/* Dominant visual plane — chaos dissolving into clarity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 chaos-glow"
      >
        <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(126,182,255,0.14),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black_20%,transparent_85%)]">
          <div className="absolute top-[18%] left-[8%] h-24 w-40 rotate-[-6deg] rounded-sm border border-border bg-background-soft/80 blur-[0.5px]" />
          <div className="absolute top-[28%] right-[12%] h-20 w-36 rotate-[8deg] rounded-sm border border-border bg-background-elevated/90" />
          <div className="absolute top-[42%] left-[22%] h-16 w-28 rotate-[3deg] rounded-sm border border-border-strong bg-background-soft/70" />
          <div className="absolute top-[36%] right-[28%] h-14 w-44 -rotate-[4deg] rounded-sm border border-accent/20 bg-accent-soft" />
        </div>
        <div className="absolute inset-x-[10%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:bottom-[22%]" />
      </div>

      <div className="content-shell relative z-10 px-[var(--content-x)]">
        <p className="animate-fade-up font-display text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          Shemliquid
        </p>

        <h1 className="animate-fade-up-delay-1 mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-7xl">
          Software that solves real problems.
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          Products built to simplify work, reduce repetitive processes, and make
          businesses more efficient.
        </p>

        <div className="animate-fade-up-delay-3 mt-10">
          <Link
            href="#products"
            className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground"
          >
            <span className="border-b border-accent/50 pb-0.5 transition-colors group-hover:border-accent">
              Explore products
            </span>
            <span
              aria-hidden
              className="text-accent transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
