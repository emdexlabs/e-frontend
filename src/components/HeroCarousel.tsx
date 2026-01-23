"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Connected World / Real World
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Circuit / Intelligent Systems
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // 8 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with subtle scale */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
          >
            {/* Cinematic Dark Gradient Overlay for Maximum Text Pop + Image Visibility */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container - Positioned using golden ratio (~38% from top) */}
      <div className="relative h-full container mx-auto px-6 md:px-12 lg:px-16 flex items-center">
        <div className="max-w-4xl pt-12 md:pt-0">
          {/* Title with White Text for High Contrast on Dark Overlay */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-white"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            <span className="opacity-95">Intelligent Systems for the </span>
            <span className="text-[#00f5ff] block mt-1 drop-shadow-md">
              Digital Future
            </span>
          </motion.h1>

          {/* Subtext in Off-White/Silver for Readability */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl leading-relaxed text-gray-200"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            We help organizations transform complex challenges into reliable,
            intelligent solutions — combining AI, automation, and robotics to
            deliver real outcomes across digital and physical environments.
          </motion.p>
        </div>
      </div>

      {/* Minimal Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current
                ? "w-12 bg-primary"
                : "w-4 bg-border hover:bg-primary/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
