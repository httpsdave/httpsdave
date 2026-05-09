"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/professional", label: "Professional" },
  { href: "/personal", label: "Personal" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full z-50 pt-8 pb-4">
      <div className="mx-auto flex w-full max-w-none items-center justify-between px-6 md:px-20 lg:px-32 xl:px-48">
        <Link href="/" className="flex items-center gap-1 text-5xl font-bold font-sans tracking-tight">
          Goze <span className="text-[color:var(--accent)]">.</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-8 text-lg font-medium font-mono">
            {navItems.map((item) => {
              const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition hover:text-[color:var(--fg)] ${
                    isActive
                      ? "text-[color:var(--accent)]"
                      : "text-[color:var(--fg)]/80"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[color:var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <button className="flex items-center gap-2 bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#06110d] transition hover:bg-[color:var(--accent-2)] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            English
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="inline-flex border border-[color:var(--stroke)] px-4 py-2 text-xs font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
