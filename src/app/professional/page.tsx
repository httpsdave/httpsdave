"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

// Placeholder images - you can drop your actual image paths here when ready!
const images = [
  "https://via.placeholder.com/600x600/ffffff/000000?text=Profile+1",
  "https://via.placeholder.com/600x600/e0e0e0/000000?text=Profile+2",
  "https://via.placeholder.com/600x600/c0c0c0/000000?text=Profile+3"
];

export default function ProfessionalPage() {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-grid flex-1 relative flex flex-col justify-center min-h-[85vh]">
      <section className="mx-auto w-full max-w-none px-8 md:px-24 lg:px-40 xl:px-64 pb-14 pt-16 md:pt-24 z-10">
        
        {/* Main Hero Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <span className="font-mono text-sm tracking-widest text-[#e7eaf6] mb-2 uppercase">
              Full-Stack Developer
            </span>
            <div className="flex flex-col leading-none">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium font-mono tracking-tight text-white mb-2">
                Hello I'm
              </h1>
              <div className="group w-fit flex flex-col cursor-default">
                <h1 className="relative px-2 -mx-2 overflow-hidden w-fit text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium font-mono tracking-tight text-[color:var(--accent)] transition-colors duration-500 drop-shadow-md group-hover:text-[#0a0b14] mb-2">
                  <span className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0 transition-transform duration-500 ease-out z-0 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Dave Dominic</span>
                </h1>
                <h1 className="relative px-2 -mx-2 overflow-hidden w-fit text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium font-mono tracking-tight text-[color:var(--accent)] transition-colors duration-500 drop-shadow-md group-hover:text-[#0a0b14]">
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
              {/* Rotating dashed ring built with SVG for segmented perfection */}
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
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 md:ml-12 lg:ml-24">
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

      </section>
    </div>
  );
}
