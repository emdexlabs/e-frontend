'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utils folder, if not I'll create a simple helper or inline it.

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function MagneticButton({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseSafe = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-6 py-3 rounded-[4px] font-medium transition-colors duration-300 ease-out select-none cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-cyan-400", // Using cyan-400 as a brighter hover for the Electric Cyan
    secondary: "bg-muted text-white hover:bg-zinc-800",
    outline: "bg-transparent border border-muted text-foreground hover:border-primary/50 hover:text-primary"
  };

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)} // I will double check cn availability, or replace with template literal if needed.
      onMouseMove={handleMouseSafe}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      {...props as any} // Framer-motion types compat
    >
      {children}
    </motion.button>
  );
}
