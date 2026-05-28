"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSound } from "@/components/SoundContext";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { playSound } = useSound();

  useEffect(() => {
    playSound("transition");
  }, [pathname, playSound]);

  // Split screen into 5 horizontal blocks for the wipe effect
  const columns = 5;

  return (
    <div className="relative w-full h-full min-h-screen flex-1 flex flex-col">
      <div className="fixed inset-0 z-50 pointer-events-none flex">
        {Array.from({ length: columns }).map((_, i) => (
          <motion.div
            key={`${pathname}-${i}`}
            className="h-full flex-1 bg-[var(--theme-green,#006400)] border-r border-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            exit={{ scaleY: [0, 1] }}
            transition={{
              duration: 0.9,
              times: [0, 0.35, 0.65, 1],
              ease: "easeInOut",
              delay: i * 0.08,
            }}
            style={{ originY: i % 2 === 0 ? 0 : 1 }}
          />
        ))}
      </div>

      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}