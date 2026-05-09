import Link from "next/link";

const footerLinks = [
  { href: "/professional", label: "Professional" },
  { href: "/personal", label: "Personal" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--stroke)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-[color:var(--muted)]">
            Building reliable, human-first systems.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Available for collaboration
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[color:var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-[color:var(--muted)]">
          {new Date().getFullYear()} Dave Dominic Goze
        </div>
      </div>
    </footer>
  );
}
