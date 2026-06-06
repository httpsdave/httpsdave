"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSound } from "@/components/SoundContext";
import { useTheme } from "@/components/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

import { LuMoon, LuVolume2, LuVolumeX } from "react-icons/lu";

const navItems = [
  { href: "/professional", label: "Professional" },
  { href: "/personal", label: "Personal" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { isMuted, toggleMuted, playSound } = useSound();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showThemeToggle =
    pathname === "/professional" ||
    pathname.startsWith("/professional/") ||
    pathname === "/personal" ||
    pathname.startsWith("/personal/") ||
    pathname === "/contact" ||
    pathname.startsWith("/contact/") ||
    pathname === "/projects" ||
    pathname.startsWith("/projects/");

  const handleSoundToggle = () => {
    if (isMuted) {
      toggleMuted();
      playSound("ui", { force: true });
      return;
    }

    playSound("ui");
    toggleMuted();
  };

  const handleThemeToggle = () => {
    playSound("ui");
    toggleTheme();
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 pb-4">
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
                  onClick={() => playSound("ui")}
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
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button
                className="flex items-center gap-2 bg-[color:var(--accent)] px-5 py-2.5 text-[15px] font-bold text-[#06110d] transition hover:bg-[color:var(--accent-2)] rounded-full"
                onClick={() => playSound("ui")}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                  width="14"
                  height="14"
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
              <div className="absolute right-0 top-full pt-2 w-40 opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto">
                <div className="border border-[color:var(--stroke)] bg-[color:var(--card)] text-[color:var(--fg)] flex flex-col shadow-lg">
                  <button
                    className="w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-[color:var(--accent)] hover:text-white dark:hover:text-[#06110d]"
                    onClick={() => playSound("ui")}
                    type="button"
                  >
                    English
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-[color:var(--accent)] hover:text-white dark:hover:text-[#06110d]"
                    onClick={() => playSound("ui")}
                    type="button"
                  >
                    Filipino
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-[color:var(--accent)] hover:text-white dark:hover:text-[#06110d]"
                    onClick={() => playSound("ui")}
                    type="button"
                  >
                    Japanese
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSoundToggle}
              aria-pressed={!isMuted}
              aria-label={isMuted ? "Enable sound" : "Mute sound"}
              title={isMuted ? "Enable sound" : "Mute sound"}
              className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors duration-300 ml-2"
            >
              {isMuted ? (
                <LuVolumeX size={24} />
              ) : (
                <LuVolume2 size={24} />
              )}
            </button>
            {showThemeToggle && (
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-pressed={theme === "light"}
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                className={`transition-colors duration-300 ${
                  theme === "light"
                    ? "text-[color:var(--accent)] drop-shadow-[0_0_10px_var(--glow)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--accent)]"
                }`}
              >
                <LuMoon size={23} fill={theme === "light" ? "currentColor" : "none"} />
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(true);
              playSound("ui");
            }}
            className="text-[color:var(--accent)] p-2 focus:outline-none hover:scale-105 transition-transform"
            aria-label="Open menu"
          >
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="2" y1="2" x2="26" y2="2" />
              <line x1="8" y1="10" x2="26" y2="10" />
              <line x1="2" y1="18" x2="26" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMenuOpen(false);
                playSound("ui");
              }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#0b0e14] z-[70] flex flex-col pt-8 pb-10 px-6 md:hidden shadow-2xl border-l border-white/5"
            >
              <div className="flex justify-end mb-16">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    playSound("ui");
                  }}
                  className="text-[color:var(--accent)] p-2 hover:scale-110 transition-transform focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col items-center flex-1">
                <div className="flex items-center gap-1 text-2xl font-bold font-sans tracking-tight text-white mb-8">
                  Dave Dominic <span className="text-[color:var(--accent)] font-bold text-3xl leading-none -mt-1">.</span>
                </div>

                {/* Language Button */}
                <button
                  className="flex items-center gap-2 bg-[color:var(--accent)] px-5 py-2.5 mb-14 text-sm font-bold font-mono text-[#06110d] transition hover:bg-[color:var(--accent-2)] rounded-[20px]"
                  onClick={() => playSound("ui")}
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  English
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <nav className="flex flex-col items-center gap-8 w-full font-mono mb-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          playSound("ui");
                        }}
                        className={`text-lg transition-colors py-1 ${
                          isActive
                            ? "text-[color:var(--accent)] border-b-2 border-[color:var(--accent)]"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-auto flex flex-col items-center gap-4">
                  <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Settings</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleSoundToggle}
                      aria-pressed={!isMuted}
                      aria-label={isMuted ? "Enable sound" : "Mute sound"}
                      className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors duration-300 bg-white/5 p-4 rounded-full border border-white/10 shadow-lg"
                    >
                      {isMuted ? (
                        <LuVolumeX size={24} />
                      ) : (
                        <LuVolume2 size={24} />
                      )}
                    </button>
                    {showThemeToggle && (
                      <button
                        type="button"
                        onClick={handleThemeToggle}
                        aria-pressed={theme === "light"}
                        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                        className={`transition-colors duration-300 bg-white/5 p-4 rounded-full border border-white/10 shadow-lg ${
                          theme === "light"
                            ? "text-[color:var(--accent)] drop-shadow-[0_0_10px_var(--glow)]"
                            : "text-[color:var(--muted)] hover:text-[color:var(--accent)]"
                        }`}
                      >
                        <LuMoon size={24} fill={theme === "light" ? "currentColor" : "none"} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
