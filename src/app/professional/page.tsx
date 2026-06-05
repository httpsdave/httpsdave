"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll } from "framer-motion";
import confetti from "canvas-confetti";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaUserGraduate, FaUser, FaCogs, FaLocationArrow, FaLaptopCode, FaServer, FaLightbulb, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaCopy } from "react-icons/fa"; import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiLaravel, SiReact, SiFastapi, SiSqlite, SiNodedotjs, SiThreedotjs, SiPhp } from "react-icons/si";
import { useSound } from "@/components/SoundContext";
import spcImg from "../../SPC_7776.jpeg";
import bubuImg from "../../bubududout.webp";
import credlyImg from "../../credly.png";
import linkedinImg from "../../linkedin.png";
import codingImg from "../../coding.jpg";
import edukImg from "../../edukcircle.jpg";
import orbitPresImg from "../../orbitpresentation.jpg";
import obitPres2Img from "../../obitpresentation2.jpg";


function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const end = value;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsedTime / duration, 1);

        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

const images = [spcImg.src, bubuImg.src];

const educationData = [
  {
    title: "Preschool & Elementary",
    period: "Jun 5, 2008 - Mar 30, 2016",
    status: "GWA: 90",
    desc: ["Blue Danube School Inc.", "Basic Education", "Graduated with Honors"],
  },
  {
    title: "High School & Senior High School",
    period: "Jun 5, 2016 - Jul 30, 2022",
    status: "GWA: 92.22 | 93.36",
    desc: ["Laguna College", "STEM Track", "Graduated with Honors"],
  },
  {
    title: "Bachelor of Science in Computer Science",
    period: "Aug 19, 2022 - Jun 30, 2026",
    status: "Pending",
    desc: ["Laguna State Polytechnic University - San Pablo City Campus", "Major in Intelligent Systems", "Magna Cum Laude"],
  }
];

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C#",],
  },
  {
    category: "Front End",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "Next", "Vue", "Inertia"],
  },
  {
    category: "Styling & Design",
    skills: ["Tailwind", "CSS", "SVG", "Flutter"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "MySQL", "PostgreSQL", "Firebase", "PHP", "Node.js", "Flask"],
  },
  {
    category: "Machine Learning",
    skills: [
      "Jupyter Notebook", "Google Colab", "NumPy", "Pandas", "Scikit-Learn",
      "PyTorch", "TensorFlow", "NLTK", "spaCy", "Neural Networks",
      "Natural Language Processing", "LLMs", "Deep Learning",
      "Supervised ML", "Unsupervised ML"
    ],
  },
  {
    category: "Miscellaneous",
    skills: ["Git", "Fluent in English and Filipino", "APIs", "Arduino UNO", "Canva (Digital Art)"],
  }
];

const projectsData = [
  {
    title: "ORBIT",
    description: "Student organization information system for better institutional tracking.",
    linkText: "Check Live Site",
    linkUrl: "https://orbit-kappa-pink.vercel.app/login",
    image: "/orbitimage.png",
    icons: [<SiLaravel key="1" color="#FF2D20" />, <SiVuedotjs key="2" color="#4FC08D" />, <SiPhp key="3" color="#777BB4" />, <SiTailwindcss key="4" color="#06B6D4" />],
    isGithub: false
  },
  {
    title: "Aux",
    description: "Billboard Top 100 clone with web scraping for music data.",
    linkText: "Check Live Site",
    linkUrl: "https://aux-cix8.vercel.app/",
    image: "/aux-preview.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiReact key="2" color="#61DAFB" />, <SiTypescript key="3" color="#3178C6" />, <SiFastapi key="4" color="#009688" />, <SiSqlite key="5" color="#0F80CC" />],
    isGithub: false
  },
  {
    title: "Ritmo",
    description: "A Radio Garden clone to explore live radio stations globally.",
    linkText: "Check Live Site",
    linkUrl: "https://ritmo-blond.vercel.app/",
    image: "/ritmo.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiThreedotjs key="2" color="#ffffff" />, <SiTailwindcss key="3" color="#06B6D4" />],
    isGithub: false
  },
  {
    title: "Juris",
    description: "Philippine legal database indexing laws and acts via automated scraping from reliable sources.",
    linkText: "Check Live Site",
    linkUrl: "https://juris-neon.vercel.app/",
    image: "/juris.png",
    icons: [<SiNextdotjs key="1" color="#ffffff" />, <SiTypescript key="2" color="#3178C6" />, <SiReact key="3" color="#61DAFB" />, <SiTailwindcss key="4" color="#06B6D4" />, <SiNodedotjs key="5" color="#339933" />],
    isGithub: false
  }
];

const experienceData = [
  {
    title: "Frontend Developer",
    description: "Part of the frontend team that developed a social media management system for Ollopa Corporation, using Next.js, TypeScript, Tailwind.",
    icon: <FaLaptopCode className="text-5xl md:text-6xl text-purple-400 z-10" />,
    delay: "0s",
  },
  {
    title: "Fullstack Developer",
    description: "Developed a web-based student organization information system for the Office of Student Affairs and Services at Laguna State Polytechnic University using Laravel, MySQL, Vue, DOMPDF.",
    icon: <FaServer className="text-5xl md:text-6xl text-orange-400 z-10" />,
    delay: "-1.5s",
  },
  {
    title: "Vibecoding",
    description: (
      <>
        Developed, created, and played around with APIs and scraping to make original works or clone popular websites like <a href="https://ritmo-blond.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors cursor-pointer pb-[1px]">Ritmo</a>, and <a href="https://aux-cix8.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors cursor-pointer pb-[1px]">Aux.</a>
      </>
    ),
    icon: <FaLightbulb className="text-5xl md:text-6xl text-pink-400 z-10" />,
    delay: "-3s",
  },
  {
    title: "Android Apps",
    description: "Experience in mobile app development using Flutter, Dart, React Native, and Expo Go, integrated with lightweight backends like SQLite.",
    icon: <FaMobileAlt className="text-5xl md:text-6xl text-cyan-400 z-10" />,
    delay: "-4.5s",
  }
];

