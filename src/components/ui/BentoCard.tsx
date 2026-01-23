'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function BentoCard({ children, className, label }: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card border-gradient-precise", // 8px radius, gradient border
        "backdrop-blur-sm transition-all duration-300",
        // Removed generic shadow/lift, relying on internal glow
        className
      )}
      // Removed whileHover translateY for strict "Anti-Gravity" adherence, or keeping it extremely subtle if needed. 
      // Guidelines say "lift slightly", so we keep a very subtle lift.
      whileHover={{ translateY: -2 }} 
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Label Tag - Precise Specs */}
      {label && (
        <div className="absolute left-4 top-4 z-20">
          <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase opacity-70">
            // {label}
          </span>
        </div>
      )}

      {/* Interactable Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Inner Glow Gradient on Hover - "Atmospheric Depth" */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.08),transparent_70%)]", // Increased blur/spread, low opacity
          "group-hover:opacity-100"
        )} 
      />
    </motion.div>
  );
}
