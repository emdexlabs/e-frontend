"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    title: "Robotics & Automation",
    subtitle: "Engineering the Future",
    description: "Pioneering the future of autonomous systems and industrial robotics with precision and intelligence.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    title: "Artificial Intelligence",
    subtitle: "Cognitive Computing",
    description: "Leveraging Machine Learning to solve complex business challenges and unlock new possibilities.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    title: "Cloud Computing",
    subtitle: "Scalable Infrastructure",
    description: "Building resilient, secure, and efficient cloud ecosystems for the modern enterprise.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    title: "Cyber Security",
    subtitle: "Digital Fortress",
    description: "Protecting your digital assets with advanced security protocols and real-time threat detection.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    title: "IoT Solutions",
    subtitle: "Connected World",
    description: "Connecting the world through smart Internet of Things devices that sense, analyze, and act.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax-like scale effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Gradient Overlay for Text Readability - Light Theme Friendly */}
            <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/50 to-transparent" />
          </motion.div>

          <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
            <div className="max-w-3xl space-y-6">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium tracking-wide text-sm uppercase"
              >
                {slides[current].subtitle}
              </motion.span>
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
              >
                {slides[current].title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <button className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Explore Solutions
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom-Right Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-white/95 border-2 border-[#6D8196] hover:bg-[#6D8196] hover:text-white transition-all shadow-lg hover:shadow-xl text-[#4A4A4A] backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-[#6D8196] border-2 border-[#6D8196] hover:bg-[#6D8196]/90 text-white transition-all shadow-lg hover:shadow-xl backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current ? "w-12 bg-[#6D8196]" : "w-4 bg-[#CBCBCB] hover:bg-[#6D8196]/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