const journeyData = [
  {
    year: "2026",
    text: "Nothing for 2026 yet. For now I’m focused on finding a fulfilling job where I can pour my passion into meaningful work and keep growing as a developer.",
    images: []
  },
  {
    year: "2025",
    text: "Focused on our thesis (ORBIT): a Student Organization Information System built with Laravel, Vue, and MySQL that later went live on Railway. We also worked on robotics projects (Arduino) — including a smart trash bin called Binsense — and implemented OCR/NLP to extract event details for the system. We defended the thesis in November 2025 and moved to maintenance afterward.",
    images: [orbitPresImg.src, obitPres2Img.src]
  },
  {
    year: "2024",
    text: "Through my courses, I learned C++, C, and Python, with Python used mostly for machine learning. This was the period when our program began to focus more deeply on Intelligent Systems, which felt especially timely as AI continued to grow. I also started relying on Git for more than version control after learning the hard way how easy it is to lose progress, and I began building apps from start to finish instead of only isolated programs.",
    images: []
  },
  {
    year: "2023",
    text: "After starting to move through the different courses in the program, I learned Java as a smooth transition from C#. That year also reinforced my understanding of object-oriented programming, advanced data representation, and application development. Our department attended the 15th Edukcircle held in the University of the Philippines - Diliman.",
    images: [edukImg.src]
  },
  {
    year: "2022",
    text: "I started my Computer Science degree at Laguna State Polytechnic University - San Pablo City Campus. My first year focused on the fundamentals of programming, logic, and problem-solving, which made for an exciting introduction to the theories behind software development. C# was the first language I learned, along with the basics of web development using vanilla HTML and CSS, just before AI began to take off.",
    images: []
  }
];

