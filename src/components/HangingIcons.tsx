"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";
import { 
  PiGraduationCap, 
  PiPianoKeys, 
  PiGuitar, 
  PiBookOpenText, 
  PiBarbell, 
  PiAirplaneTilt 
} from "react-icons/pi";

export default function HangingIcons() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const icons = [
    { icon: PiGraduationCap, height: 80, delay: 0 },
    { icon: PiPianoKeys, height: 40, delay: 0.2 },
    { icon: PiGuitar, height: 120, delay: 0.4 },
    { icon: PiBookOpenText, height: 70, delay: 0.6 },
    { icon: PiBarbell, height: 100, delay: 0.8 },
    { icon: PiAirplaneTilt, height: 50, delay: 1.0 },
  ];

  return (
    <article className={`w-full border border-zinc-800/80 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center h-[250px] ${isLightMode ? "bg-[#f4f7fb]" : "bg-[#14151a]"}`}>
      {/* Background dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Top horizontal bar */}
      <div className="absolute top-[20%] left-[8%] right-[8%] h-[1px] bg-zinc-700/60"></div>
      
      {/* Hanging items */}
      <div className="absolute top-[20%] left-[8%] right-[8%] flex justify-between px-1">
        {icons.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center relative group">
              {/* Attachment dot */}
              <div className="absolute top-0 w-[6px] h-[6px] rounded-full bg-zinc-500 transform -translate-y-1/2 z-20"></div>

              {/* The string/wire */}
              <div 
                className="w-[1px] bg-zinc-700/50 relative overflow-hidden transition-all duration-300"
                style={{ height: item.height }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-transparent via-blue-400/80 to-transparent"
                  animate={{ top: ['-40px', `${item.height}px`] }}
                  transition={{ 
                    duration: 2 + (i % 3), 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: item.delay
                  }}
                />
              </div>
              
              {/* The icon container */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -4 }}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] border border-zinc-700/60 shadow-lg flex justify-center items-center backdrop-blur-sm z-10 transition-colors cursor-pointer
                  ${isLightMode ? "bg-white text-zinc-700 hover:text-blue-500" : "bg-[#181a20] text-zinc-300 hover:text-blue-400"}
                `}
              >
                <Icon size={18} className="opacity-80 group-hover:opacity-100" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
