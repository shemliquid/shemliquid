import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="content-shell flex flex-col gap-6 px-[var(--content-x)] py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-foreground uppercase">
            Shemliquid
          </p>
          <p className="mt-2 text-sm text-foreground-muted">
            Build less complexity. Create more impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-foreground-muted">
          <Link href="/products" className="hover:text-foreground">
            Products
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <a
            href="https://github.com/shemliquid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:shemliquid@gmail.com"
            className="hover:text-foreground"
          >
            Gmail
          </a>
          <a
            href="https://wa.me/233594617422"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