const calcMyAge = () => {
  const birthDate = new Date("2004-02-05");
  const diff_ms = Date.now() - birthDate.getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

interface FloatingBalloon {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  drift: number;
}

const BalloonSVG = ({ color }: { color: string }) => (
  <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0C8.954 0 0 8.954 0 20C0 35 15 45 20 48C25 45 40 35 40 20C40 8.954 31.046 0 20 0Z" fill={color}/>
    <path d="M17 48H23L21.5 50.5H18.5L17 48Z" fill={color}/>
    {/* Balloon String */}
    <path d="M20 50.5C20 60 15 65 20 70C25 75 20 80 20 80" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(30 12 12)" fill="white" fillOpacity="0.3"/>
  </svg>
);

export default function ProfessionalPage() {
  const myAge = calcMyAge();
  const [imgIndex, setImgIndex] = useState(0);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [showMicroPopup, setShowMicroPopup] = useState(false);
  const [showBirthdate, setShowBirthdate] = useState(false);
  const [balloons, setBalloons] = useState<FloatingBalloon[]>([]);
  const [copied, setCopied] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { playSound } = useSound();

  const handleCopyEmail = () => {
    playSound("ui");
    navigator.clipboard.writeText("davedominic912@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAgeClick = (e: React.MouseEvent) => {
    playSound("birthday");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // 1. Large regular confetti spread
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x, y },
      colors: ['#27f3b3', '#ffffff', '#12131c'], 
      ticks: 200,
    });

    // 2. Generate smooth floating balloons using Framer Motion
    const newBalloons = Array.from({ length: 7 }).map((_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
      color: ['#ff4d4d', '#27f3b3', '#4d79ff', '#ffdf4d', '#cc4dff'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 150 // random horizontal drift
    }));
    
    setBalloons(prev => [...prev, ...newBalloons]);

    setShowBirthdate(true);
    setTimeout(() => {
      setShowBirthdate(false);
    }, 2500);

    // Clean up balloons after animation
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => !newBalloons.find(nb => nb.id === b.id)));
    }, 6000);
  };

  useEffect(() => {
    document.title = "Professional | Dave Goze";
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < 100) {
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

  const nextImage = () => {
    playSound("ui");
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex-1 relative flex flex-col justify-center min-h-[85vh] pt-20 md:pt-24 overflow-x-hidden">
      
      {/* Floating Balloons Portal */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence>
          {balloons.map((b) => (
            <motion.div
              key={b.id}
              initial={{ y: b.y - 20, x: b.x - 20, opacity: 0, scale: 0.5 }}
              animate={{ 
                y: -150, // fly up past the top of the viewport
                x: b.x - 20 + b.drift, // slightly drift left/right
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 1.2]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2, 
                delay: b.delay,
                ease: "easeOut" 
              }}
              className="absolute"
            >
              <BalloonSVG color={b.color} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Subtle vignette for the hero section, fading out at the bottom */}
      <div className="absolute top-0 left-0 w-[100vw] h-[120vh] pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_90%)]" />

      {/* Absolute background grid with a smooth fade-out to transparent toward the bottom */}
      <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none z-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,white_25%,white_40%,transparent_100%)]" />

      <section className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-8 md:px-24 lg:px-40 xl:px-64 pb-14 pt-6 md:pt-10 lg:pt-12">

        {/* Main Hero Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">

          {/* Left Column: Text & Info */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <span className="font-mono text-sm tracking-widest text-[#e7eaf6] mb-2 uppercase">
              Full-Stack Developer
            </span>
            <div className="flex flex-col leading-none">
              <h1 className="text-4xl md:text-5xl xl:text-[80px] font-medium font-mono tracking-tight text-white mb-2">
                Hello I'm
              </h1>
              <div className="group w-fit flex flex-col cursor-default">
                <h1 className="relative px-2 -mx-2 overflow-hidden w-fit text-4xl md:text-5xl xl:text-[80px] font-medium font-mono tracking-tight text-[color:var(--accent)] transition-colors duration-500 drop-shadow-md group-hover:text-[#0a0b14] mb-2">
                  <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Dave Dominic</span>
                </h1>
                <h1 className="relative px-2 -mx-2 overflow-hidden w-fit text-4xl md:text-5xl xl:text-[80px] font-medium font-mono tracking-tight text-[color:var(--accent)] transition-colors duration-500 drop-shadow-md group-hover:text-[#0a0b14]">
                  <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Goze</span>
                </h1>
              </div>
            </div>

            <div className="font-mono text-sm tracking-wide text-[color:var(--muted)] space-y-2 pt-6 max-w-xl">
              <p>
                Computer Science | STEM | Full-Stack Developer (Front-end Focused) | <FaMapMarkerAlt className="inline-block -mt-0.5 mr-1 text-red-500" aria-hidden="true" />Philippines
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 mt-12! pt-6">
              <a
                href="/DaveDominicGoze-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[color:var(--accent)] text-[color:var(--accent)] px-5 sm:px-8 py-2.5 sm:py-3 font-mono text-[10px] sm:text-sm hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300 flex items-center gap-2 cursor-pointer text-center whitespace-nowrap"
                onClick={() => playSound("ui")}
                onMouseEnter={() => playSound("hover")}
              >
                VIEW CV <span>&gt;</span>
              </a>

              <div className="flex items-center gap-2 sm:gap-4">
                <Link
                  href="https://www.facebook.com/davedominic25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300"
                  onClick={() => playSound("social")}
                  onMouseEnter={() => playSound("hover")}
                >
                  <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/httpdaev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300"
                  onClick={() => playSound("social")}
                  onMouseEnter={() => playSound("hover")}
                >
                  <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="https://www.youtube.com/@x4phann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300"
                  onClick={() => playSound("social")}
                  onMouseEnter={() => playSound("hover")}
                >
                  <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/davegoze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300"
                  onClick={() => playSound("social")}
                  onMouseEnter={() => playSound("hover")}
                >
                  <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="https://github.com/httpsdave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300"
                  onClick={() => playSound("social")}
                  onMouseEnter={() => playSound("hover")}
                >
                  <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image Circle */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center cursor-pointer transition-transform duration-300 active:scale-95 group"
              onClick={nextImage}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes dash-morph-1 {
                  0%, 65%, 100% {
                    stroke-dasharray: 60 10 4 12 100 20 2 30 15 50;
                    stroke-dashoffset: 0;
                  }
                  70% {
                    stroke-dasharray: 20 40 20 4 50 30 40 10 60 10;
                    stroke-dashoffset: -5;
                  }
                  75% {
                    stroke-dasharray: 140 5 1 5 10 5 60 10 10 50;
                    stroke-dashoffset: -10;
                  }
                  80% {
                    stroke-dasharray: 10 10 120 20 2 10 80 5 2 40;
                    stroke-dashoffset: -15;
                  }
                  85% {
                    stroke-dasharray: 50 20 5 40 10 20 100 5 20 30;
                    stroke-dashoffset: -10;
                  }
                  90% {
                    stroke-dasharray: 30 20 10 30 90 10 10 5 10 80;
                    stroke-dashoffset: -5;
                  }
                }
                @keyframes dash-morph-2 {
                  0%, 65%, 100% {
                    stroke-dasharray: 4 25 1 10 6 40;
                    stroke-dashoffset: 0;
                  }
                  72% {
                    stroke-dasharray: 20 10 15 5 10 20;
                    stroke-dashoffset: -5;
                  }
                  80% {
                    stroke-dasharray: 5 15 5 25 30 5;
                    stroke-dashoffset: -10;
                  }
                  88% {
                    stroke-dasharray: 40 5 2 15 10 20;
                    stroke-dashoffset: -5;
                  }
                }
                .circle-morph-1 {
                  animation: dash-morph-1 12s ease-in-out infinite;
                }
                .circle-morph-2 {
                  animation: dash-morph-2 15s ease-in-out infinite;
                }
              `}} />
              <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
                <circle className="circle-morph-1" cx="50" cy="50" r="49" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeDasharray="60 10 4 12 100 20 2 30 15 50" opacity="0.9" />
                <circle className="circle-morph-2" cx="50" cy="50" r="47" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="4 25 1 10 6 40" opacity="0.5" />
              </svg>

              {/* Comet Trail */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none animate-[spin_10s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, rgba(39, 243, 179, 0) 0%, rgba(39, 243, 179, 0) 65%, var(--accent) 100%)',
                  WebkitMask: 'radial-gradient(closest-side, transparent 96.5%, black 97%, black 97.5%, transparent 98%)',
                  mask: 'radial-gradient(closest-side, transparent 96.5%, black 97%, black 97.5%, transparent 98%)'
                }}
              ></div>
              {/* Comet Head Dot */}
              <div className="absolute inset-0 rounded-full pointer-events-none animate-[spin_10s_linear_infinite]">
                {/* Positioned at top-center, right on the comet trail track */}
                <div className="absolute top-[1.25%] left-1/2 -translate-x-1/2 w-1 h-1 bg-[color:var(--accent)] rounded-full shadow-[0_0_8px_2px_var(--accent)]" />
              </div>

              <div className="w-[90%] h-[90%] rounded-full bg-[#e7eaf6] relative overflow-hidden transition-opacity duration-300 border-4 border-[#0a0b14]" key={imgIndex}>
                <img
                  src={images[imgIndex]}
                  alt={imgIndex === 0 ? "SPC portrait" : "Bubududout portrait"}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Tooltip Popup */}
              <div className="absolute bottom-[5%] py-2 px-5 bg-[#12131c]/90 border border-white/10 shadow-xl backdrop-blur-sm text-[#e7eaf6] text-xs md:text-sm font-bold font-mono tracking-widest rounded-[40px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 z-50 pointer-events-none">
                {imgIndex === 0 ? "CLICK ME 👀" : "GLAD YOU'RE HERE ❤️"}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-24 flex justify-between items-start gap-1 sm:gap-10 md:gap-16 pb-10 w-full group/stats">
          <button 
            type="button"
            className="flex items-center gap-1.5 sm:gap-4 cursor-pointer relative group transition-all duration-300 group-hover/stats:blur-[4px] group-hover/stats:opacity-50 hover:!blur-none hover:!opacity-100"
            onClick={handleAgeClick}
            onMouseEnter={() => playSound("hover")}
          >
            <AnimatePresence>
              {showBirthdate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[color:var(--accent)] font-mono text-[10px] sm:text-sm font-bold bg-[#12131c]/90 px-3 py-1 rounded-full border border-[color:var(--accent)]/30 backdrop-blur-sm pointer-events-none z-50"
                >
                  Feb 05, 2004
                </motion.div>
              )}
            </AnimatePresence>
            <span className="text-3xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white group-hover:text-[color:var(--accent)] transition-colors duration-300">
              <AnimatedCounter value={myAge} duration={1.5} />
            </span>
            <span className="text-[9px] sm:text-sm font-mono text-[color:var(--muted)] leading-tight text-left group-hover:text-[color:var(--accent)] transition-colors duration-300">Age</span>
          </button>

          {/* Years of experience */}
          <div className="flex items-center gap-1.5 sm:gap-4 group transition-all duration-300 group-hover/stats:blur-[4px] group-hover/stats:opacity-50 hover:!blur-none hover:!opacity-100">
            <span className="text-3xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={0} />
            </span>
            <span className="text-[9px] sm:text-sm font-mono text-[color:var(--muted)] leading-tight text-left">Years of<br />experience</span>
          </div>

          <button 
            type="button"
            onClick={(e) => { 
              playSound("ui");
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }} 
            onMouseEnter={() => playSound("hover")}
            className="flex items-center gap-1.5 sm:gap-4 cursor-pointer group transition-all duration-300 group-hover/stats:blur-[4px] group-hover/stats:opacity-50 hover:!blur-none hover:!opacity-100"
          >
            <span className="text-3xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white inline-flex items-center group-hover:text-[color:var(--accent)] transition-colors">
              <AnimatedCounter value={14} />
            </span>
            <span className="text-[9px] sm:text-sm font-mono text-[color:var(--muted)] leading-tight text-left group-hover:text-[color:var(--accent)] transition-colors">Projects worked<br />on</span>
          </button>

          <button 
            type="button"
            onClick={(e) => { 
              playSound("ui");
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }} 
            onMouseEnter={() => playSound("hover")}
            className="flex items-center gap-1.5 sm:gap-4 cursor-pointer group transition-all duration-300 group-hover/stats:blur-[4px] group-hover/stats:opacity-50 hover:!blur-none hover:!opacity-100"
          >
            <span className="text-3xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white inline-flex items-center group-hover:text-[color:var(--accent)] transition-colors">
              <AnimatedCounter value={9} />
            </span>
            <span className="text-[9px] sm:text-sm font-mono text-[color:var(--muted)] leading-tight text-left group-hover:text-[color:var(--accent)] transition-colors">Projects<br />Deployed</span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-4 group transition-all duration-300 group-hover/stats:blur-[4px] group-hover/stats:opacity-50 hover:!blur-none hover:!opacity-100" data-cursor-select="true">
            <span className="text-3xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <button
                type="button"
                onClick={() => {
                  playSound("ui");
                  setShowMicroPopup(true);
                }}
                onMouseEnter={() => playSound("hover")}
                className="inline-flex items-center cursor-pointer hover:text-[color:var(--accent)] transition-colors"
              >
                <AnimatedCounter value={45} />
              </button>
            </span>
            <span className="text-[9px] sm:text-sm font-mono text-[color:var(--muted)] leading-tight text-left">Microcredentials</span>
          </div>
        </div>

        {/* Microcredentials Button */}
        <div className="flex justify-center mt-4 mb-20 relative">
          <motion.div
            onClick={() => {
              playSound("ui");
              setShowMicroPopup(true);
            }}
            onMouseEnter={() => playSound("hover")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-[40px] border border-white/10 bg-[#0a0b14]/50 transition-colors group cursor-pointer overflow-hidden whitespace-nowrap"
          >
            <span className="relative flex items-center gap-2 sm:gap-3 z-20">
              <span className="relative flex-none z-10">
                <span className="block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-700 ease-out group-hover:scale-[120] sm:group-hover:scale-[150] origin-center" />
              </span>

              <span className="font-mono text-white/90 group-hover:text-[#0a0b14] text-xs sm:text-lg font-bold tracking-wide z-30 relative transition-colors duration-300">
                View Microcredentials <span className="inline-block opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300 hidden sm:inline-block">→</span>
              </span>
            </span>
          </motion.div>

          {/* Microcredentials Choice Popup */}
          <AnimatePresence>
            {showMicroPopup && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => {
                    playSound("ui");
                    setShowMicroPopup(false);
                  }}
                  className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm cursor-pointer"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#12131c] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col gap-6 items-center w-[90%] sm:w-fit max-w-[90vw]"
                >
                  <h3 className="text-xl font-mono text-white font-bold tracking-tight">Choose Platform</h3>
                  <div className="flex items-center gap-6 w-full justify-center">
                    <Link
                      href="https://www.credly.com/users/dave-dominic-goze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
                      onClick={() => playSound("social")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-lg hover:shadow-[color:var(--accent)]/20 transition-all">
                        <Image src={credlyImg} alt="Credly" className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                      <span className="text-sm font-mono text-gray-300">Credly</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/davegoze/details/certifications/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
                      onClick={() => playSound("social")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-lg hover:shadow-[color:var(--accent)]/20 transition-all">
                        <Image src={linkedinImg} alt="LinkedIn" className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                      <span className="text-sm font-mono text-gray-300">LinkedIn</span>
                    </Link>
                  </div>
                  <button 
                    onClick={() => {
                      playSound("ui");
                      setShowMicroPopup(false);
                    }}
                    onMouseEnter={() => playSound("hover")}
                    className="mt-2 text-xs font-mono text-gray-500 hover:text-[color:var(--accent)] transition-colors cursor-grab active:cursor-grabbing"
                  >
                    Cancel
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Education Section */}
        <div className="mt-20 mb-32 flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-white mb-12 flex items-center gap-4">
            <FaUserGraduate className="text-[color:var(--accent)]" />
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1300px] mx-auto">
            {educationData.map((edu, idx) => {
              const isHovered = hoveredEdu === idx;

              return (
                <div
                  key={idx}
                  className="relative rounded-2xl flex flex-col"
                  onMouseEnter={() => setHoveredEdu(idx)}
                  onMouseLeave={() => setHoveredEdu(null)}
                >
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        layoutId="eduHoverBox"
                        className="absolute inset-0 rounded-2xl z-0"
                        style={{
                          backgroundColor: "rgba(14, 42, 34, 0.95)", /* Deep green/teal fill */
                          border: "1px solid var(--accent)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      >
                        {/* Inner stroke line matching image */}
                        <div className="absolute inset-x-2 inset-y-2 rounded-xl border border-[color:var(--accent)] opacity-20 pointer-events-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* The outer outline when UNhovered */}
                  <div className={"absolute inset-0 rounded-2xl border border-[color:var(--stroke)] transition-opacity duration-300 z-10 pointer-events-none " + (isHovered ? "opacity-0" : "opacity-100")} />

                  <div className="relative z-20 p-8 flex flex-col justify-between h-full bg-transparent">
                    <div className="relative z-30">
                      <h3 className="text-lg font-bold font-mono text-white mb-1 transition-colors duration-300">{edu.title}</h3>
                      <p className="text-sm font-mono transition-colors duration-300 text-[color:var(--muted)] mb-4">{edu.period}</p>

                      <div className="flex items-center justify-end text-[color:var(--accent)] text-lg font-mono font-bold mb-6 transition-colors duration-300">
                        <FaUserGraduate className="mr-2" /> {edu.status}
                      </div>

                      <p className="text-sm font-mono transition-colors duration-300 text-[color:var(--muted)] leading-relaxed">
                        {edu.desc.map((line, lineIdx) => (
                          <span key={lineIdx}>
                            {line}
                            {lineIdx < edu.desc.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Short Profile Section */}
        <div className="mt-12 mb-32 flex flex-col w-full max-w-[1300px] mx-auto px-4 lg:px-8 xl:px-0">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-mono text-white font-bold tracking-tight flex items-center justify-center gap-4">
              <FaUser className="text-[color:var(--accent)]" />
              Short <span className="text-[color:var(--accent)]">profile</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[minmax(0,_auto)]">
            
            {/* 1. Developer building... */}
            <div className="group md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0b0e17] border border-white/5 overflow-hidden relative p-8 md:p-12 flex items-end shadow-xl min-h-[300px] md:min-h-[450px]">
               <Image
                 src={codingImg}
                 alt="Coding background"
                 fill
                 sizes="(max-width: 768px) 100vw, 66vw"
                 className="object-cover opacity-25 z-0 pointer-events-none"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-black/30 to-transparent z-10" />
               <h3 className="relative z-20 text-2xl md:text-4xl font-mono font-bold text-white max-w-lg leading-tight tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                  Developer building<br />
                  clean, reliable<br />
                  applications and<br />
                  systems
               </h3>
            </div>

            {/* 2. Fluent in... */}
            <div className="group md:col-span-1 md:row-span-1 border border-white/5 rounded-[2rem] bg-[#0b0e17] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[170px] md:min-h-[205px]">
               <h3 className="relative z-10 text-xl md:text-2xl font-mono font-bold text-white leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                  Fluent in English<br />
                  and Filipino<br />
                  (Tagalog)
               </h3>
            </div>

            {/* 3. Tech Stack */}
            <div className="group md:col-span-1 md:row-span-1 border border-white/5 rounded-[2rem] bg-[#0b0e17] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[170px] md:min-h-[205px]">
               {/* Background Drift Chips (Made bigger and more visible, matching exact style of 2nd image) */}
               <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-[0.88] pointer-events-none z-0 scale-[1.02] origin-right">
                  <div className="flex gap-2 justify-end">
                    <span className="px-5 py-2 rounded-xl bg-[#1e202f] text-white font-mono text-sm md:text-base border border-white/10 whitespace-nowrap shadow-lg">Laravel</span>
                  </div>
                  <div className="flex gap-2 justify-end translate-x-2">
                    <span className="px-5 py-2 rounded-xl bg-[#1e202f] text-white font-mono text-sm md:text-base border border-white/10 whitespace-nowrap shadow-lg">React</span>
                    <span className="px-5 py-2 rounded-xl bg-[#1e202f] text-white font-mono text-sm md:text-base border border-white/10 whitespace-nowrap shadow-lg">Vue.js</span>
                  </div>
                  <div className="flex gap-2 justify-end translate-x-6">
                    <span className="px-5 py-2 rounded-xl bg-[#1e202f] text-white font-mono text-sm md:text-base border border-white/10 whitespace-nowrap shadow-lg">C#</span>
                    <span className="px-5 py-2 rounded-xl bg-[#1e202f] text-white font-mono text-sm md:text-base border border-white/10 whitespace-nowrap shadow-lg">Java</span>
                  </div>
               </div>
               
               <div className="relative z-10 max-w-[55%] flex flex-col group-hover:translate-x-1.5 transition-transform duration-300">
                  <p className="text-gray-400 font-mono text-xs mb-2 uppercase tracking-widest font-semibold">
                    My primary<br/>tech stack
                  </p>
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-white leading-tight">
                     Next.js, TypeScript
                  </h3>
               </div>
            </div>

            {/* 4. Web Developer designer */}
            <div className="group md:col-span-1 md:row-span-1 border border-white/5 rounded-[2rem] bg-[#0b0e17] px-8 py-4 flex flex-col items-center justify-center relative overflow-hidden shadow-xl min-h-[80px] md:min-h-[100px]">
               <div 
                 className="absolute inset-0 pointer-events-none z-0"
                 style={{ maskImage: 'linear-gradient(to right, black 30%, transparent 85%)', WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 85%)' }}
               >
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                 <div className="absolute top-[0px] left-[40px] w-[40px] h-[40px] bg-gradient-to-br from-white/10 to-white/0" />
                 <div className="absolute top-[80px] left-[120px] w-[40px] h-[40px] bg-gradient-to-br from-white/10 to-white/0" />
                 <div className="absolute top-[40px] left-[200px] w-[40px] h-[40px] bg-gradient-to-br from-white/10 to-white/0" />
               </div>
               
               <div className="w-fit transition-transform duration-300 group-hover:translate-x-1.5 z-10 relative">
                 <h3 className="text-3xl md:text-[32px] text-left font-mono font-bold text-white leading-[1.15] tracking-tight">
                    Web Developer
                    <span className="block text-2xl md:text-[26px] text-white/90 font-mono font-normal lowercase mt-1">designer</span>
                 </h3>
               </div>
               
               <div className="absolute bottom-[-10px] right-[-10px] w-36 h-20 bg-[#16171e]/95 border border-white/10 rounded-xl p-3 flex flex-col justify-between shadow-2xl z-10 origin-bottom-right transform scale-100 group-hover:scale-105 transition-all duration-500">
                  {/* Top row: circle + two pills */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20 shrink-0"></div>
                    <div className="w-10 h-2 rounded-full bg-white/15 shrink-0"></div>
                    <div className="w-6 h-2 rounded-full bg-white/15 shrink-0"></div>
                  </div>
                  {/* Bottom rows: lines */}
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="w-[85%] h-1.5 rounded-full bg-white/10"></div>
                    <div className="w-[45%] h-1.5 rounded-full bg-white/10"></div>
                  </div>
               </div>
            </div>

            {/* 5. The Inside Scoop */}
            <div className="group md:col-span-2 md:row-span-2 border border-white/5 rounded-[2rem] bg-[#0b0e17] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[300px] md:min-h-[450px]">
               {/* Subtle background grid */}
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0" />
                  {/* Decorative boxes */}
                  <div className="absolute top-[80px] left-[400px] w-6 h-6 rounded-md bg-purple-500/20 border border-purple-500/30 blur-[0.5px]" />
                  <div className="absolute top-[80px] left-[320px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[80px] left-[560px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[80px] left-[640px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[80px] left-[800px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[160px] left-[480px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[160px] left-[720px] w-6 h-6 rounded-md border border-white/5" />
                  <div className="absolute top-[80px] left-[880px] w-6 h-6 rounded-md border border-white/5" />
               </div>
               
               <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[50%] group-hover:translate-x-1.5 transition-transform duration-300">
                  <p className="text-gray-400 font-mono mb-2 leading-relaxed">
                    The Inside<br/>Scoop
                  </p>
                  <h3 className="text-2xl md:text-[34px] font-mono font-bold text-white leading-snug tracking-tight">
                     Graduating soon,<br/>exploring what's next
                  </h3>
               </div>

               {/* Glassmorphic Code Card */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                 <div className="bg-[#1a1c2b]/30 backdrop-blur-md border border-white/10 rounded-l-3xl p-8 shadow-2xl relative overflow-hidden h-[300px] w-[450px]">
                    {/* Pinkish/Purple subtle glow behind the text */}
                    <div className="absolute top-1/4 right-8 w-[150px] h-[150px] bg-purple-500/15 blur-[60px] rounded-full pointer-events-none" />
                    
                    <pre className="text-[13px] font-mono leading-[2.2] relative z-10 whitespace-pre-wrap word-break">
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">1</span><span className="text-gray-500">// Importing a single module</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">2</span><span className="text-pink-400">import</span> <span className="text-purple-300">moduleName</span> <span className="text-pink-400">from</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right"></span><span className="text-orange-300 ml-9">'modulePath'</span><span className="text-gray-400">;</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">3</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">4</span><span className="text-gray-500">// Importing multiple modules</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">5</span><span className="text-pink-400">import</span> <span className="text-gray-400">{`{`}</span> <span className="text-purple-300">module1</span><span className="text-gray-400">,</span> <span className="text-purple-300">module2</span> <span className="text-gray-400">{`}`}</span> <span className="text-pink-400">from</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right"></span><span className="text-orange-300 ml-9">'modulePath'</span><span className="text-gray-400">;</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">6</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right">7</span><span className="text-[#3a3b4a]">// Importing an entire module as</span><br/>
<span className="text-gray-600 mr-4 select-none inline-block w-4 text-right"></span><span className="text-[#3a3b4a] ml-9">an object</span>
                    </pre>
                 </div>
               </div>
            </div>

            {/* 6. Ask a Question */}
            <div className="group md:col-span-1 md:row-span-1 border border-white/5 rounded-[2rem] bg-gradient-to-br from-[#4c1d95] via-[#2e1065] to-[#0f052d] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-xl min-h-[110px] md:min-h-[135px]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0%,transparent_70%)] pointer-events-none" />
               
               <h3 className="text-xl md:text-[23px] font-mono font-bold text-white relative z-10 mt-2 leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                  Do you want to ask a<br />question?
               </h3>
               
               {/* Copy email button with rainbow border */}
               <button
                 onClick={handleCopyEmail}
                 onMouseEnter={() => playSound("hover")}
                 className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-lg w-full max-w-[220px] mt-4 cursor-pointer"
               >
                 {/* Spinning Rainbow Gradient Background */}
                 <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#10b981_0%,#eab308_20%,#ec4899_40%,#8b5cf6_60%,#3b82f6_80%,#10b981_100%)]" />
                 
                 {/* Inner Button Canvas */}
                 <span className="relative z-10 w-full h-full flex items-center justify-center bg-[#0c051a] group-hover:bg-[#150a2b] rounded-xl py-2 px-3 transition-colors duration-300 text-xs font-mono font-medium text-white gap-2">
                   <FaCopy className={copied ? "text-[color:var(--accent)]" : "text-gray-400"} />
                   <span>{copied ? "Copied!" : "Copy my email address"}</span>
                 </span>
               </button>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 mb-32 flex flex-col w-full max-w-[1300px] mx-auto px-4 lg:px-8 xl:px-0">
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-bold tracking-tight flex items-center justify-center gap-4">
            <FaCogs className="text-[color:var(--accent)]" />
            Skills
          </h2>

          <div className="flex flex-col gap-10 w-full">
            {skillsData.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-2xl font-sans text-white/90">{category.category}</h3>
                <motion.div
                  className="flex flex-wrap gap-4 md:gap-5 cursor-grab active:cursor-grabbing"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                      }}
                      onHoverStart={() => playSound("hover")}
                      className="px-6 py-3 bg-[#171e36] text-[color:var(--accent)] font-sans text-lg md:text-xl font-medium transition-colors hover:bg-[color:var(--accent)] hover:text-[#0a0b14] cursor-grab active:cursor-grabbing"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mt-12 mb-40 flex flex-col w-full max-w-[1100px] mx-auto px-4 lg:px-8 xl:px-0 scroll-mt-28">
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-bold tracking-tight">
            A small selection of <span className="text-[color:var(--accent)]">recent projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projectsData.map((project, idx) => (
              <div key={idx} style={{ perspective: '1200px' }} className="flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateX: 15, y: -10, scale: 0.96, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col bg-[#0b0e17] rounded-3xl border border-white/5 group shadow-2xl relative w-full origin-bottom cursor-grab active:cursor-grabbing"
                >
                  {/* Tooltip / Link Popup */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:-translate-y-2">
                    <div className="bg-[#0a0b14]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/90 text-xs md:text-sm font-mono flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.2)] whitespace-nowrap">
                      {project.tooltip || (project.title === "Mining Auction System" ? "https://comexchange.mn" : project.linkUrl)}
                    </div>
                  </div>

                  {/* Image Wrapper */}
                  <div className="w-full h-[250px] md:h-[280px] p-3 md:p-4 pb-0 relative bg-[#13182b] flex items-end justify-center rounded-t-3xl">

                    <div className="w-full h-full rounded-t-[14px] overflow-hidden shadow-2xl relative z-30 flex">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    {/* Faded bottom gradient so image blends softly at bottom edge if needed */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0b0e17] to-transparent z-40 rounded-t-[14px]" />
                  </div>

                  {/* Beam of light (Moved outside image wrapper to prevent clipping) */}
                  <div className="absolute top-[20px] bottom-[auto] h-[260px] md:h-[290px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50 shadow-[0_0_15px_cyan] pointer-events-none"></div>

                  {/* Base glowing circles with smaller radius and ripple effect */}
                  <div className="absolute top-[270px] md:top-[300px] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-50 w-[60%] h-8 origin-center scale-75 group-hover:scale-100 pointer-events-none">
                    <div className="absolute w-[30%] h-[80%] rounded-[100%] border-[2px] border-cyan-400 shadow-[0_0_15px_cyan]"></div>
                    <div className="absolute w-[50%] h-[120%] rounded-[100%] border-[1px] border-cyan-400/50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    <div className="absolute w-[70%] h-[160%] rounded-[100%] border-[1px] border-cyan-500/30"></div>
                    <div className="absolute w-[90%] h-[200%] rounded-[100%] border-[1px] border-cyan-500/10"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1 relative z-50">
                    <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      {/* Tech Stack Bubbles */}
                      <div className="flex items-center -space-x-2">
                        {project.icons.map((icon, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-[#171e36] border-[3px] border-[#0b0e17] flex items-center justify-center text-lg z-10 relative shadow-md">
                            {icon}
                          </div>
                        ))}
                      </div>

                      {/* Link */}
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
                </motion.div>              </div>))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-20">
            <Link href="/projects" onClick={() => playSound("ui")} onMouseEnter={() => playSound("hover")}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-[40px] border border-white/10 bg-[#0a0b14]/50 transition-colors group cursor-pointer overflow-hidden"
              >
                <span className="relative flex items-center gap-3 z-20">
                  <span className="relative flex-none z-10">
                    <span className="block w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-700 ease-out group-hover:scale-[120] origin-center" />
                  </span>

                  <span className="font-mono text-white/90 group-hover:text-[#0a0b14] text-lg font-bold tracking-wide z-30 relative transition-colors duration-300">
                    Explore more projects <span className="inline-block opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">→</span>
                  </span>
                </span>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* My Experience Section */}
        <div className="mt-20 mb-32 flex flex-col w-full max-w-[1300px] mx-auto px-4 lg:px-8 xl:px-0">
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-bold tracking-tight">
            My <span className="text-[color:var(--accent)]">Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative w-full group min-h-[160px] md:min-h-[200px]">

                <div className="relative w-full h-full rounded-2xl overflow-hidden p-[2px] bg-white/5 z-10 shadow-[0_0_15px_rgba(27,217,155,0.08)] transition-shadow duration-500">
                  {/* Single moving border trail */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_0deg,transparent_0_332deg,rgba(27,217,155,0.45)_350deg,var(--accent)_360deg)] animate-[spin_12s_linear_infinite]"
                    style={{ animationDelay: exp.delay }}
                  ></div>

                  {/* Inner Content */}
                  <div className="relative w-full h-full bg-[#0b0e17]/85 backdrop-blur-2xl rounded-2xl p-6 md:p-8 z-20 flex flex-col md:flex-row gap-6 items-center transition-colors duration-500 hover:bg-[#0f1423]/90">

                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {exp.icon}
                    </div>

                    <div className="flex flex-col text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-3 group-hover:text-[color:var(--accent)] transition-colors duration-300">{exp.title}</h3>
                      <p className="text-sm md:text-base font-sans text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="mt-32 mb-32 flex flex-col w-full max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-mono text-white font-bold tracking-tight mb-6">
              My <span className="text-[color:var(--accent)]">journey</span> report
            </h2>
            <p className="text-gray-400 font-sans max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
              I've had the opportunity to develop software across a variety of settings – from small side-projects to large corporation, mostly building web systems. Here's my timeline of my journey
            </p>
          </div>

          <div ref={timelineRef} className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-24">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[-1px] md:left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top z-0"
              style={{ scaleY: scrollYProgress }}
            />

            {journeyData.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute -left-[42px] md:-left-[58px] top-2 w-5 h-5 rounded-full border-[4px] border-[#31364a] bg-[#0a0b14] shadow-[0_0_10px_rgba(255,255,255,0.05)] z-10"
                />

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
                  <div className="md:w-1/4 flex-shrink-0">
                    <h3 className="text-3xl md:text-4xl font-mono font-bold text-white/50 group-hover:text-white transition-colors duration-500">{item.year}</h3>
                  </div>

                  <div className="md:w-3/4 flex flex-col gap-6">
                    <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {item.text}
                    </p>

                    {item.images && item.images.length > 0 && (
                      <div className={`grid gap-4 mt-4 ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {item.images.map((img, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-white/10 group cursor-pointer bg-[#13182b]">
                            <img
                              src={img}
                              alt={`${item.year} event`}
                              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                style={{ objectPosition: 'center 70%' }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Want To Section */}
        <div className="mt-40 mb-16 flex flex-col w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-20 tracking-tight">
            Want To
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-32">
            <div className="flex flex-col items-center text-center group cursor-default">
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-[color:var(--accent)] mb-8 tracking-tight">offer job opportunity?</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300 font-sans text-base md:text-lg leading-relaxed px-2">
                I am open to discussing potential job opportunities or collaborations. With experience in web development, software engineering, and machine learning, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!
              </p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-[color:var(--accent)] mb-8 tracking-tight">Connect?</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300 font-sans text-base md:text-lg leading-relaxed px-2">
                Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-[color:var(--accent)] mb-8 tracking-tight">Build something?</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300 font-sans text-base md:text-lg leading-relaxed px-2">
                I have a passion for developing innovative web applications and intelligent systems. I'm always ready for a new challenge. Let's create something amazing together!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-24">
            <Link href="mailto:davedominc912@gmail.com" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")} onMouseEnter={() => playSound("hover")}>
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Email</span>
            </Link>
            <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")} onMouseEnter={() => playSound("hover")}>
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("social")} onMouseEnter={() => playSound("hover")}>
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">LinkedIn</span>
            </Link>
            <Link href="/DaveDominicGoze-Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center" onClick={() => playSound("ui")} onMouseEnter={() => playSound("hover")}>
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Resume</span>
            </Link>
          </div>

          <div className="flex justify-center mb-24 relative z-20">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-lg"
              onClick={() => playSound("ui")}
              onMouseEnter={() => playSound("hover")}
            >
              {/* Spinning Rainbow Gradient Background */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#10b981_0%,#eab308_20%,#ec4899_40%,#8b5cf6_60%,#3b82f6_80%,#10b981_100%)]" />
              
              {/* Inner Button Canvas */}
              <span className="relative z-10 w-full h-full flex items-center justify-center bg-[#0a0b14] group-hover:bg-[#0f1423] rounded-xl px-7 py-3 transition-colors duration-300 text-base md:text-lg font-mono font-bold tracking-tight text-white gap-2">
                Let's get in touch
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-12">
            <button
              onClick={() => {
                playSound("ui");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={() => playSound("hover")}
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
            <Link
              href="/professional"
              aria-current="page"
              style={{ color: "var(--accent)" }}
              className="px-7 py-3 rounded-[24px] bg-[#ffffff20] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] text-[color:var(--accent)] font-mono text-base tracking-wide font-semibold transition-colors duration-300"
              onClick={() => playSound("ui")}
              onMouseEnter={() => playSound("hover")}
            >
              Professional
            </Link>
            <Link href="/personal" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all" onClick={() => playSound("ui")} onMouseEnter={() => playSound("hover")}>
              Personal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Absolute background grid fading in from transparent to bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[950px] pointer-events-none z-0 [mask-image:radial-gradient(85%_100%_at_bottom_center,white_20%,transparent_95%)]">
        <div className="absolute inset-0 bg-grid opacity-75" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-glows-prof" width="960" height="960" patternUnits="userSpaceOnUse">
              {/* Higher/center extra boxes */}
              <rect x="480" y="0" width="160" height="160" fill="url(#grad2-prof)" />
              <rect x="320" y="160" width="160" height="160" fill="url(#grad3-prof)" />
              <rect x="480" y="320" width="160" height="160" fill="url(#grad1-prof)" />
              <rect x="800" y="0" width="160" height="160" fill="url(#grad1-prof)" />

              <rect x="0" y="160" width="160" height="160" fill="url(#grad1-prof)" />
              <rect x="320" y="480" width="160" height="160" fill="url(#grad2-prof)" />
              <rect x="640" y="160" width="160" height="160" fill="url(#grad1-prof)" />
              <rect x="800" y="640" width="160" height="160" fill="url(#grad3-prof)" />
              <rect x="480" y="800" width="160" height="160" fill="url(#grad2-prof)" />
              <rect x="160" y="640" width="160" height="160" fill="url(#grad1-prof)" />
            </pattern>
            <linearGradient id="grad1-prof" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="grad2-prof" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="grad3-prof" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-glows-prof)" />
        </svg>
      </div>
    </div>
  );
}
