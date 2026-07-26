"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";

export default function GifWall() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  // 6 high-quality, lightweight transparent/pixel art aesthetic GIFs
  const gifs = [
    "https://media.giphy.com/media/xT0xezQGU5xCDSK3dQ/giphy.gif", // Space galaxy
    "https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif", // Flying jet
    "https://media.giphy.com/media/l0ExkA1PrvA33uNoc/giphy.gif", // Retro running character
    "https://media.giphy.com/media/l0ExdHfRKRUsY4G7S/giphy.gif", // Anime girl waving
    "https://media.giphy.com/media/3o7qE4opCd6f1NJeuY/giphy.gif", // Floating abstract cube
    "https://media.giphy.com/media/l41lI4bYlP5Cgxgqc/giphy.gif"  // Spinning game item
  ];

  return (
    <article className={`w-full border border-zinc-800/80 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col h-[270px] ${isLightMode ? "bg-[#f4f7fb]" : "bg-[#0b0c10]"}`}>
      {/* Title Bar: Purple/Indigo Gradient Header with star symbols */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-2 px-4 flex items-center justify-center border-b border-zinc-800/50">
        <span className="text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1">
          ★ dom's gif wall ★
        </span>
      </div>

      {/* Grid of 6 GIFs (3 columns, 2 rows) */}
      <div className="grid grid-cols-3 gap-3 p-4 flex-1 items-center justify-center">
        {gifs.map((gif, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.12, 
              rotate: [0, -3, 3, -2, 2, 0], 
              y: -5,
              transition: { duration: 0.3 } 
            }}
            className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800/80 bg-black/40 flex items-center justify-center cursor-pointer shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={gif} 
              alt={`GIF placeholder ${index + 1}`} 
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </article>
  );
}
