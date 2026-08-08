'use client';

import { useEffect, useState, useRef } from 'react';

const TRAIL_LENGTH = 20;

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Directly track mouse positioning using React refs for 60fps mutability
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
  
  // Element references for native DOM updating
  const headRef = useRef<HTMLDivElement>(null);
  const hoverTargetRef = useRef<HTMLDivElement>(null);
  const trailSvgRef = useRef<SVGSVGElement>(null);
  const pathSegments = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isCoarse || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setMounted(true);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Hide cursor if it's outside the window bounds
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth - 1 ||
        e.clientY >= window.innerHeight - 1
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
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
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

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

      for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
        const segment = pathSegments.current[i];
        if (segment) {
          const scale = 1 - (i / TRAIL_LENGTH) * 0.5; // Scale down gradually
          segment.setAttribute("transform", `translate(${trail.current[i].x}, ${trail.current[i].y}) scale(${scale})`);
          
          const baseOpacity = Math.max(0, 0.8 - i * 0.04);
          segment.setAttribute("opacity", baseOpacity.toString());
          segment.style.opacity = baseOpacity.toString();
        }
      }

      const dx = mouse.current.x - trail.current[TRAIL_LENGTH - 1].x;
      const dy = mouse.current.y - trail.current[TRAIL_LENGTH - 1].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (trailSvgRef.current) {
        const trailOpacityMultiplier = Math.min(1, Math.max(0, (distance - 1) / 5));
        if (distance < 1) {
          trailSvgRef.current.style.visibility = "hidden";
        } else {
          trailSvgRef.current.style.visibility = "visible";
          trailSvgRef.current.style.opacity = trailOpacityMultiplier.toString();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isMobile]);

  if (!mounted || isMobile) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0"
      style={{ opacity: isVisible && !isCursorHidden ? 1 : 0, transition: "opacity 0.3s", zIndex: 10000 }}
    >
      {/* Trail of cursor shapes */}
      <svg 
        ref={trailSvgRef}
        className="fixed inset-0 w-full h-full overflow-visible pointer-events-none" 
        style={{ 
          opacity: isHovering || isSelecting ? 0 : 1, 
          transition: "opacity 0.2s",
        }}
      >
        {Array.from({ length: TRAIL_LENGTH - 1 }).map((_, i) => {
          const opacity = Math.max(0, 0.8 - i * 0.04);
          return (
            <path
              key={i}
              ref={(el) => { if (el) pathSegments.current[i] = el; }}
              d="M0,0 L4,16 L6,6 L16,4 Z"
              fill="var(--accent)"
              opacity={opacity}
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

      {/* Core Cursor Head */}
      <div
        ref={headRef}
        className="fixed top-0 left-0"
        style={{ 
          backgroundColor: isHovering || isSelecting ? "var(--accent)" : "transparent",
          borderRadius: isHovering || isSelecting ? "9999px" : "0px",
          width: isHovering ? 8 : isSelecting ? 4 : 24,
          height: isHovering ? 8 : isSelecting ? 22 : 24,
          transition: "width 0.2s, height 0.2s, background-color 0.2s, border-radius 0.2s",
          willChange: "transform"
        }}
      >
        {!isHovering && !isSelecting && (
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="var(--accent)"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
          >
            <path d="M0,0 L4,16 L6,6 L16,4 Z" />
          </svg>
        )}
      </div>
    </div>
  );
}