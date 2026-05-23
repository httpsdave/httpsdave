"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaUserGraduate, FaLocationArrow, FaLaptopCode, FaServer, FaLightbulb, FaMobileAlt, FaEnvelope } from "react-icons/fa"; import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiLaravel, SiReact } from "react-icons/si";
import spcImg from "../../SPC_7776.jpeg";
import bubuImg from "../../bubududout.webp";
import credlyImg from "../../credly.png";
import linkedinImg from "../../linkedin.png";

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
    desc: ["Laguna College", "Science, Technology, Engineering, and Mathematics (STEM) Strand", "Graduated with Honors"],
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
    title: "Mining Auction System",
    description: "Real-time auction system handling $140M+ deals (Spearheaded, Developed)",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=comexchange.mn",
    icons: [<SiNextdotjs key="1" />, <SiTypescript key="2" />, <SiReact key="3" />, <SiTailwindcss key="4" />],
    isGithub: false
  },
  {
    title: "Multi-Agent Microservice",
    description: "AI agents collaborating through microservices (BSc Thesis)",
    linkText: "Github",
    linkUrl: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Thesis+Project",
    tooltip: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    icons: [<SiNextdotjs key="1" />, <SiTailwindcss key="2" />, <SiTypescript key="3" />],
    isGithub: true
  },
  {
    title: "Crypto Trading Platform",
    description: "Mobile-first cryptocurrency exchange with live charts and order books.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Crypto+App",
    icons: [<SiVuedotjs key="1" />, <SiTailwindcss key="2" />, <SiLaravel key="3" />],
    isGithub: false
  },
  {
    title: "GOBI Deluxe Hotel & Resort",
    description: "Full-stack booking and reservation system for luxury hotel.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=GOBI+Deluxe+Hotel",
    icons: [<SiNextdotjs key="1" />, <SiReact key="2" />, <SiTailwindcss key="3" />],
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
    text: "The year really started to lean into our major, especially machine learning, and we began our thesis around March. Along with two of my groupmates, I worked on a Student Organization Information System for the Office of Student Affairs and Services at LSPU-SPCC. We used Laravel as the main framework on our adviser’s request for easier maintenance later on, with Vue.js for the frontend and MySQL for the database. The system later went live on Railway in early August.\n\nBefore that, we had Intersemester, so we did not really get a full summer break. Around May, we took robotics and mostly played around with an Arduino Uno kit. By the end of June, we built a smart trash bin called Binsense using an ultrasonic sensor, battery, wires, a few other parts, and an Arduino Uno board. It automatically opens when someone gets close enough to throw something away.\n\nOur thesis had a machine learning twist too. We took the NLP route, used OCR to scan event letters submitted as images, converted them into text, and then used spaCy transformer models to extract important event details like the date, time, location, event name, and a short description. Those details were then plotted into an event calendar inside the system with notifications for the different student organizations.\n\nThe main function of ORBIT, or Organized Records for Better Institutional Tracking, was to generate templates for the forms student organizations had to fill out, print, and return as scanned copies for submission and verification. Because the forms follow a very strict format, even tiny mistakes could mean redoing everything and collecting wet signatures all over again, which is a lot of work for people who are not always on campus. We defended the thesis in November 2025 and called it a day, with maintenance coming after.",
    images: []
  },
  {
    year: "2024",
    text: "Through my courses, I learned C++, C, and Python, with Python used mostly for machine learning. This was the period when our program began to focus more deeply on Intelligent Systems, which felt especially timely as AI continued to grow. I also started relying on Git for more than version control after learning the hard way how easy it is to lose progress, and I began building apps from start to finish instead of only isolated programs.",
    images: [
      "https://via.placeholder.com/600x400/0a0b14/1bd99b?text=Thesis+System+1",
      "https://via.placeholder.com/600x400/0a0b14/1bd99b?text=Thesis+System+2"
    ]
  },
  {
    year: "2023",
    text: "After starting to move through the different courses in the program, I learned Java as a smooth transition from C#. That year also reinforced my understanding of object-oriented programming, advanced data representation, and application development.",
    images: []
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

export default function ProfessionalPage() {
  const myAge = calcMyAge();
  const [imgIndex, setImgIndex] = useState(0);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [showMicroPopup, setShowMicroPopup] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Dave Goze | Professional";
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
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex-1 relative flex flex-col justify-center min-h-[85vh] pt-20 md:pt-24">
      {/* Subtle vignette for the hero section, fading out at the bottom */}
      <div className="absolute top-0 left-0 w-[100vw] h-[120vh] pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_90%)]" />

      {/* Absolute background grid with a smooth fade-out to transparent toward the bottom */}
      <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none z-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,white_25%,white_40%,transparent_100%)]" />

      <section className="relative z-10 mx-auto w-full max-w-none px-8 md:px-24 lg:px-40 xl:px-64 pb-14 pt-6 md:pt-10 lg:pt-12">

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
              <p>Computer Science | Full-Stack Developer (Frontend-Focused) | Philippines</p>
            </div>

            <div className="flex items-center gap-6 mt-12! pt-6">
              <a href="/DaveDominicGoze-Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[color:var(--accent)] text-[color:var(--accent)] px-8 py-3 font-mono text-sm hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300 flex items-center gap-2 cursor-pointer inline-block text-center">
                VIEW CV <span>&gt;</span>
              </a>

              <div className="flex items-center gap-4">
                <Link href="https://www.facebook.com/davedominic25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaFacebook size={16} />
                </Link>
                <Link href="https://www.instagram.com/httpdaev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaInstagram size={16} />
                </Link>
                <Link href="https://www.youtube.com/@x4phann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaYoutube size={16} />
                </Link>
                <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaLinkedin size={16} />
                </Link>
                <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaGithub size={16} />
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
                {imgIndex === 0 ? "CLICK ME 👀" : "GLAD YOU'RE HERE ☄️"}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-24 flex flex-wrap justify-between gap-16 pb-10 w-full">
          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={myAge} duration={1.5} />
            </span>
            <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Age</span>
          </div>

          {/* Years of experience */}
          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={0} />
            </span>
            <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Years of<br />experience</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={14} />
            </span>
            <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Projects worked<br />on</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={9} />
            </span>
            <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Projects<br />Deployed</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">
              <AnimatedCounter value={43} />
            </span>
            <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Microcredentials</span>
          </div>
        </div>

        {/* Microcredentials Button */}
        <div className="flex justify-center mt-4 mb-20 relative">
          <motion.div
            onClick={() => setShowMicroPopup(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-[40px] border border-white/10 bg-[#0a0b14]/50 transition-colors group cursor-pointer overflow-hidden"
          >
            <span className="relative flex items-center gap-3 z-20">
              <span className="relative flex-none z-10">
                <span className="block w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-700 ease-out group-hover:scale-[120] origin-center" />
              </span>

              <span className="font-mono text-white/90 group-hover:text-[#0a0b14] text-lg font-bold tracking-wide z-30 relative transition-colors duration-300">
                View Microcredentials <span className="inline-block opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">→</span>
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
                  onClick={() => setShowMicroPopup(false)}
                  className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm cursor-pointer"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#12131c] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col gap-6 items-center w-[90%] max-w-sm"
                >
                  <h3 className="text-xl font-mono text-white font-bold tracking-tight">Choose Platform</h3>
                  <div className="flex items-center gap-6 w-full justify-center">
                    <Link
                      href="https://www.credly.com/users/dave-dominic-goze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
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
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-lg hover:shadow-[color:var(--accent)]/20 transition-all">
                        <Image src={linkedinImg} alt="LinkedIn" className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                      <span className="text-sm font-mono text-gray-300">LinkedIn</span>
                    </Link>
                  </div>
                  <button 
                    onClick={() => setShowMicroPopup(false)}
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

        {/* Skills Section */}
        <div className="mt-12 mb-32 flex flex-col w-full max-w-[1300px] mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-bold tracking-tight">
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
        <div className="mt-12 mb-40 flex flex-col w-full max-w-[1100px] mx-auto px-4 md:px-0">
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
                  <div className="w-full h-[250px] md:h-[280px] p-3 md:p-4 pb-0 relative bg-[#13182b] flex items-end justify-center rounded-t-3xl overflow-hidden">

                    {/* Beam of light (Now contained within the preview and ends at the base) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 shadow-[0_0_15px_cyan]"></div>

                    {/* Base glowing circles with smaller radius and ripple effect */}
                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 z-20 w-[60%] h-8 origin-bottom scale-75 group-hover:scale-100">
                      <div className="absolute w-[30%] h-[80%] rounded-[100%] border-[2px] border-cyan-400 shadow-[0_0_15px_cyan]"></div>
                      <div className="absolute w-[50%] h-[120%] rounded-[100%] border-[1px] border-cyan-400/50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      <div className="absolute w-[70%] h-[160%] rounded-[100%] border-[1px] border-cyan-500/30"></div>
                      <div className="absolute w-[90%] h-[200%] rounded-[100%] border-[1px] border-cyan-500/10"></div>
                    </div>

                    <div className="w-full h-full rounded-t-[14px] overflow-hidden shadow-2xl relative z-30 flex">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    {/* Faded bottom gradient so image blends softly at bottom edge if needed */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0b0e17] to-transparent z-40" />
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
                          <div key={i} className="w-10 h-10 rounded-full bg-[#171e36] border-[3px] border-[#0b0e17] flex items-center justify-center text-[color:var(--accent)] text-lg z-10 relative shadow-md">
                            {icon}
                          </div>
                        ))}
                      </div>

                      {/* Link */}
                      <Link
                        href={project.linkUrl}
                        className="flex items-center gap-3 text-[color:var(--accent)] font-bold font-mono text-sm md:text-base hover:text-white transition-colors"
                      >
                        {project.linkText}
                        {project.isGithub ? <FaGithub className="text-lg" /> : <FaLocationArrow className="text-lg rotate-45" />}
                      </Link>
                    </div>
                  </div>
                </motion.div>              </div>))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-20">
            <Link href="/projects">
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
        <div className="mt-20 mb-32 flex flex-col w-full max-w-[1300px] mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-bold tracking-tight">
            My <span className="text-[color:var(--accent)]">Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative w-full group min-h-[160px] md:min-h-[200px]">

                <div className="relative w-full h-full rounded-2xl overflow-hidden p-[1px] bg-white/5 z-10 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(27,217,155,0.15)]">
                  {/* Single moving border trail */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--accent)_360deg)] animate-[spin_12s_linear_infinite]"
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
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
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
            <Link href="mailto:davedominc912@gmail.com" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Email</span>
            </Link>
            <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">LinkedIn</span>
            </Link>
            <Link href="/DaveDominicGoze-Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-4 py-2 overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 text-xl md:text-2xl font-mono font-bold text-gray-300 group-hover:text-[#0a0b14] transition-colors duration-500 tracking-wide">Resume</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-12">
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
        </div>

      </section>

      {/* Fixed Left Social Sidebar */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-7 z-40">
        <Link href="mailto:davedominc912@gmail.com" className="text-gray-300 hover:text-[color:var(--accent)] hover:-translate-y-1 transition-all duration-300">
          <FaEnvelope size={26} />
        </Link>
        <Link href="https://www.linkedin.com/in/davegoze/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[color:var(--accent)] hover:-translate-y-1 transition-all duration-300">
          <FaLinkedin size={26} />
        </Link>
        <Link href="https://github.com/httpsdave" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[color:var(--accent)] hover:-translate-y-1 transition-all duration-300">
          <FaGithub size={26} />
        </Link>
        <div className="w-[3px] h-32 bg-white/80 mt-2" />
      </div>

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
            >
              Professional
            </Link>
            <Link href="/personal" className="px-7 py-3 rounded-[24px] text-[color:var(--fg)] hover:bg-[#ffffff10] font-mono text-base tracking-wide font-semibold transition-all">
              Personal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Absolute background grid fading in from transparent to bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none z-0 bg-grid [mask-image:linear-gradient(to_top,white_10%,transparent_100%)]" />
    </div>
  );
}
