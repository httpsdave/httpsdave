"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaUserGraduate, FaLocationArrow, FaLaptopCode, FaServer, FaLightbulb, FaMobileAlt } from "react-icons/fa"; import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiLaravel, SiReact } from "react-icons/si";

// Placeholder images - you can drop your actual image paths here when ready!
const images = [
  "https://via.placeholder.com/600x600/ffffff/000000?text=Profile+1",
  "https://via.placeholder.com/600x600/e0e0e0/000000?text=Profile+2",
  "https://via.placeholder.com/600x600/c0c0c0/000000?text=Profile+3"
];

const educationData = [
  {
    title: "Preschool & Elementary",
    period: "Jun 5, 2008 - Mar 30, 2016",
    status: "Pending",
    desc: ["Blue Danube School Inc.", "Basic Education"],
  },
  {
    title: "High School & Senior High School",
    period: "Jun 5, 2016 - Jul 30, 2022",
    status: "Pending",
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
    category: "Front End",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "Next", "Vue", "Inertia"],
  },
  {
    category: "Styling & Design",
    skills: ["Tailwind", "CSS", "SVG", "Flutter"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "MySQL", "PostgreSQL", "Firebase", "PHP"],
  },
  {
    category: "Miscellaneous",
    skills: ["Git", "Fluent in English and Filipino", "APIs"],
  }
];

const projectsData = [
  {
    title: "Mining Auction System",
    description: "Real-time auction system handling $140M+ deals (Spearheaded, Developed)",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=comexchange.mn",
    icons: [<SiNextdotjs key="1"/>, <SiTypescript key="2"/>, <SiReact key="3"/>, <SiTailwindcss key="4"/>],
    isGithub: false
  },
  {
    title: "Multi-Agent Microservice",
    description: "AI agents collaborating through microservices (BSc Thesis)",
    linkText: "Github",
    linkUrl: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Thesis+Project",
    tooltip: "https://github.com/RedonaNova/ai-agents-microservices-thesis",
    icons: [<SiNextdotjs key="1"/>, <SiTailwindcss key="2"/>, <SiTypescript key="3"/>],
    isGithub: true
  },
  {
    title: "Crypto Trading Platform",
    description: "Mobile-first cryptocurrency exchange with live charts and order books.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=Crypto+App",
    icons: [<SiVuedotjs key="1"/>, <SiTailwindcss key="2"/>, <SiLaravel key="3"/>],
    isGithub: false
  },
  {
    title: "GOBI Deluxe Hotel & Resort",
    description: "Full-stack booking and reservation system for luxury hotel.",
    linkText: "Check Live Site",
    linkUrl: "#",
    image: "https://via.placeholder.com/800x500/0a0b14/1bd99b?text=GOBI+Deluxe+Hotel",
    icons: [<SiNextdotjs key="1"/>, <SiReact key="2"/>, <SiTailwindcss key="3"/>],
    isGithub: false
  }
];

const experienceData = [
  {
    title: "Frontend Developer",
    description: "Developed a social media management system for Ollopa Corporation, using Next.js, TypeScript, Tailwind, etc.",
    icon: <FaLaptopCode className="text-5xl md:text-6xl text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />,
    delay: "0s",
  },
  {
    title: "Fullstack Developer",
    description: "Developed a web-based student organization information system for the Office of Student Affairs and Services at Laguna State Polytechnic University (Thesis) using Laravel, MySQL, Vue, DOMPDF.",
    icon: <FaServer className="text-5xl md:text-6xl text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] z-10" />,
    delay: "-1.5s",
  },
  {
    title: "Vibecoder",
    description: "Been heavy on vibecoding recently, making clones of popular websites like Radio Garden (Ritmo) and Billboards Top 100 (Aux.).",
    icon: <FaLightbulb className="text-5xl md:text-6xl text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] z-10" />,
    delay: "-3s",
  },
  {
    title: "Mobile App Developer",
    description: "Some experience on mobile app development. Not much yet, though still exploring and building small projects.",
    icon: <FaMobileAlt className="text-5xl md:text-6xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />,
    delay: "-4.5s",
  }
];

