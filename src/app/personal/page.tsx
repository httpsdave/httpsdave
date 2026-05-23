"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import bikeImage from "../../bike1.jpg";
import guitarImage from "../../guitar.png";

import avengersImg from "../../movieposters/Avengers_Infinity_war_poster.webp";
import bcsImg from "../../movieposters/bettercallsaul.jpg";
import bbImg from "../../movieposters/breakingbad.jpg";
import b99Img from "../../movieposters/brooklyn99.webp";
import harrypotterImg from "../../movieposters/harrypotter.jpg";
import himymImg from "../../movieposters/himym.jpg";
import interstellarImg from "../../movieposters/interstellar.jpg";
import johnwickImg from "../../movieposters/johnwick.jpg";
import narutoImg from "../../movieposters/naruto.jpg";
import martianImg from "../../movieposters/the martian.jpeg";
import boysImg from "../../movieposters/theboys.jpg";
import gdImg from "../../movieposters/thegooddoctor.webp";
import hobbitImg from "../../movieposters/thehobbit.jpg";
import notebookImg from "../../movieposters/thenotebook.jpg";
import twilightImg from "../../movieposters/twilight.jpg";

const moviePostersList = [
  avengersImg, bcsImg, bbImg, b99Img, harrypotterImg,
  himymImg, interstellarImg, johnwickImg, narutoImg, martianImg,
  boysImg, gdImg, hobbitImg, notebookImg, twilightImg
];

