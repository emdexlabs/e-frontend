"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Box, ArrowRight } from "lucide-react";
import TechStack from "./ui/TechStack";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    current: "Predictive analytics, NLP chatbots, and computer vision systems for quality control.",
    future: "Generative AI for content creation, autonomous decision-making agents, and emotional AI interfaces.",
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    current: "Industrial arms, AGVs for logistics, and RPA (Robotic Process Automation) for workflows.",
    future: "Humanoid robots for service industries, swarm robotics for construction, and soft robotics.",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    current: "Cloud migration, serverless architecture, and hybrid cloud management.",
    future: "Quantum cloud computing services, edge computing optimization, and green cloud solutions.",
  },
  {
    id: "iot",
    title: "Internet of Things (IoT)",
    current: "Smart home devices, industrial sensors, and fleet tracking systems.",
    future: "5G-enabled massive IoT, energy-harvesting sensors, and AIoT (AI + IoT) integration.",
  },
  {
    id: "security",
    title: "Cyber Security",
    current: "Penetration testing, SOC services, and identity management solutions.",
    future: "AI-driven threat detection, post-quantum cryptography, and decentralized identity systems.",
  },
  {
    id: "arvr",
    title: "AR / VR Solutions",
    current: "Virtual training simulations, AR maintenance guides, and virtual tours.",
    future: "Mixed reality collaboration workspaces, haptic feedback suits, and brain-computer interface gaming.",
  },
];

export default function ServicesAccordion() {
  const [expanded, setExpanded] = useState<string | null>("ai");

  return (
    <section id="innovation" className="bg-background relative">
      <div className="section-padding container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Innovation Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Tomorrow&apos;s Tech
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our cutting-edge services and get a glimpse into the future technologies we are developing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Menu List */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setExpanded(service.id)}
                className={cn(
                  "w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group",
                  expanded === service.id 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-lg font-semibold">{service.title}</span>
                {expanded === service.id && <ArrowRight size={20} />}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {expanded && (
                <motion.div
                  key={expanded}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 md:p-10 rounded-3xl h-full"
                >
                  {services.map((s) => {
                    if (s.id !== expanded) return null;
                    return (
                      <div key={s.id} className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-bold mb-2 text-primary">{s.title}</h3>
                          <p className="text-muted-foreground">Comprehensive solutions for the modern era.</p>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm">
                            <div className="flex items-center gap-3 mb-3 text-primary">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Box size={24} />
                              </div>
                              <h4 className="text-xl font-bold">Current Offerings</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-14">
                              {s.current}
                            </p>
                          </div>

                          <div className="bg-linear-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-accent/10">
                            <div className="flex items-center gap-3 mb-3 text-accent">
                              <div className="p-2 bg-accent/10 rounded-lg">
                                <Zap size={24} />
                              </div>
                              <h4 className="text-xl font-bold">Future Innovations</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-14">
                              {s.future}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <TechStack />
    </section>
  );
}
