"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", 
  "TensorFlow", "PyTorch", "AWS", "Azure", "Docker", "Kubernetes", 
  "PostgreSQL", "MongoDB", "Redis", "GraphQL"
];

export default function TechStack() {
  return (
    <div className="py-12 border-y border-border/50 bg-secondary/5 overflow-hidden">
      <div className="container-width mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Powered by Modern Technologies
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex gap-12 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-foreground/20 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  );
}
