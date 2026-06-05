"use client";

import { cloneElement, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaLocationArrow } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiVuedotjs, SiLaravel, SiPhp, SiNodedotjs } from "react-icons/si";
import { useSound } from "@/components/SoundContext";
import { useTheme } from "@/components/ThemeContext";

const projectsData = [
  {
    title: "Dendro",
    description: "Comprehensive botanical encyclopedia.",
    linkText: "Check Live Site",
    linkUrl: "https://dendro-ten.vercel.app/",
    image: "/dendro.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTailwindcss key="3" color="#06B6D4" />, <SiTypescript key="4" color="#3178C6" />],
    isGithub: false,
  },
  {
    title: "WeatherBoy",
    description: "A modern, mobile-first weather application.",
    linkText: "Check Live Site",
    linkUrl: "https://weather-boy.vercel.app/",
    image: "/weatherboy.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTailwindcss key="3" color="#06B6D4" />, <SiTypescript key="4" color="#3178C6" />],
    isGithub: false,
  },
  {
    title: "Sentinel",
    description: "Real-time news aggregation with radar visualization, algorithmic ranking, and a terminal-inspired interface.",
    linkText: "Check Live Site",
    linkUrl: "https://sentinel-eight-lime.vercel.app/",
    image: "/sentinel.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTailwindcss key="3" color="#06B6D4" />],
    isGithub: false,
  },
  {
    title: "Bubududu",
    description: "A modern, mobile-first sticker gallery website of cute bubududu stickers.",
    linkText: "Check Live Site",
    linkUrl: "https://bubududu-nine.vercel.app/",
    image: "/bubududu.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTailwindcss key="3" color="#06B6D4" />],
    isGithub: false,
  },
  {
    title: "Whispering Stones",
    description: "A beautiful 8-bit pixel art digital memorial graveyard where you can honor and remember the departed.",
    linkText: "Check Live Site",
    linkUrl: "https://whispering-stones.vercel.app/",
    image: "/whisperingstones.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTailwindcss key="3" color="#06B6D4" />],
    isGithub: false,
  },
];

function renderProjectIcon(icon: React.ReactElement, index: number, isLightMode: boolean) {
  if (!isLightMode || index !== 0) {
    return icon;
  }

  return cloneElement(icon, { color: "#111827" });
}

