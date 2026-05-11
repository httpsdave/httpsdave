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
            className="relative inline-flex items-center justify-center px-2 py-2 bg-[#222324] rounded-none group cursor-crosshair overflow-hidden"
          >
            {/* Corner Dots */}
            <motion.div variants={{ animate: { opacity: [1, 0.4, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } }} className="absolute top-0 left-0 w-2 h-2 bg-gray-400 rounded-full"></motion.div>
            <motion.div variants={{ animate: { opacity: [1, 0.4, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } }} className="absolute top-0 right-0 w-2 h-2 bg-gray-400 rounded-full"></motion.div>
            <motion.div variants={{ animate: { opacity: [1, 0.4, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } }} className="absolute bottom-0 left-0 w-2 h-2 bg-gray-400 rounded-full"></motion.div>
            <motion.div variants={{ animate: { opacity: [1, 0.4, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } }} className="absolute bottom-0 right-0 w-2 h-2 bg-gray-400 rounded-full"></motion.div>

            {/* Comets Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* 7 Small Blue Comets */}
              {[
                { top: "15%", delay: 0, duration: 2.5, hoverDuration: 0.4 },
                { top: "25%", delay: 0.8, duration: 3.2, hoverDuration: 0.5 },
                { top: "40%", delay: 1.5, duration: 2.8, hoverDuration: 0.45 },
                { top: "50%", delay: 0.4, duration: 3.5, hoverDuration: 0.6 },
                { top: "65%", delay: 2.1, duration: 2.2, hoverDuration: 0.35 },
                { top: "75%", delay: 1.1, duration: 3.0, hoverDuration: 0.5 },
                { top: "85%", delay: 0.3, duration: 2.7, hoverDuration: 0.4 },
              ].map((comet, i) => (
                <motion.div
                  key={i}
                  variants={{
                    rest: { left: "-10%", opacity: 0 },
                    animate: { left: ["-10%", "110%"], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: comet.duration, ease: "linear", delay: comet.delay } },
                    hover: { left: ["-10%", "110%"], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: comet.hoverDuration, ease: "linear" } }
                  }}
                  className="absolute flex items-center justify-end w-6"
                  style={{ top: comet.top }}
                >
                  <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-blue-500"></div>
                  <div className="w-[1.5px] h-[1.5px] bg-blue-300 rounded-full" style={{ boxShadow: '0 0 5px 1px rgba(59,130,246,0.8)' }}></div>
                </motion.div>
              ))}
            </div>

            {/* Hover Snow/Stars Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { top: "10%", left: "20%", mx: 15, my: -10, duration: 1.5, delay: 0.1 },
                { top: "30%", left: "80%", mx: -20, my: 15, duration: 2, delay: 0.3 },
                { top: "60%", left: "40%", mx: 15, my: 20, duration: 1.8, delay: 0.5 },
                { top: "80%", left: "10%", mx: 20, my: -15, duration: 2.2, delay: 0.2 },
                { top: "20%", left: "60%", mx: -15, my: -20, duration: 1.7, delay: 0.4 },
                { top: "70%", left: "90%", mx: -25, my: 10, duration: 2.1, delay: 0.6 },
                { top: "40%", left: "15%", mx: 20, my: -10, duration: 1.6, delay: 0.1 },
                { top: "90%", left: "50%", mx: -15, my: -20, duration: 1.9, delay: 0.7 },
                { top: "50%", left: "75%", mx: 15, my: 15, duration: 2.3, delay: 0.8 },
                { top: "15%", left: "95%", mx: -25, my: 10, duration: 1.4, delay: 0.2 },
                { top: "25%", left: "30%", mx: 10, my: -15, duration: 1.6, delay: 0.3 },
                { top: "85%", left: "25%", mx: -10, my: 15, duration: 1.3, delay: 0.5 },
                { top: "55%", left: "10%", mx: 20, my: 10, duration: 2.0, delay: 0.6 },
                { top: "35%", left: "50%", mx: -20, my: -10, duration: 1.8, delay: 0.2 },
                { top: "75%", left: "65%", mx: 15, my: -20, duration: 2.1, delay: 0.4 },
                { top: "5%", left: "45%", mx: -15, my: 20, duration: 1.7, delay: 0.1 },
                { top: "45%", left: "85%", mx: 25, my: 5, duration: 1.9, delay: 0.3 },
                { top: "65%", left: "35%", mx: -10, my: -15, duration: 1.5, delay: 0.7 },
                { top: "95%", left: "80%", mx: 10, my: 15, duration: 2.2, delay: 0.4 },
                { top: "12%", left: "5%", mx: -15, my: -10, duration: 1.4, delay: 0.8 },
                { top: "18%", left: "42%", mx: 12, my: 18, duration: 1.7, delay: 0.5 },
                { top: "78%", left: "55%", mx: -18, my: -12, duration: 2.3, delay: 0.1 },
                { top: "33%", left: "12%", mx: 22, my: 8, duration: 1.9, delay: 0.8 },
                { top: "88%", left: "88%", mx: -14, my: -22, duration: 1.5, delay: 0.3 },
                { top: "52%", left: "28%", mx: 16, my: -16, duration: 2.1, delay: 0.4 },
                { top: "42%", left: "68%", mx: -22, my: 14, duration: 1.6, delay: 0.7 },
                { top: "8%", left: "72%", mx: 18, my: 18, duration: 2.0, delay: 0.2 },
                { top: "92%", left: "18%", mx: -16, my: -14, duration: 1.8, delay: 0.6 },
                { top: "62%", left: "48%", mx: 24, my: -8, duration: 1.7, delay: 0.9 },
                { top: "22%", left: "82%", mx: -12, my: 22, duration: 2.2, delay: 0.2 },
                { top: "58%", left: "82%", mx: 14, my: -18, duration: 1.9, delay: 0.5 },
                { top: "14%", left: "58%", mx: -18, my: 12, duration: 2.4, delay: 0.4 },
                { top: "84%", left: "38%", mx: 20, my: 16, duration: 1.5, delay: 0.1 },
                { top: "38%", left: "92%", mx: -16, my: -20, duration: 1.8, delay: 0.8 },
                { top: "48%", left: "8%", mx: 12, my: 24, duration: 2.1, delay: 0.3 },
                { top: "28%", left: "38%", mx: -24, my: -12, duration: 1.6, delay: 0.7 },
                { top: "68%", left: "18%", mx: 18, my: -22, duration: 2.0, delay: 0.6 },
                { top: "72%", left: "78%", mx: -14, my: 14, duration: 1.7, delay: 0.9 },
                { top: "2%", left: "65%", mx: 22, my: -14, duration: 2.3, delay: 0.2 },
                { top: "98%", left: "35%", mx: -20, my: 18, duration: 1.4, delay: 0.5 },
                { top: "15%", left: "45%", mx: 15, my: 15, duration: 2.0, delay: 0.1 },
                { top: "55%", left: "85%", mx: -20, my: -10, duration: 1.6, delay: 0.8 },
                { top: "85%", left: "15%", mx: 18, my: -18, duration: 1.9, delay: 0.3 },
                { top: "40%", left: "30%", mx: -15, my: 20, duration: 2.2, delay: 0.6 },
                { top: "20%", left: "75%", mx: 25, my: -15, duration: 1.5, delay: 0.4 },
                { top: "75%", left: "40%", mx: -22, my: 12, duration: 1.8, delay: 0.7 },
                { top: "60%", left: "20%", mx: 16, my: 16, duration: 2.1, delay: 0.2 },
                { top: "30%", left: "60%", mx: -18, my: -18, duration: 1.7, delay: 0.9 },
                { top: "90%", left: "70%", mx: 20, my: -12, duration: 1.4, delay: 0.5 },
                { top: "10%", left: "90%", mx: -12, my: 22, duration: 2.3, delay: 0.8 },
                { top: "80%", left: "5%", mx: 14, my: -14, duration: 1.6, delay: 0.1 },
                { top: "50%", left: "95%", mx: -24, my: 10, duration: 1.9, delay: 0.6 },
                { top: "70%", left: "55%", mx: 18, my: 20, duration: 2.2, delay: 0.3 },
                { top: "25%", left: "15%", mx: -16, my: -16, duration: 1.5, delay: 0.4 },
                { top: "5%", left: "25%", mx: 22, my: -8, duration: 2.0, delay: 0.7 },
                { top: "95%", left: "45%", mx: -14, my: 24, duration: 1.8, delay: 0.2 },
              ].map((star, i) => (
                <motion.div
                  key={`star-${i}`}
                  variants={{
                    rest: { opacity: 0, x: 0, y: 0 },
                    animate: { opacity: 0, x: 0, y: 0 },
                    hover: {
                      opacity: [0, 1, 1, 0],
                      x: [0, star.mx, 0],
                      y: [0, star.my, 0],
                      transition: { repeat: Infinity, duration: star.duration, ease: "easeInOut", delay: star.delay }
                    }
                  }}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full"
                  style={{ top: star.top, left: star.left, boxShadow: '0 0 3px rgba(255,255,255,0.8)' }}
                />
              ))}
            </div>

            <motion.span
              variants={{
                rest: { scale: 1, x: 0 },
                animate: { scale: 1, x: 0 },
                hover: { 
                  scale: 0.9, 
                  x: [0, -2, 2, -2, 2, 0], 
                  transition: { 
                    scale: { duration: 0.2 },
                    x: { repeat: Infinity, duration: 0.15 } 
                  } 
                }
              }}
              className="relative z-10 text-white font-medium tracking-normal"
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
