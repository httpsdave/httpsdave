"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaLocationArrow } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiVuedotjs, SiLaravel } from "react-icons/si";

const projectsData = [
  {
    title: "Mining Auction System",
    description: "Real-time auction system handling $140M+ deals (Spearheaded, Developed)",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=comexchange.mn",
    icons: [<SiNextdotjs key="1" />, <SiTypescript key="2" />, <SiReact key="3" />, <SiTailwindcss key="4" />],
    isGithub: false,
  },
  {
    title: "Multi-Agent Microservice",
    description: "AI agents collaborating through microservices (BSc Thesis)",
    linkText: "Github",
    linkUrl: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Thesis+Project",
    tooltip: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    icons: [<SiNextdotjs key="1" />, <SiTailwindcss key="2" />, <SiTypescript key="3" />],
    isGithub: true,
  },
  {
    title: "Crypto Trading Platform",
    description: "Mobile-first cryptocurrency exchange with live charts and order books.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Crypto+App",
    icons: [<SiVuedotjs key="1" />, <SiTailwindcss key="2" />, <SiLaravel key="3" />],
    isGithub: false,
  },
  {
    title: "GOBI Deluxe Hotel & Resort",
    description: "Full-stack booking and reservation system for luxury hotel.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=GOBI+Deluxe+Hotel",
    icons: [<SiNextdotjs key="1" />, <SiReact key="2" />, <SiTailwindcss key="3" />],
    isGithub: false,
  },
];

export default function ProjectsPage() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b14] relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 bg-[#0a0b14]" />
      <div className="absolute top-0 w-full h-[600px] z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(39,243,179,0.08)] via-[#0a0b14] to-[#0a0b14] opacity-70 pointer-events-none" />

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
                className="flex flex-col bg-[#0b0e17] rounded-3xl border border-white/5 group shadow-2xl relative w-full origin-bottom cursor-grab active:cursor-grabbing"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:-translate-y-2">
                  <div className="bg-[#0a0b14]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/90 text-xs md:text-sm font-mono flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.2)] whitespace-nowrap">
                    {project.tooltip || project.linkUrl}
                  </div>
                </div>

                <div className="w-full h-[250px] md:h-[280px] p-3 md:p-4 pb-0 relative bg-[#13182b] flex items-end justify-center rounded-t-3xl overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 shadow-[0_0_15px_cyan]" />
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 z-20 w-[60%] h-8 origin-bottom scale-75 group-hover:scale-100">
                    <div className="absolute w-[30%] h-[80%] rounded-[100%] border-[2px] border-cyan-400 shadow-[0_0_15px_cyan]" />
                    <div className="absolute w-[50%] h-[120%] rounded-[100%] border-[1px] border-cyan-400/50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute w-[70%] h-[160%] rounded-[100%] border-[1px] border-cyan-500/30" />
                    <div className="absolute w-[90%] h-[200%] rounded-[100%] border-[1px] border-cyan-500/10" />
                  </div>

                  <div className="w-full h-full rounded-t-[14px] overflow-hidden shadow-2xl relative z-30 flex">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full object-top" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0b0e17] to-transparent z-40" />
                </div>

                <div className="p-8 flex flex-col flex-1 relative z-50">
                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center -space-x-2">
                      {project.icons.map((icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-[#171e36] border-[3px] border-[#0b0e17] flex items-center justify-center text-[color:var(--accent)] text-lg z-10 relative shadow-md">
                          {icon}
                        </div>
                      ))}
                    </div>

                    <Link href={project.linkUrl} className="flex items-center gap-3 text-[color:var(--accent)] font-bold font-mono text-sm md:text-base hover:text-white transition-colors">
                      {project.linkText}
                      {project.isGithub ? <FaGithub className="text-lg" /> : <FaLocationArrow className="text-lg rotate-45" />}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-24">
          <Link href="mailto:davedominc912@gmail.com" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className="relative z-10 text-xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Email</span>
          </Link>
          <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className="relative z-10 text-xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className="relative z-10 text-xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">LinkedIn</span>
          </Link>
          <Link href="/DaveDominicGoze-Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100" />
            <span className="relative z-10 text-xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Resume</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-12">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[color:var(--accent)] hover:-translate-y-2 transition-transform duration-300 p-4" aria-label="Scroll to top">
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 15l8-8 8 8" />
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 21l8-8 8 8" className="opacity-40" />
            </svg>
          </button>

          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/davedominic25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/httpdaev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.youtube.com/@x4phann" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors">
              <FaYoutube size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors">
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
            <Link href="/professional" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all">
              Professional
            </Link>
            <Link href="/personal" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all">
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
