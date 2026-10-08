import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

function ProductFrame({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="relative min-h-[14rem] overflow-hidden border border-border bg-background-elevated sm:min-h-[18rem]">
      <div
        aria-hidden
        className={`absolute inset-0 ${
          accent
            ? "bg-[radial-gradient(ellipse_at_30%_20%,rgba(126,182,255,0.14),transparent_55%)]"
            : "bg-[linear-gradient(145deg,rgba(126,182,255,0.08),transparent_50%)]"
        }`}
      />
      <div className="absolute inset-5 border border-border-strong bg-background-soft/85 sm:inset-6">
        <div className="flex h-full flex-col p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-subtle" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-subtle" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          </div>
          <div className="mt-5 space-y-2.5">
            <div className="h-2.5 w-[38%] bg-accent/30" />
            <div className="h-2 w-[78%] bg-border-strong" />
            <div className="h-2 w-[58%] bg-border" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
            <div className="h-12 border border-border bg-background-elevated sm:h-14" />
            <div className="h-12 border border-border bg-background-elevated sm:h-14" />
            <div className="h-12 border border-accent/25 bg-accent-soft sm:h-14" />
          </div>
          <p className="mt-3 font-mono text-[0.6rem] tracking-wider text-foreground-subtle uppercase">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const featured = products.find((p) => p.featured) ?? products[0];
  const rest = products.filter((p) => p.slug !== featured.slug);

  return (
    <section id="products" className="section-pad scroll-mt-24">
      <div className="content-shell">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
            01 — Selected products
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built around real problems.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16">
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
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-subtle">
                  {featured.problem}
                </p>
                <Link
                  href={featured.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Explore solution
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <ProductFrame label="Interface preview" accent />
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 md:mt-20 md:grid-cols-2 md:gap-16 md:pt-16">
          {rest.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <article className="flex flex-col">
                <div className="mb-6">
                  <ProductFrame label="Interface preview" />
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