const lifeFacets = [
  {
    id: "books",
    category: "Books",
    title: "Niche",
    bgGradient: "from-emerald-900/60 to-[#0a0b14]",
    content: "I do not really read fiction novels, but I do enjoy digging into niche topics, specific interests, and whatever subject ends up grabbing my attention for a long stretch.",
  },
  {
    id: "music",
    category: "Music",
    title: "Musical Instruments",
    bgGradient: "from-orange-900/60 to-[#0a0b14]",
    content: "I play guitar and spend time learning riffs from songs I like. My guitar is an Arena 38C with EQ2, an acoustic electric guitar in natural color.",
  },
  {
    id: "tech",
    category: "Computer, IT",
    title: "Interest, Work",
    bgGradient: "from-blue-900/60 to-[#0a0b14]",
    content: "My brother introduced me to computers early on. I became fascinated with formatting, disassembling components, and understanding how the software logic connects with the hardware.",
  },
  {
    id: "fitness",
    category: "Fitness",
    title: "Sports, Exercise",
    bgGradient: "from-zinc-800/80 to-[#0a0b14]",
    content: "To replace gaming with a healthier method, I started exercising in 10th grade. Being the smallest student, I found the motivation to keep at it consistently. Now, years later, it is just an integral part of my daily routine.",
  },
  {
    id: "language",
    category: "Foreign Languages",
    title: "Foreign Languages",
    bgGradient: "from-purple-900/60 to-[#0a0b14]",
    content: "In my childhood, my English developed rapidly via internet immersion. I spent most my days watching anime, movies, and reading tracking tech news. I plan to learn more languages like German and Japanese in the future.",
  }
];

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeFacet, setActiveFacet] = useState<typeof lifeFacets[0] | null>(null);
  const [outroMousePos, setOutroMousePos] = useState({ x: 0, y: 0 });
  const [isOutroHovered, setIsOutroHovered] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    document.title = "Dave Goze | Personal";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom < 100) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOutroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!outroRef.current) return;
    const rect = outroRef.current.getBoundingClientRect();
    setOutroMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      // Translate vertical scrolling to horizontal scrolling based on boundaries
      // Prevent vertical page scroll when hovering over the carousel ALWAYS
      e.preventDefault();
      
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        carousel.scrollBy({ left: e.deltaY, behavior: "auto" });
      } else {
        carousel.scrollBy({ left: e.deltaX, behavior: "auto" });
      }
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjIndex((prev) => (prev + 1) % adjectives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0a0b14] min-h-screen">
      {/* CSS Spotlights (White) — top-left and top-right pointing towards center */}
      <div 
        className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none z-[0] overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
      >
        {/* Left Spotlights Group */}
        <motion.div
          animate={{ rotate: [-35, -30, -35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute top-[-5%] -left-[30vw] md:-left-[25vw] w-[80vw] md:w-[50vw] h-[140vh] origin-top"
        >
          {/* Optimized Single Layer Spotlight */}
          <div className="absolute inset-0 blur-[60px]" style={{ transform: "translateZ(0)" }}>
             <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" style={{ clipPath: 'polygon(50% 0, 85% 100%, 15% 100%)' }} />
          </div>
        </motion.div>

        {/* Right Spotlights Group */}
        <motion.div
          animate={{ rotate: [35, 30, 35] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute top-[-5%] -right-[30vw] md:-right-[25vw] w-[80vw] md:w-[50vw] h-[140vh] origin-top"
        >
          {/* Optimized Single Layer Spotlight */}
          <div className="absolute inset-0 blur-[60px]" style={{ transform: "translateZ(0)" }}>
             <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" style={{ clipPath: 'polygon(50% 0, 85% 100%, 15% 100%)' }} />
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 w-full flex flex-col items-center justify-center text-center min-h-[70vh] px-4 pt-20 pb-16">
        
        <h1 className="text-4xl md:text-6xl font-mono text-gray-500 mb-6 tracking-tight">
          Hello again.
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-4xl md:text-6xl font-mono tracking-tight mb-12">
          <span className="text-gray-300">People call me</span>
          
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="animate"
            className="relative inline-flex items-center justify-center px-2 py-2 bg-[#222324] rounded-none group cursor-grab active:cursor-grabbing overflow-hidden"
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
              <motion.div
                key={adjIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
                  exit: { opacity: 0, filter: "blur(8px)", y: -10, transition: { duration: 0.3 } }
                }}
                className="absolute left-0 font-medium text-white tracking-wide flex whitespace-pre"
              >
                {adjectives[adjIndex].split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-56 md:pt-72 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-mono text-gray-200 font-medium mb-4">Dave's Hobbies</h2>
          <p className="text-gray-500 font-mono text-sm md:text-base">I like to stay active. I pick up new interests but some remain constant.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-0 overflow-hidden border border-zinc-800/80 bg-[#0a0b14]/50 shadow-2xl min-h-[250px] lg:min-h-[300px]">
          
          {/* Box 1 (Top Left): Workout Routine */}
          <article className="border-b md:border-r border-zinc-800/80 bg-transparent p-6 md:p-8 flex flex-col relative overflow-hidden group md:col-span-2 md:row-span-1">
            <h3 className="text-xl font-bold font-mono text-gray-200 mb-3 relative z-10">Exercise & Workout</h3>
            <p className="text-sm text-gray-400 font-mono leading-relaxed relative z-10 max-w-2xl">
              I've been consistent with it for years now, it's become more of a routine than a hobby. A core component of my life, keeping me grounded and energized.
            </p>
            {/* Visual Element */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Decorative abstract sphere grid to represent routine/consistency */}
                <div className="w-64 h-64 rounded-full border border-dashed border-gray-400 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-48 h-48 rounded-full border border-dotted border-gray-500 animate-[spin_40s_linear_infinite_reverse]"></div>
              </div>
            </div>
          </article>

          {/* Box 2 (Top Right): Cinephile with Hover Effects */}
          <article className="border-b border-zinc-800/80 bg-transparent p-6 md:p-8 flex flex-col relative overflow-hidden group md:col-span-3 md:row-span-1">
            <h3 className="text-xl font-bold font-mono text-gray-200 mb-3 z-10 relative">Movies & Shows</h3>
            <p className="text-sm text-gray-400 font-mono leading-relaxed z-10 relative">
              I like watching movies, anime, and TV shows with high ratings, though I enjoy finding them before they become mainstream. I'm a big fan of science movies, time travel, space, biology-focused films, and human horror.
            </p>
            {/* 3 Rows of Image Placeholders overlapping slightly like the reference image */}
            <div className="relative w-full flex-1 flex flex-col justify-center items-center -space-y-4 sm:-space-y-6 md:-space-y-8 mt-12 z-0 pb-4 overflow-visible">
              {[
                [1, 2, 3, 4, 5],     // Row 1
                [6, 7, 8, 9, 10],  // Row 2
                [11, 12, 13, 14, 15]  // Row 3
              ].map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex items-center justify-center -space-x-6 sm:-space-x-10 md:-space-x-16">
                  {row.map((num, idx) => {
                    const rotations = ['-rotate-3', 'rotate-2', '-rotate-6', 'rotate-3', '-rotate-2'];
                    const rot = rotations[(num - 1) % rotations.length];
                    return (
                      <motion.div 
                        key={`placeholder-${num}`}
                        whileHover={{ y: -10, scale: 1.05, zIndex: 50 }}
                        className={`group relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-zinc-800 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-[1.5px] border-zinc-600/60 flex flex-col items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-300 ${rot}`}
                        style={{ zIndex: 10 + rowIndex * 10 + idx }}
                      >
                         <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/50 to-zinc-900/50 z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-300" />
                         <Image src={moviePostersList[num - 1]} alt={`Movie Poster ${num}`} fill className="object-cover z-0" sizes="(max-width: 768px) 150px, 200px" />
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </article>

          {/* Box 3 (Bottom Left): Cycling */}
          <article className="border-b md:border-b-0 md:border-r border-zinc-800/80 bg-transparent p-6 md:p-12 flex flex-col relative overflow-hidden group md:col-span-3 md:row-span-1">
            <Image 
              src={bikeImage} 
              alt="Promax PR50 Roadbike" 
              fill 
              className="object-cover z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-[#0a0b14]/60 opacity-80" />
            
            <div className="relative z-10 flex flex-col h-full justify-end">
              <h3 className="text-2xl md:text-4xl font-bold font-mono text-gray-100 mb-3 drop-shadow-lg">Jogs & Cycling</h3>
              <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed max-w-lg drop-shadow-lg">
                I have a Promax PR50 roadbike that I ride through the city and mostly around the Sampaloc Lake in San Pablo City, Laguna.
              </p>
            </div>
          </article>

          {/* Box 4 (Bottom Right): Music */}
          <article className="bg-transparent p-6 md:p-8 flex flex-col relative overflow-hidden group md:col-span-2 md:row-span-1">
            <h3 className="text-xl font-bold font-mono text-gray-200 mb-3 relative z-10">Music Enthusiast</h3>
            <p className="text-sm text-gray-400 font-mono leading-relaxed relative z-10 mb-6 max-w-sm">
              I'm learning to play the guitar, and I like listening to alternative rock music and a little bit of rap.
            </p>
            <div className="flex-1 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center relative overflow-hidden">
              <div className="w-12 h-12 bg-red-600/90 rounded-xl flex items-center justify-center z-10 cursor-pointer hover:bg-red-500 transition-colors">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
              <span className="absolute bottom-4 left-4 text-xs font-mono text-zinc-500">[Guitar Video Snippet]</span>
            </div>
          </article>

        </div>
      </section>

      {/* Components of My Life Carousel Section */}
      <section className="mx-auto w-full max-w-6xl py-24 relative overflow-hidden">
        <div className="px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-mono text-gray-200 font-medium">Components of <span className="text-emerald-500">my life</span></h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="w-full relative">
          {/* Edge Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#0a0b14] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#0a0b14] to-transparent z-20 pointer-events-none"></div>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-12 relative z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {lifeFacets.map((facet) => (
              <motion.div
                key={facet.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setActiveFacet(facet)}
                className={`min-w-[280px] md:min-w-[340px] snap-center h-[520px] md:h-[560px] rounded-2xl cursor-grab active:cursor-grabbing relative overflow-hidden bg-gradient-to-b ${facet.bgGradient} border border-zinc-800/50 shadow-2xl flex flex-col p-6 group`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                <div className="relative z-10">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{facet.category}</span>
                  <h3 className="text-2xl font-bold font-mono text-white mt-2 leading-tight">{facet.title}</h3>
                </div>
                
                {/* Visual placeholder inside card */}
                <div className="mt-auto relative z-10 w-full h-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                   <div className="absolute bottom-0 right-0 text-7xl opacity-20">★</div>
                </div>
                
                {/* Subtle Hover Glare */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/5 to-transparent pointer-events-none transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Popup Modal */}
      <AnimatePresence>
        {activeFacet && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFacet(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-[#111218] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              <button 
                onClick={() => setActiveFacet(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-white text-zinc-400 hover:text-black flex items-center justify-center transition-colors z-20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              <div className={`w-full h-32 md:h-48 bg-gradient-to-b ${activeFacet.bgGradient} p-6 md:p-10 flex flex-col justify-end`}>
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">{activeFacet.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mt-2">{activeFacet.title}</h3>
              </div>

              <div className="p-6 md:p-10 overflow-y-auto font-mono text-zinc-300 leading-relaxed text-sm md:text-base">
                 <p className="whitespace-pre-line">{activeFacet.content}</p>
                 
                 {activeFacet.id === "fitness" && (
                   <div className="mt-8 pt-8 border-t border-zinc-800 grid grid-cols-2 gap-4 text-xs">
                     <div><span className="text-zinc-500">Height:</span> 180cm</div>
                     <div><span className="text-zinc-500">Weight:</span> 70kg</div>
                     <div><span className="text-zinc-500">Squat:</span> 100kg x 10</div>
                     <div><span className="text-zinc-500">Pull-ups:</span> 17</div>
                   </div>
                 )}
                 {activeFacet.id === "language" && (
                   <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col gap-2 text-xs">
                     <div><span className="text-zinc-500 w-24 inline-block">English</span> Fluent</div>
                     <div><span className="text-zinc-500 w-24 inline-block">Japanese</span> Currently improving</div>
                     <div><span className="text-zinc-500 w-24 inline-block">German</span> Planning to learn</div>
                   </div>
                 )}
                 {activeFacet.id === "music" && (
                   <div className="mt-8 pt-8 border-t border-zinc-800">
                     <div className="relative overflow-hidden rounded-xl border border-zinc-700/70 bg-[#0b0e17] aspect-16/10">
                       <Image
                         src={guitarImage}
                         alt="Arena 38C guitar"
                         fill
                         className="object-cover"
                       />
                     </div>
                   </div>
                 )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Outro Section */}
      <section className="relative w-full pt-12 pb-40 flex flex-col items-center justify-center overflow-hidden bg-[#0a0b14]">
        {/* Animated Grid Background (consistent with professional tab) */}
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

        {/* Main Outro Container with border trail */}
        <div className="relative z-10 w-full max-w-5xl mx-auto group">
          
          {/* Subtle trail glow behind the container */}
          <div className="absolute inset-[-6px] rounded-[calc(1.5rem+6px)] overflow-hidden z-0 blur-[6px] opacity-70 pointer-events-none transition-opacity duration-500 group-hover:opacity-100">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-[conic-gradient(from_0deg,transparent_0_340deg,#10b981_360deg)] animate-[spin_12s_linear_infinite]"></div>
          </div>

          <div className="relative p-[1px] rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-500">
            {/* Green trailing light */}
            {/* Solid base layer behind everything else so trailing light does not bleed into the middle via blur */}
            <div className="absolute inset-[1px] bg-[#0b0e17] rounded-[calc(1.5rem-1px)] z-0"></div>

            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-[conic-gradient(from_0deg,transparent_0_340deg,#10b981_360deg)] animate-[spin_12s_linear_infinite] z-[1]"></div>

            {/* Main Outro Card */}
            <div 
              ref={outroRef}
              onMouseMove={handleOutroMouseMove}
              onMouseEnter={() => setIsOutroHovered(true)}
              onMouseLeave={() => setIsOutroHovered(false)}
              className="relative w-full h-[400px] bg-[#0b0e17] rounded-[calc(1.5rem-1px)] flex flex-col items-center justify-center overflow-hidden z-10 cursor-none"
            >
              {/* Green Comets Top to Bottom with Splash */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {[
                  { left: "15%", delay: 0, duration: 4.5 },
                  { left: "30%", delay: 1.5, duration: 5.5 },
                  { left: "45%", delay: 0.8, duration: 4.8 },
                  { left: "60%", delay: 2.5, duration: 6.2 },
                  { left: "75%", delay: 1.2, duration: 5.0 },
                  { left: "90%", delay: 3.0, duration: 5.8 },
                ].map((comet, i) => (
                  <div key={`comet-wrap-${i}`} className="absolute inset-y-0 w-8 flex flex-col items-center pointer-events-none" style={{ left: comet.left }}>
                    {/* Falling Comet */}
                    <motion.div
                      key={`comet-${i}`}
                      animate={{ top: ["-10%", "100%", "100%", "100%"], opacity: [0, 1, 0, 0] }}
                      transition={{ repeat: Infinity, duration: comet.duration, ease: "linear", delay: comet.delay, times: [0, 0.6, 0.61, 1] }}
                      className="absolute flex flex-col items-center justify-end h-16 w-0.5"
                    >
                      <div className="w-[0.5px] flex-1 bg-gradient-to-b from-transparent to-emerald-500"></div>
                      <div className="w-[1.5px] h-[1.5px] bg-emerald-300 rounded-full" style={{ boxShadow: '0 0 5px 1px rgba(16,185,129,0.8)' }}></div>
                    </motion.div>
                    
                    {/* Multi-Particle Splash */}
                    <motion.div
                       key={`splash-${i}`}
                       className="absolute bottom-0 w-32 h-16 flex items-end justify-center pb-0"
                    >
                       {[...Array(20)].map((_, j) => {
                         const pseudoRandom = (j * 13 % 10) / 10;
                         const spread = (j / 19) * 2 - 1; // -1 to 1
                         const angle = spread * (Math.PI / 2.2); // Spread angle
                         const speed = 20 + (j * 7 % 30); // varied speed
                         const xTarget = Math.sin(angle) * speed;
                         const yTarget = -Math.cos(angle) * speed - 5;
                         
                         // Physics-like trajectory: extends outward, then falls down
                         const xEnd = xTarget * 1.3;
                         const yEnd = yTarget + 25; 
                         
                         return (
                           <motion.div
                             key={j}
                             animate={{
                               x: [0, 0, xTarget, xEnd],
                               y: [0, 0, yTarget, yEnd],
                               scale: [0, 0, pseudoRandom * 0.8 + 0.4, 0],
                               opacity: [0, 0, 1, 0]
                             }}
                             transition={{
                               repeat: Infinity,
                               duration: comet.duration,
                               ease: "easeOut",
                               delay: comet.delay,
                               times: [0, 0.6, 0.8, 1]
                             }}
                             className="absolute bottom-1 w-[2px] h-[2px] rounded-full bg-emerald-400"
                             style={{ willChange: "transform, opacity, scale", boxShadow: '0 0 4px rgba(52,211,153,0.8)' }}
                           />
                         )
                       })}
                    </motion.div>
                  </div>
                ))}
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 z-10 pb-2">
                Thank you.
              </h2>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-mono text-white font-bold mb-4 z-10 text-center px-4">
                for visiting my profile
            </h2>

            {/* Floating 'Multiplayer' Cursor Effect - Tracks mouse */}
            <AnimatePresence>
              {isOutroHovered && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, x: outroMousePos.x, y: outroMousePos.y }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    scale: { duration: 0.1 },
                    x: { type: "tween", ease: "linear", duration: 0 },
                    y: { type: "tween", ease: "linear", duration: 0 }
                  }}
                  style={{ top: "0", left: "0", position: "absolute", zIndex: 50, pointerEvents: "none" }}
                  className="flex flex-col items-start drop-shadow-lg"
                >
                  {/* Cursor Arrow */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-20deg] drop-shadow-md relative left-2">
                    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                  </svg>
                  <div className="flex items-center gap-2 bg-[#3b82f6] text-white px-3 py-1.5 rounded-full text-xs font-bold font-mono ml-4 shadow-lg border border-blue-400/50">
                    <span className="flex items-center justify-center w-4 h-4 bg-white/20 rounded-full text-[10px]">✨</span>
                    Dave Dominic Goze
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

        {/* Back to Top Button */}
        <div className="flex flex-col items-center gap-12 mb-20">
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
        </div>

        {/* Bottom Footer Details */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-6 pb-4 border-b border-transparent">
          <span className="font-mono font-bold text-white text-lg tracking-wide">Dave Dominic Goze</span>
            
          {/* Socials */}
          <div className="flex items-center gap-4">
             <Link href="https://www.facebook.com/davedominic25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
             </Link>
             <Link href="https://www.instagram.com/httpdaev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
             </Link>
             <Link href="https://www.youtube.com/@x4phann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
             </Link>
             <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </Link>
             <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </Link>
          </div>
        </div>
      </section>

      {/* Floating Bottom Nav */}
      <AnimatePresence>
        {showNav && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-[#ffffff15] backdrop-blur-md border border-white/20 rounded-[32px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
          >
            <Link href="/professional" className="px-7 py-3 rounded-[24px] text-[#e7eaf6] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all">
              Professional
            </Link>
            <Link href="/personal" className="px-7 py-3 rounded-[24px] bg-[#ffffff20] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] text-[#27f3b3] drop-shadow-[0_0_10px_rgba(39,243,179,0.45)] font-mono text-base tracking-wide font-semibold">
              Personal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
