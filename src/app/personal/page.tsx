"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const interests = [
  {
    title: "Morning runs",
    detail: "Early runs keep me focused and help me think through systems design.",
  },
  {
    title: "Books and essays",
    detail: "I enjoy narrative nonfiction, tech essays, and good world-building.",
  },
  {
    title: "Music",
    detail: "Guitar and piano help me reset after intense shipping cycles.",
  },
  {
    title: "Language learning",
    detail: "Studying Japanese and German to keep my mind flexible.",
  },
];

const values = [
  {
    title: "Curiosity",
    note: "Always learning new tools and asking better questions.",
  },
  {
    title: "Craft",
    note: "Details matter, from performance to typography and spacing.",
  },
  {
    title: "Integrity",
    note: "Trust is built through clarity, honesty, and consistency.",
  },
];

const moments = [
  {
    title: "Travel notebooks",
    caption: "Collecting ideas from new cities and design culture.",
  },
  {
    title: "Weekend labs",
    caption: "Small experiments with shaders, data, and UI transitions.",
  },
  {
    title: "Community",
    caption: "Mentoring new developers and joining tech meetups.",
  },
];

const adjectives = ["Disciplined", "Persistent", "Curious", "Resilient"];

export default function PersonalPage() {
  const [adjIndex, setAdjIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjIndex((prev) => (prev + 1) % adjectives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0a0b14] min-h-screen">
      {/* CSS Spotlights (White) — top-left and top-right pointing towards center */}
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-[0] bg-[radial-gradient(circle_700px_at_15%_0%,rgba(255,255,255,0.06)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-[0] bg-[radial-gradient(circle_700px_at_85%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1.5s' }} />

      {/* Hero Section */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center text-center min-h-[70vh] px-4 pt-20 pb-16">
        
        <h1 className="text-4xl md:text-6xl font-mono text-gray-500 mb-6 tracking-tight">
          Hello again.
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-4xl md:text-6xl font-mono tracking-tight mb-12">
          <span className="text-gray-300">People call me</span>
          
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="animate"
            className="relative inline-flex items-center justify-center px-6 py-2 border border-white/20 border-dashed rounded-lg bg-[#0a0b14]/50 group cursor-crosshair overflow-hidden"
          >
            {/* Comets Background */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                variants={{
                  rest: { x: "-200%", opacity: 0 },
                  animate: { x: "400%", opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 4, ease: "linear" } },
                  hover: { x: "400%", opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.8, ease: "linear" } }
                }}
                className="absolute top-1/3 left-0 w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
              />
              <motion.div
                variants={{
                  rest: { x: "-200%", opacity: 0 },
                  animate: { x: "400%", opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 5, ease: "linear", delay: 1.5 } },
                  hover: { x: "400%", opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 1, ease: "linear", delay: 0.2 } }
                }}
                className="absolute top-2/3 left-0 w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>

            <motion.span
              variants={{
                rest: { scale: 1, x: 0 },
                animate: { scale: 1, x: 0 },
                hover: { 
                  scale: 0.9, 
                  x: [0, -5, 5, -5, 5, 0], 
                  transition: { 
                    scale: { duration: 0.2 },
                    x: { repeat: Infinity, duration: 0.2 } 
                  } 
                }
              }}
              className="relative z-10 text-white font-bold tracking-normal"
            >
              Dave
            </motion.span>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-3 text-xl md:text-3xl text-gray-500 font-mono">
          <span>Dave is</span>
          <div className="relative w-48 flex items-center justify-start text-left h-[40px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={adjIndex}
                initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 font-bold text-white tracking-wide"
              >
                {adjectives[adjIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="chip">Interests</p>
          <h2 className="section-title font-semibold">What refuels me</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {interests.map((item) => (
            <article key={item.title} className="surface p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="chip">Moments</p>
          <h2 className="section-title font-semibold">Snapshots and rituals</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {moments.map((moment) => (
            <article key={moment.title} className="surface-soft flex min-h-[220px] flex-col justify-end p-6">
              <h3 className="text-lg font-semibold">{moment.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {moment.caption}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="surface grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="chip">Values</p>
            <h2 className="section-title font-semibold">How I try to show up</h2>
          </div>
          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="surface-soft p-4">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {value.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
