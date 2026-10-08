import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="content-shell flex h-16 items-center justify-between px-[var(--content-x)] md:h-[4.5rem]">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-accent"
        >
          Shemliquid
        </Link>

        <nav className="flex items-center gap-6 md:gap-8" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
