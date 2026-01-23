"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative Elements */}

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block"
          >
            Who we are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Building solutions that{" "}
            <span className="text-primary">matters</span>
          </motion.h2>
        </div>

        {/* Mission & Vision - Compact Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:border-primary/20 transition-colors relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={100} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To engineer the intelligent backbone of the future by delivering
                scalable, secure, and transformative software solutions that
                redefine industry standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:border-primary/20 transition-colors relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={100} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To see a world seamlessly powered by autonomous innovation,
                where our technology serves as the catalyst for global
                advancement and human potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
