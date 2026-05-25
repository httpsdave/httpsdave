'use client';

import { useEffect, useState, useRef } from 'react';

const TRAIL_LENGTH = 20;

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);

  // Directly track mouse positioning using React refs for 60fps mutability
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
  
  // Element references for native DOM updating
  const headRef = useRef<HTMLDivElement>(null);
  const hoverTargetRef = useRef<HTMLDivElement>(null);
  const pathSegments = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const clickable = target?.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!clickable);

      const selectTarget = target?.closest('[data-cursor-select="true"]');
      setIsSelecting(!!selectTarget);

      const hideCustom = !!(target && target.closest('[data-hide-custom-cursor="true"]'));
      setIsCursorHidden(hideCustom);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const render = () => {
      const followSpeed = 0.5;

      // Make the trail array elegantly chase the cursor node by node
      trail.current[0].x += (mouse.current.x - trail.current[0].x) * followSpeed;
      trail.current[0].y += (mouse.current.y - trail.current[0].y) * followSpeed;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * followSpeed;
        trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * followSpeed;
      }

      // Update Native DOM without forcing React to repeatedly re-render
      if (headRef.current) {
        headRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }
      if (hoverTargetRef.current) {
        hoverTargetRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }

      // Generate a perfectly smooth Bezier spline by connecting midpoints, removing "polygonal" jagged edges
      for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
        const p1 = trail.current[i];
        const p2 = trail.current[i + 1];
        const p0 = i === 0 ? mouse.current : trail.current[i - 1];
        
        let d = "";
        if (i === 0) {
          // Connect actual mouse position gracefully into the curve
          d = `M ${mouse.current.x} ${mouse.current.y} Q ${p1.x} ${p1.y} ${(p1.x + p2.x) / 2} ${(p1.y + p2.y) / 2}`;
        } else {
          // Trace through quadratic curves over midpoints
          const startX = (p0.x + p1.x) / 2;
          const startY = (p0.y + p1.y) / 2;
          const endX = (p1.x + p2.x) / 2;
          const endY = (p1.y + p2.y) / 2;
          d = `M ${startX} ${startY} Q ${p1.x} ${p1.y} ${endX} ${endY}`;
        }
        
        const segment = pathSegments.current[i];
        if (segment) {
          segment.setAttribute("d", d);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0"
      style={{ opacity: isVisible && !isCursorHidden ? 1 : 0, transition: "opacity 0.3s", zIndex: 10000 }}
    >
      {/* Smooth bezier trailing comet tail */}
      <svg className="fixed inset-0 w-full h-full overflow-visible" style={{ opacity: isHovering || isSelecting ? 0 : 1, transition: "opacity 0.2s" }}>
        {Array.from({ length: TRAIL_LENGTH - 1 }).map((_, i) => {
          const width = Math.max(1, 10 - i * 0.5); 
          const opacity = Math.max(0, 0.8 - i * 0.04);
          return (
            <path
              key={i}
              ref={(el) => { if (el) pathSegments.current[i] = el; }}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={width}
              strokeOpacity={opacity}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      
      {/* Hover Target Envelope */}
      <div
        ref={hoverTargetRef}
        className="fixed top-0 left-0 rounded-full"
        style={{ 
          backgroundColor: isHovering ? "rgba(39, 243, 179, 0.15)" : isSelecting ? "rgba(39, 243, 179, 0.06)" : "transparent",
          border: isHovering || isSelecting ? "1px solid var(--accent)" : "none",
          width: isHovering ? 56 : isSelecting ? 44 : 14,
          height: isHovering ? 56 : isSelecting ? 44 : 14,
          transition: "width 0.2s, height 0.2s, background-color 0.2s, border 0.2s",
          willChange: "transform",
        }}
      />

      {/* Core Comet Cursor Head (No Glow) */}
      <div
        ref={headRef}
        className="fixed top-0 left-0 rounded-full"
        style={{ 
          backgroundColor: "var(--accent)",
          width: isHovering ? 8 : isSelecting ? 4 : 14,
          height: isHovering ? 8 : isSelecting ? 22 : 14,
          transition: "width 0.2s, height 0.2s",
          willChange: "transform"
        }}
      />
    </div>
  );
}