export default function ProfessionalPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [showNav, setShowNav] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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
    <div className="flex-1 relative flex flex-col justify-center min-h-[85vh]">
      {/* Absolute background grid with a smooth fade-out to transparent toward the bottom */}
      <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none z-0 bg-grid [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]" />

      <section className="relative z-10 mx-auto w-full max-w-none px-8 md:px-24 lg:px-40 xl:px-64 pb-14 pt-16 md:pt-24">
        
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
              <p>Computer Science | Full-Stack Developer | Philippines</p>
            </div>

            <div className="flex items-center gap-6 mt-12! pt-6">
              <button className="rounded-full border border-[color:var(--accent)] text-[color:var(--accent)] px-8 py-3 font-mono text-sm hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300 flex items-center gap-2">
                VIEW CV <span>&gt;</span>
              </button>
              
              <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaFacebook size={16} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaInstagram size={16} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaYoutube size={16} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaLinkedin size={16} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[#0a0b14] transition duration-300">
                  <FaGithub size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image Circle */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div 
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center cursor-pointer transition-transform duration-300 active:scale-95"
              onClick={nextImage}
              title="Click to change image!"
            >
              <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="49" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeDasharray="60 10 4 12 100 20 2 30 15 50" opacity="0.9" />
                <circle cx="50" cy="50" r="47" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="4 25 1 10 6 40" opacity="0.5" />
              </svg>

              <div className="w-[90%] h-[90%] rounded-full bg-[#e7eaf6] relative overflow-hidden transition-opacity duration-300 border-4 border-[#0a0b14]" key={imgIndex}>
                  <img 
                    src={images[imgIndex]} 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 md:ml-12 lg:ml-24">
            <div className="flex items-center gap-4">
               <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">22</span>
               <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Age</span>
            </div>
            
            {/* hidden experience for now */}
            <div className="hidden md:flex items-center gap-4 hidden-until-experience">
               <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">0</span>
               <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Years of<br/>experience</span>
            </div>

            <div className="flex items-center gap-4">
               <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">20</span>
               <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Projects worked<br/>on</span>
            </div>

            <div className="flex items-center gap-4">
               <span className="text-6xl md:text-7xl font-bold font-mono tracking-tighter text-white">10</span>
               <span className="text-sm font-mono text-[color:var(--muted)] leading-tight">Projects<br/>Deployed</span>
            </div>
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
                            {lineIdx < edu.desc.length - 1 && <br/>}
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
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 text-center font-normal">
            Skills
          </h2>
          
          <div className="flex flex-col gap-10 w-full">
            {skillsData.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-2xl font-sans text-white/90">{category.category}</h3>
                <motion.div 
                  className="flex flex-wrap gap-4 md:gap-5"
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
                      className="px-6 py-3 bg-[#171e36] text-[color:var(--accent)] font-sans text-lg md:text-xl font-medium transition-colors hover:bg-[color:var(--accent)] hover:text-[#0a0b14] cursor-default"
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
                  className="flex flex-col bg-[#0b0e17] rounded-3xl border border-white/5 group shadow-2xl relative w-full origin-bottom"
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
              </motion.div>              </div>            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-20">
            <Link href="#">
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

      </section>

      {/* Floating Bottom Nav */}
      <AnimatePresence>
        {showNav && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-[#171e36]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
          >
            <Link href="/professional" className="px-6 py-2.5 rounded-full bg-[#3a4361]/60 text-[color:var(--accent)] font-mono font-bold text-sm tracking-wide shadow-sm">
              Professional
            </Link>
            <Link href="/personal" className="px-6 py-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/5 font-mono font-bold text-sm tracking-wide transition-all">
              Personal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
