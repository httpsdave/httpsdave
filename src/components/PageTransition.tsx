"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // No overlay title: keep transition visual only

  // Split screen into 5 horizontal blocks for the wipe effect
  const columns = 5;

  return (
    <div className="relative w-full h-full min-h-screen flex-1 flex flex-col">
      <div className="fixed inset-0 z-50 pointer-events-none flex">
        {Array.from({ length: columns }).map((_, i) => (
          <motion.div
            key={`${pathname}-${i}`}
            className="h-full flex-1 bg-[var(--theme-green,#006400)] border-r border-transparent"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
              transformOrigin: i % 2 === 0 ? "top" : "bottom",
            }}
            style={{ originY: i % 2 === 0 ? 0 : 1 }}
          />
        ))}
        
      </div>

      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}