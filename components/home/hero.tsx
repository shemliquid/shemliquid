import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-20 pt-28 md:justify-center md:pb-28 md:pt-32">
      {/* Full-bleed visual: fragmented work dissolving into a clean system */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,rgba(126,182,255,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(126,182,255,0.06),transparent_60%)]" />

        {/* Chaos layer */}
        <div className="chaos-drift absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black_10%,transparent_75%)] md:opacity-50">
          <div className="absolute top-[14%] left-[6%] h-28 w-44 -rotate-6 border border-border bg-background-soft/90 shadow-[0_0_40px_rgba(0,0,0,0.35)]" />
          <div className="absolute top-[22%] left-[28%] h-20 w-36 rotate-3 border border-border-strong bg-background-elevated/80" />
          <div className="absolute top-[12%] right-[18%] h-24 w-40 rotate-[9deg] border border-border bg-background-soft/70" />
          <div className="absolute top-[34%] right-[8%] h-16 w-48 -rotate-[5deg] border border-border bg-background-elevated/90" />
          <div className="absolute top-[30%] left-[12%] h-3 w-24 bg-foreground-subtle/25" />
          <div className="absolute top-[38%] left-[14%] h-2 w-32 bg-foreground-subtle/15" />
          <div className="absolute top-[26%] right-[22%] h-2 w-20 bg-foreground-subtle/20" />
        </div>

        {/* Clarity layer — emerging product surface */}
        <div className="absolute right-[-8%] bottom-[8%] hidden h-[42%] w-[52%] border border-border-strong bg-background-elevated/90 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:block lg:right-[4%] lg:bottom-[12%] lg:h-[46%] lg:w-[44%]">
          <div className="flex h-full flex-col p-5 lg:p-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <span className="h-2 w-2 rounded-full bg-foreground-subtle" />
              <span className="h-2 w-2 rounded-full bg-foreground-subtle" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="ml-3 font-mono text-[0.65rem] tracking-wider text-foreground-subtle uppercase">
                Organized workflow
              </span>
            </div>
            <div className="mt-5 grid flex-1 grid-cols-4 gap-3">
              <div className="col-span-1 space-y-2 border-r border-border pr-3">
                <div className="h-2 w-full bg-border-strong" />
                <div className="h-2 w-[70%] bg-border" />
                <div className="mt-4 h-8 border border-accent/30 bg-accent-soft" />
                <div className="h-8 border border-border bg-background-soft" />
                <div className="h-8 border border-border bg-background-soft" />
              </div>
              <div className="col-span-3 space-y-3 pl-1">
                <div className="h-2.5 w-[45%] bg-accent/35" />
                <div className="h-2 w-[85%] bg-border-strong" />
                <div className="h-2 w-[70%] bg-border" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-20 border border-border bg-background-soft" />
                  <div className="h-20 border border-border bg-background-soft" />
                  <div className="h-20 border border-accent/25 bg-accent-soft" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-[8%] bottom-[14%] h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent md:bottom-[10%]" />
      </div>

      <div className="content-shell relative z-10 px-[var(--content-x)]">
        <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
          <p className="animate-fade-up font-display text-xs font-semibold tracking-[0.28em] text-accent uppercase sm:text-sm">
            Shemliquid
          </p>

          <h1 className="animate-fade-up-delay-1 mt-5 font-display text-4xl leading-[1.02] font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Software that solves real problems.
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
            Build less complexity. Create more impact.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-6">
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
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-foreground-subtle uppercase">
              Problem → System → Impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
