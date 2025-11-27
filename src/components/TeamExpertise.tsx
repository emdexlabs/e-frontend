"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, BarChart3, Lightbulb, Database, Globe, Shield, Cpu, Brain, Server, Layers, Workflow, ArrowUpRight } from "lucide-react";

const BentoCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white border border-[#CBCBCB] p-5 rounded-2xl relative overflow-hidden group hover:border-[#6D8196] hover:shadow-lg hover:shadow-[#6D8196]/10 transition-all duration-300 shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

const TechTag = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FEEEE3]/50 text-[10px] font-medium text-[#4A4A4A] border border-transparent hover:border-[#6D8196]/20 hover:bg-[#6D8196]/5 hover:text-[#6D8196] transition-colors cursor-default">
    <Icon size={12} />
    {label}
  </div>
);

export default function TeamExpertise() {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block"
        >
          Our Capabilities
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Expertise that <span className="text-primary">Delivers</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-base"
        >
          We blend creative vision with engineering excellence to build digital products that define the future.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
        {/* Engineering - Large Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-[#6D8196]/5 to-transparent">
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
            <Code2 size={200} />
          </div>
          <div className="relative z-10">
            <div className="w-11 h-11 bg-[#6D8196]/10 text-[#6D8196] rounded-xl flex items-center justify-center mb-3">
              <Code2 size={22} />
            </div>
            <h4 className="text-xl font-bold mb-2">Engineering Excellence</h4>
            <p className="text-muted-foreground text-sm mb-4 max-w-md leading-relaxed">
              We build robust, scalable, and high-performance applications using cutting-edge technologies. From complex microservices to responsive frontends, we engineer for the future.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechTag icon={Globe} label="Cloud Architecture" />
              <TechTag icon={Database} label="Backend Systems" />
              <TechTag icon={Layers} label="Full-Stack" />
              <TechTag icon={Workflow} label="DevOps &amp; CI/CD" />
              <TechTag icon={Server} label="Microservices" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all cursor-pointer">
            Explore Engineering <ArrowUpRight size={16} />
          </div>
        </BentoCard>

        {/* AI & Data - Tall Card */}
        <BentoCard className="md:row-span-2 flex flex-col bg-gradient-to-br from-purple-500/5 to-transparent" delay={0.1}>
          <div className="absolute -bottom-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
            <Brain size={140} />
          </div>
          <div className="w-11 h-11 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center mb-3">
            <BarChart3 size={22} />
          </div>
          <h4 className="text-lg font-bold mb-2">Data & AI</h4>
          <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
            Unlock the power of your data with advanced analytics and machine learning models that drive intelligent decision-making.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <TechTag icon={Brain} label="Machine Learning" />
            <TechTag icon={Cpu} label="Predictive Modeling" />
            <TechTag icon={BarChart3} label="Big Data" />
            <TechTag icon={Lightbulb} label="NLP" />
          </div>
        </BentoCard>

        {/* Security - Standard Card */}
        <BentoCard className="flex flex-col bg-gradient-to-br from-emerald-500/5 to-transparent" delay={0.2}>
          <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-lg flex items-center justify-center mb-2">
            <Shield size={20} />
          </div>
          <h4 className="text-base font-bold mb-2">Security</h4>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            Defense-in-depth strategies to protect your assets and data.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            <TechTag icon={Shield} label="Cyber Security" />
            <TechTag icon={Lock} label="Compliance" />
          </div>
        </BentoCard>

        {/* Design - Standard Card */}
        <BentoCard className="flex flex-col bg-gradient-to-br from-pink-500/5 to-transparent" delay={0.3}>
          <div className="w-10 h-10 bg-pink-500/10 text-pink-600 rounded-lg flex items-center justify-center mb-2">
            <PenTool size={20} />
          </div>
          <h4 className="text-base font-bold mb-2">Design</h4>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            Crafting intuitive and beautiful user experiences.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            <TechTag icon={Layers} label="UI/UX" />
            <TechTag icon={PenTool} label="Design Systems" />
          </div>
        </BentoCard>

        {/* Strategy - Standard Card */}
        <BentoCard className="flex flex-col bg-gradient-to-br from-orange-500/5 to-transparent" delay={0.4}>
          <div className="w-10 h-10 bg-orange-500/10 text-orange-600 rounded-lg flex items-center justify-center mb-2">
            <Lightbulb size={20} />
          </div>
          <h4 className="text-base font-bold mb-2">Strategy</h4>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            Guiding your digital transformation journey.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            <TechTag icon={Globe} label="Transformation" />
            <TechTag icon={Shield} label="Consulting" />
          </div>
        </BentoCard>
      </div>
    </div>
  );
}

// Helper component for the lock icon which was missing in imports
const Lock = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