export default function ProjectsPage() {
  const [showNav, setShowNav] = useState(true);
  const { playSound } = useSound();
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`projects-page min-h-screen relative overflow-hidden flex flex-col ${isLightMode ? "bg-[#f4f7fb]" : "bg-[#0a0b14]"}`}>
      <div className={`absolute inset-0 z-0 ${isLightMode ? "bg-transparent" : "bg-[#0a0b14]"}`} />
      <div className={`absolute top-0 w-full h-[600px] z-0 pointer-events-none ${
        isLightMode
          ? "bg-[radial-gradient(ellipse_at_center,rgba(8,124,97,0.12),transparent_70%)] opacity-90"
          : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(39,243,179,0.08)] via-[#0a0b14] to-[#0a0b14] opacity-70"
      }`} />

      {/* Top Animated Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[900px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]" />
        
        {/* Subtle white gradients on some grid cells */}
        <div className="absolute top-0 left-0 w-[160px] h-[80px] bg-gradient-to-b from-white/[0.05] to-transparent" />
        <div className="absolute top-[160px] left-[320px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-[640px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div className="absolute top-0 left-[960px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.06] to-transparent" />
        <div className="absolute top-[160px] left-[1280px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-[1600px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div className="absolute top-[160px] left-[1920px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.05] to-transparent" />
        <div className="absolute top-0 left-[2240px] w-[160px] h-[80px] bg-gradient-to-b from-white/[0.04] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-6 pt-32 pb-40">
        <div className="mt-20 mb-32 flex flex-col w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-mono text-white mb-6 tracking-tight font-bold">
              Other <span className="text-[color:var(--accent)]">Projects</span>
            </h1>
            <p className="font-mono text-lg tracking-wide text-gray-400 max-w-2xl mx-auto">
              A collection of additional work, experiments, and open-source contributions. Placeholder content for now.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-32 max-w-[1100px] mx-auto">
          {projectsData.map((project, idx) => (
            <div key={idx} style={{ perspective: "1200px" }} className="flex">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: 15, y: -10, scale: 0.96, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col rounded-3xl border group shadow-2xl relative w-full origin-bottom cursor-grab active:cursor-grabbing ${
                  isLightMode ? "bg-white/88 border-slate-900/10" : "bg-[#0b0e17] border-white/5"
                }`}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:-translate-y-2">
                  <div className={`backdrop-blur-md border px-4 py-2 rounded-full text-xs md:text-sm font-mono flex items-center justify-center whitespace-nowrap ${
                    isLightMode ? "bg-white/90 border-slate-900/10 text-[color:var(--fg)] shadow-[0_12px_24px_rgba(15,23,42,0.1)]" : "bg-[#0a0b14]/90 border-white/10 text-white/90 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                  }`}>
                    {project.tooltip || project.linkUrl}
                  </div>
                </div>

                <div className={`w-full h-[250px] md:h-[280px] p-3 md:p-4 pb-0 relative flex items-end justify-center rounded-t-3xl ${
                  isLightMode ? "bg-slate-100" : "bg-[#13182b]"
                }`}>
                  <div className="w-full h-full rounded-t-[14px] overflow-hidden shadow-2xl relative z-30 flex">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full object-top" />
                  </div>
                  <div className={`absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t ${
                    isLightMode ? "from-white" : "from-[#0b0e17]"
                  } to-transparent z-40 rounded-t-[14px]`} />
                </div>

                <div className="absolute top-[20px] bottom-[auto] h-[260px] md:h-[290px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50 shadow-[0_0_15px_cyan] pointer-events-none" />
                <div className="absolute top-[270px] md:top-[300px] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-50 w-[60%] h-8 origin-center scale-75 group-hover:scale-100 pointer-events-none">
                  <div className="absolute w-[30%] h-[80%] rounded-[100%] border-[2px] border-cyan-400 shadow-[0_0_15px_cyan]" />
                  <div className="absolute w-[50%] h-[120%] rounded-[100%] border-[1px] border-cyan-400/50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="absolute w-[70%] h-[160%] rounded-[100%] border-[1px] border-cyan-500/30" />
                  <div className="absolute w-[90%] h-[200%] rounded-[100%] border-[1px] border-cyan-500/10" />
                </div>

                <div className="p-8 flex flex-col flex-1 relative z-50">
                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center -space-x-2">
                      {project.icons.map((icon, i) => (
                        <div key={i} className={`w-10 h-10 rounded-full border-[3px] flex items-center justify-center text-lg z-10 relative shadow-md ${
                          isLightMode ? "bg-white border-slate-950" : "bg-[#171e36] border-[#0b0e17]"
                        }`}>
                          {renderProjectIcon(icon, i, isLightMode)}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-200 font-bold font-mono text-sm md:text-base hover:!text-[var(--accent)] transition-colors duration-300"
                      onClick={() => playSound("ui")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      {project.linkText}
                      {project.isGithub ? <FaGithub className="text-lg transition-colors duration-300" /> : <FaLocationArrow className="text-lg rotate-45 transition-colors duration-300" />}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-24">
          <Link href="mailto:davedominc912@gmail.com" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")}>
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className={`relative z-10 text-xl font-mono font-bold transition-colors duration-500 tracking-wide ${isLightMode ? "text-[color:var(--fg)] group-hover:text-white" : "text-gray-300 group-hover:text-[#0a0b14]"}`}>Email</span>
          </Link>
          <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")}>
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className={`relative z-10 text-xl font-mono font-bold transition-colors duration-500 tracking-wide ${isLightMode ? "text-[color:var(--fg)] group-hover:text-white" : "text-gray-300 group-hover:text-[#0a0b14]"}`}>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")}>
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className={`relative z-10 text-xl font-mono font-bold transition-colors duration-500 tracking-wide ${isLightMode ? "text-[color:var(--fg)] group-hover:text-white" : "text-gray-300 group-hover:text-[#0a0b14]"}`}>LinkedIn</span>
          </Link>
          <Link href="/DaveDominicGoze-Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("ui")}
          >
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className={`relative z-10 text-xl font-mono font-bold transition-colors duration-500 tracking-wide ${isLightMode ? "text-[color:var(--fg)] group-hover:text-white" : "text-gray-300 group-hover:text-[#0a0b14]"}`}>Resume</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-12">
          <button
            onClick={() => {
              playSound("ui");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[color:var(--accent)] hover:-translate-y-2 transition-transform duration-300 p-4"
            aria-label="Scroll to top"
          >
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 15l8-8 8 8" />
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 21l8-8 8 8" className="opacity-40" />
            </svg>
          </button>

          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/davedominic25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" onClick={() => playSound("social")}>
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/httpdaev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" onClick={() => playSound("social")}>
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.youtube.com/@x4phann" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" onClick={() => playSound("social")}>
              <FaYoutube size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" onClick={() => playSound("social")}>
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" onClick={() => playSound("social")}>
              <FaGithub size={20} />
            </Link>
          </div>

          <p className="font-mono text-sm text-[color:var(--muted)] pt-8">© 2026 Dave Dominic Goze. Built with Next.js & Framer Motion.</p>
        </div>
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-[#ffffff15] backdrop-blur-md border border-white/20 rounded-[32px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
          >
            <Link href="/professional" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all" onClick={() => playSound("ui")}>
              Professional
            </Link>
            <Link href="/personal" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all" onClick={() => playSound("ui")}>
              Personal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-[900px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_top,white_10%,transparent_100%)]" />
        
        {/* Subtle white gradients on the bottom half of some grid cells */}
        <div className="absolute bottom-0 left-0 w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />
        <div className="absolute bottom-[160px] left-[320px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-[640px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-[960px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.06] to-transparent" />
        <div className="absolute bottom-[160px] left-[1280px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-[1600px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
        <div className="absolute bottom-[160px] left-[1920px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.05] to-transparent" />
        <div className="absolute bottom-0 left-[2240px] w-[160px] h-[80px] bg-gradient-to-t from-white/[0.04] to-transparent" />
      </div>
    </div>
  );
}
