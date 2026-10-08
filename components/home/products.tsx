import Link from "next/link";
import { products } from "@/lib/products";

export function Products() {
  const featured = products.find((p) => p.featured) ?? products[0];
  const rest = products.filter((p) => p.slug !== featured.slug);

  return (
    <section id="products" className="section-pad scroll-mt-24">
      <div className="content-shell">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          01 — Selected products
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Built around real problems.
        </h2>

        {/* Featured product — full-bleed section, not a card */}
        <article className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Featured
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
                {featured.tagline}
              </p>
              <Link
                href={featured.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Explore solution
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative min-h-[16rem] overflow-hidden border border-border bg-background-elevated sm:min-h-[20rem]">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(126,182,255,0.12),transparent_55%)]"
              />
              <div className="absolute inset-6 border border-border-strong bg-background-soft/80 sm:inset-8">
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground-subtle" />
                    <span className="h-2 w-2 rounded-full bg-foreground-subtle" />
                    <span className="h-2 w-2 rounded-full bg-foreground-subtle" />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2.5 w-[40%] bg-accent/30" />
                    <div className="h-2 w-[80%] bg-border-strong" />
                    <div className="h-2 w-[60%] bg-border-strong" />
                  </div>
                  <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
                    <div className="h-16 border border-border bg-background-elevated" />
                    <div className="h-16 border border-border bg-background-elevated" />
                    <div className="h-16 border border-accent/25 bg-accent-soft" />
                  </div>
                  <p className="mt-4 font-mono text-[0.65rem] tracking-wider text-foreground-subtle uppercase">
                    Product UI placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary products — asymmetric, not card grid */}
        <div className="mt-16 grid gap-12 border-t border-border pt-12 md:mt-20 md:grid-cols-2 md:gap-16 md:pt-16">
          {rest.map((product) => (
            <article key={product.slug} className="flex flex-col">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden border border-border bg-background-elevated">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(126,182,255,0.08),transparent_50%)]"
                />
                <div className="absolute inset-5 border border-border bg-background-soft/70">
                  <div className="flex h-full items-end p-4">
                    <p className="font-mono text-[0.65rem] tracking-wider text-foreground-subtle uppercase">
                      Product UI placeholder
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
                {product.tagline}
              </p>
              <Link
                href={product.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Explore
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
