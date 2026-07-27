"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";
import { 
  PiGraduationCap, 
  PiBicycle, 
  PiGuitar, 
  PiTelevision, 
  PiBarbell, 
  PiAirplaneTilt 
} from "react-icons/pi";

interface IconItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  height: number;
  delay: number;
}

function HangingItem({ item, isLightMode }: { item: IconItem; isLightMode: boolean }) {
  // Rotate controls the swing of the entire container (string + icon) from the top pivot
  const rotate = useMotionValue(0);
  const rotateSpring = useSpring(rotate, { stiffness: 80, damping: 10 });
  const Icon = item.icon;

  return (
    <motion.div 
      style={{ 
        rotate: rotateSpring, 
        transformOrigin: "top center",
      }}
      className="flex flex-col items-center relative group"
    >
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
            duration: 2 + (item.delay * 3), 
            repeat: Infinity, 
            ease: "linear",
            delay: item.delay
          }}
        />
      </div>
      
      {/* The icon container - We use onPan to swing the entire assembly without disconnecting */}
      <motion.div 
        onPan={(event, info) => {
          // Horizontal drag distance offset
          const maxDrag = 100;
          const maxRotation = 35;
          // Invert the angle so dragging right swings it right (counter-clockwise rotation at the top pivot)
          let angle = -(info.offset.x / maxDrag) * maxRotation;
          
          // Clamp rotation to avoid unnatural angles
          angle = Math.max(-maxRotation, Math.min(maxRotation, angle));
          rotate.set(angle);
        }}
        onPanEnd={() => {
          rotate.set(0); // Spring back smoothly to vertical
        }}
        whileHover={{ scale: 1.1 }}
        style={{ touchAction: "none", userSelect: "none" }}
        draggable={false}
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] border border-zinc-700/60 shadow-lg flex justify-center items-center backdrop-blur-sm z-10 transition-colors cursor-grab active:cursor-grabbing
          ${isLightMode ? "bg-white text-zinc-700 hover:text-blue-500" : "bg-[#181a20] text-zinc-300 hover:text-blue-400"}
        `}
      >
        <Icon size={18} className="opacity-80 group-hover:opacity-100 pointer-events-none select-none" />
      </motion.div>
    </motion.div>
  );
}

export default function HangingIcons() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const icons: IconItem[] = [
    { icon: PiGraduationCap, height: 80, delay: 0 },
    { icon: PiBicycle, height: 40, delay: 0.2 },
    { icon: PiGuitar, height: 120, delay: 0.4 },
    { icon: PiTelevision, height: 70, delay: 0.6 },
    { icon: PiBarbell, height: 100, delay: 0.8 },
    { icon: PiAirplaneTilt, height: 50, delay: 1.0 },
  ];

  return (
    <article className={`w-full border border-zinc-800/80 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center h-[270px] ${isLightMode ? "bg-[#f4f7fb]" : "bg-[#0b0c10]"}`}>
      {/* Background dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)',
          maskImage: 'radial-gradient(circle, black 40%, transparent 85%)'
        }}
      />
      
      {/* Top horizontal bar with moving blue light */}
      <div className="absolute top-[20%] left-[8%] right-[8%] h-[1px] bg-zinc-700/80 overflow-hidden">
        <motion.div 
          className="absolute top-0 h-full w-[65px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[0.5px]"
          animate={{ left: ['-65px', '100%'] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      
      {/* Hanging items */}
      <div className="absolute top-[20%] left-[8%] right-[8%] flex justify-between px-1">
        {icons.map((item, i) => (
          <HangingItem key={i} item={item} isLightMode={isLightMode} />
        ))}
      </div>
    </article>
  );
}
