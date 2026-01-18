"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  Lightbulb,
  Database,
  Shield,
  Cpu,
  Brain,
  Workflow,
  Bot,
  Wifi,
  Eye,
} from "lucide-react";

const BentoCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-secondary border border-border/50 p-5 rounded-2xl relative overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

const TechTag = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-[10px] font-medium text-foreground border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors cursor-default">
    <Icon size={12} />
    {label}
  </div>
);

export default function TeamExpertise() {
  return (
    <div id="team-expertise" className="section-padding scroll-mt-24">
      <div className="container-width">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Expertise that <span className="text-primary">delivers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Data & AI - Large Card (Slot 1) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <Brain size={200} />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-3">
                <Brain size={22} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">
                Data & AI
              </h4>
              <p className="text-muted-foreground text-sm mb-4 max-w-lg leading-relaxed grow">
                We harness data and artificial intelligence to drive intelligent
                decision-making, predictive insights, and scalable business
                outcomes.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <TechTag icon={Brain} label="Machine Learning" />
                <TechTag icon={Lightbulb} label="Generative AI" />
                <TechTag icon={Cpu} label="Predictive Modeling" />
                <TechTag icon={Database} label="Data Engineering" />
                <TechTag icon={PenTool} label="NLP" />
                <TechTag icon={Eye} label="Computer Vision" />
              </div>
            </div>
          </BentoCard>

          {/* Robotics & Automation - Tall Card (Slot 2) */}
          <BentoCard className="md:row-span-2 flex flex-col" delay={0.1}>
            <div className="absolute -bottom-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <Bot size={140} />
            </div>
            <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-3">
              <Bot size={22} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-foreground">
              Robotics & Automation
            </h4>
            <p className="text-muted-foreground text-sm mb-4 grow leading-relaxed">
              We design and deploy automation solutions that enhance efficiency,
              precision, and operational scalability across industries.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <TechTag icon={Bot} label="Industrial Robotics" />
              <TechTag icon={Cpu} label="RPA" />
              <TechTag icon={Workflow} label="Autonomous Systems" />
            </div>
          </BentoCard>

          {/* IoT - Standard Card (Slot 3) */}
          <BentoCard className="flex flex-col" delay={0.2}>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-2">
              <Wifi size={20} />
            </div>
            <h4 className="text-base font-bold mb-2 text-foreground">
              Internet of Things (IoT)
            </h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              We connect devices, systems, and environments to enable real-time
              monitoring and control.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <TechTag icon={Wifi} label="Connected Devices" />
              <TechTag icon={Cpu} label="Edge Computing" />
            </div>
          </BentoCard>

          {/* Cybersecurity - Standard Card (Slot 4) */}
          <BentoCard className="flex flex-col" delay={0.3}>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-2">
              <Shield size={20} />
            </div>
            <h4 className="text-base font-bold mb-2 text-foreground">
              Cybersecurity
            </h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              We protect digital assets through robust security frameworks and
              proactive threat detection.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <TechTag icon={Shield} label="Network Security" />
              <TechTag icon={Lock} label="Risk & Compliance" />
            </div>
          </BentoCard>

          {/* Engineering Excellence - Standard Card (Slot 5) */}
          <BentoCard className="flex flex-col" delay={0.4}>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-2">
              <Code2 size={20} />
            </div>
            <h4 className="text-base font-bold mb-2 text-foreground">
              Engineering Excellence
            </h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              We deliver high-quality, scalable solutions through best-in-class
              engineering practices.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <TechTag icon={Code2} label="Architecture" />
              <TechTag icon={Workflow} label="DevOps" />
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// Helper component for lock icon
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
