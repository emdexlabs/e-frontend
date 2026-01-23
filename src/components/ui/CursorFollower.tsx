'use client';

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // Center the 500px glow
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: 0.6 }} // Adjust for visibility preference
    >
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.08),transparent_50%)] blur-3xl"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </motion.div>
  );
}
