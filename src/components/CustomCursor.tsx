'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Instant latency-free cursor head
  const headX = mouseX;
  const headY = mouseY;

  // Create a snappy, light trailing effect (comet tail)
  const t1x = useSpring(mouseX, { stiffness: 800, damping: 35 });
  const t1y = useSpring(mouseY, { stiffness: 800, damping: 35 });
  const t2x = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const t2y = useSpring(mouseY, { stiffness: 400, damping: 25 });
  const t3x = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const t3y = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const t4x = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const t4y = useSpring(mouseY, { stiffness: 100, damping: 15 });
  const t5x = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const t5y = useSpring(mouseY, { stiffness: 50, damping: 10 });
  const t6x = useSpring(mouseX, { stiffness: 25, damping: 10 });
  const t6y = useSpring(mouseY, { stiffness: 25, damping: 10 });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s", zIndex: 10000 }}
    >
      {!isHovering && (
        <svg className="fixed inset-0 w-full h-full overflow-visible" style={{ zIndex: -1 }}>
          <motion.line x1={headX} y1={headY} x2={t1x} y2={t1y} stroke="rgba(39, 243, 179, 0.9)" strokeWidth="10" strokeLinecap="round" />
          <motion.line x1={t1x} y1={t1y} x2={t2x} y2={t2y} stroke="rgba(39, 243, 179, 0.7)" strokeWidth="8" strokeLinecap="round" />
          <motion.line x1={t2x} y1={t2y} x2={t3x} y2={t3y} stroke="rgba(39, 243, 179, 0.5)" strokeWidth="6" strokeLinecap="round" />
          <motion.line x1={t3x} y1={t3y} x2={t4x} y2={t4y} stroke="rgba(39, 243, 179, 0.3)" strokeWidth="4" strokeLinecap="round" />
          <motion.line x1={t4x} y1={t4y} x2={t5x} y2={t5y} stroke="rgba(39, 243, 179, 0.15)" strokeWidth="2" strokeLinecap="round" />
          <motion.line x1={t5x} y1={t5y} x2={t6x} y2={t6y} stroke="rgba(39, 243, 179, 0.05)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )}
      
      {/* Comet Head & Hover Target */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full"
        style={{ 
          x: headX, 
          y: headY, 
          translateX: "-50%", 
          translateY: "-50%",
          backgroundColor: isHovering ? "rgba(39, 243, 179, 0.15)" : "var(--accent)",
          border: isHovering ? "1px solid var(--accent)" : "none",
          willChange: "transform",
        }}
        animate={{
          width: isHovering ? 56 : 14,
          height: isHovering ? 56 : 14,
          boxShadow: isHovering 
            ? "0 0 15px rgba(39, 243, 179, 0.6), inset 0 0 10px rgba(39, 243, 179, 0.4)" 
            : "0 0 10px 1px var(--accent)"
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        <motion.div 
          className="rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
          animate={{
            width: isHovering ? 8 : 0,
            height: isHovering ? 8 : 0,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </div>
  );
}