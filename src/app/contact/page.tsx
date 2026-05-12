"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const contactOptions = [
  {
    title: "Based in",
    detail: "San Pablo City, Laguna, Philippines 4000",
    action: "https://github.com/httpsdave",
    label: "GitHub Profile",
  },
  {
    title: "Call or Text",
    detail: "Let's discuss projects directly. Give me a ring anytime.",
    action: "tel:+6309912708956",
    label: "+63 0991 270 8956",
  },
  {
    title: "Connect",
    detail: "Always happy to meet new builders and designers.",
    action: "https://www.linkedin.com/in/davegoze/",
    label: "Follow on LinkedIn",
  },
];

function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative group rounded-3xl overflow-hidden bg-[#0b0e17] border border-white/5 shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rainbow border mask */}
      <div
        className="absolute inset-[-1px] z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: "linear-gradient(120deg, #10b981, #eab308, #ec4899, #8b5cf6, #3b82f6)",
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
        }}
      />
      {/* Inner dark background so only the border is colored */}
      <div className="absolute inset-[1px] bg-[#0b0e17]/95 backdrop-blur-3xl rounded-[calc(1.5rem-1px)] z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  useEffect(() => {
    document.title = "Dave Goze | Contact";
  }, []);
  const [pageMousePos, setPageMousePos] = useState({ x: 0, y: 0 });

  const handlePageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPageMousePos({
      x: e.pageX,
      y: e.pageY,
    });
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center bg-[#0a0b14] overflow-hidden" onMouseMove={handlePageMouseMove}>
      
      {/* Base Grid Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,transparent_100%)]" />

      {/* Mouse Reveal Grid Layer - makes grid more visible near cursor */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-grid"
        style={{
          maskImage: `radial-gradient(400px circle at ${pageMousePos.x}px ${pageMousePos.y}px, rgba(255,255,255,0.7), transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${pageMousePos.x}px ${pageMousePos.y}px, rgba(255,255,255,0.7), transparent)`,
        }}
      />

      {/* Scattered Subtle White Grid Cells (Half-cell height: 80px) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Top section */}
        <div className="absolute top-[80px] left-[320px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute top-[80px] left-[1440px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />
        <div className="absolute top-[240px] left-[0px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.03] to-transparent" />
        <div className="absolute top-[240px] left-[800px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.06] to-transparent" />
        
        {/* Middle section */}
        <div className="absolute top-[400px] left-[160px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute top-[560px] left-[1120px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />
        <div className="absolute top-[560px] left-[1760px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.03] to-transparent" />
        <div className="absolute top-[720px] left-[480px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute top-[880px] left-[960px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.06] to-transparent" />
        <div className="absolute top-[880px] left-[2080px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />

        {/* Bottom section */}
        <div className="absolute top-[1040px] left-[0px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute top-[1200px] left-[1280px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.03] to-transparent" />
        <div className="absolute top-[1360px] left-[640px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />
        <div className="absolute top-[1520px] left-[1600px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="flex flex-col space-y-4">
            <span className="font-mono text-sm tracking-widest text-[#e7eaf6] uppercase">Contact</span>
            
            <h1 className="text-5xl md:text-6xl xl:text-[70px] font-medium font-mono tracking-tight text-white mb-2 leading-tight flex flex-wrap items-baseline gap-x-4">
              <span>Let us build something</span>
              <div className="group relative w-fit cursor-default px-2 -mx-2 overflow-hidden inline-flex">
                <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
                <span className="relative z-10 text-[color:var(--accent)] group-hover:text-[#0a0b14] transition-colors duration-500 drop-shadow-md">bold.</span>
              </div>
            </h1>

            <p className="text-lg text-gray-400 font-sans max-w-md">
              Tell me about your product, timeline, and the outcomes you care about.
            </p>
          </div>
          <HoverCard className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[color:var(--muted)]">
              Availability
            </p>
            <p className="mt-4 text-xl md:text-2xl font-mono text-white tracking-tight">Open for select projects and roles.</p>
            <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
              You can also reach me directly at <span className="text-[color:var(--accent)]">davedominic912@gmail.com</span>
            </p>
          </HoverCard>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <HoverCard key={option.title} className="p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h2 className="text-2xl font-mono font-bold text-white">{option.title}</h2>
              <p className="mt-3 text-sm text-gray-400 font-sans leading-relaxed flex-1">
                {option.detail}
              </p>
              
              <Link href={option.action} target={option.action.startsWith('http') ? "_blank" : undefined}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center gap-3 px-6 py-2.5 rounded-[40px] border border-white/10 bg-[#0a0b14]/50 transition-colors group/btn cursor-pointer overflow-hidden mt-8 w-fit"
                >
                  <span className="relative flex items-center gap-2 z-20">
                    <span className="relative flex-none z-10">
                      <span className="block w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-700 ease-out group-hover/btn:scale-[120] origin-center" />
                    </span>

                    <span className="font-mono text-white/90 group-hover/btn:text-[#0a0b14] text-sm font-bold tracking-wide z-30 relative transition-colors duration-300">
                      {option.label}
                    </span>
                  </span>
                </motion.div>
              </Link>
            </HoverCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32">
        <HoverCard className="grid gap-10 p-10 md:p-14 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <span className="font-mono text-sm tracking-widest text-[color:var(--muted)] mb-3 uppercase block">Message</span>
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 tracking-tight">Send a quick note</h2>
            <p className="text-base text-gray-400 font-sans leading-relaxed">
              This form is a simple placeholder. Email is the fastest way to reach me.
            </p>
          </div>
          <form className="flex flex-col gap-6" aria-label="Contact form" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono font-semibold text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="bg-[#111427]/50 border border-white/10 text-white rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-[color:var(--accent)] transition-colors"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono font-semibold text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="bg-[#111427]/50 border border-white/10 text-white rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-[color:var(--accent)] transition-colors"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono font-semibold text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="bg-[#111427]/50 border border-white/10 text-white rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-[color:var(--accent)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Link href="mailto:davedominic912@gmail.com" className="w-fit">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-[40px] border border-white/10 bg-[#0a0b14]/50 transition-colors group/btn cursor-pointer overflow-hidden mt-2"
              >
                <span className="relative flex items-center gap-3 z-20">
                  <span className="relative flex-none z-10">
                    <span className="block w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-700 ease-out group-hover/btn:scale-[120] origin-center" />
                  </span>

                  <span className="font-mono text-white/90 group-hover/btn:text-[#0a0b14] text-sm font-bold tracking-wide z-30 relative transition-colors duration-300">
                    Email davedominic912@gmail.com <span className="inline-block opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-1 transition-all duration-300">→</span>
                  </span>
                </span>
              </motion.div>
            </Link>
          </form>
        </HoverCard>

        {/* Back to Top Button */}
        <div className="flex flex-col items-center gap-12 mt-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-[color:var(--accent)] hover:-translate-y-2 transition-transform duration-300 p-4 cursor-grab active:cursor-grabbing"
            aria-label="Scroll to top"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 15l8-8 8 8" />
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 21l8-8 8 8" className="opacity-40" />
            </svg>
          </button>
          <p className="text-sm font-sans text-gray-400 tracking-wide">
            © {new Date().getFullYear()}-present Dave Dominic Goze. All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}
