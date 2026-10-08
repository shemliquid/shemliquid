import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products built by Shemliquid to solve real-world workflow problems.",
};

export default function ProductsPage() {
  return (
    <div className="section-pad pt-28 md:pt-36">
      <div className="content-shell">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground-subtle uppercase">
          Products
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Software built to solve real problems.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">
          Each product starts with friction in the real world — then turns that
          friction into a clearer workflow.
        </p>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={product.href}
                className="group flex flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-end sm:justify-between sm:gap-8"
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {product.tagline}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-foreground-muted group-hover:text-accent">
                  Explore solution →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
