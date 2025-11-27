"use client";

import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    title: "Healthcare",
    description: "Revolutionizing patient care with AI-driven diagnostics, secure telemedicine platforms, and electronic health record systems. We build HIPAA-compliant solutions that improve patient outcomes and streamline clinical workflows.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 2,
    title: "Fintech",
    description: "Building secure, high-frequency trading systems, next-gen banking infrastructure, and blockchain-based payment solutions. Our platforms handle millions of transactions with enterprise-grade security and compliance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Manufacturing",
    description: "Implementing Industry 4.0 solutions with IoT sensors, predictive maintenance algorithms, and real-time production monitoring. We optimize factory operations and reduce downtime through intelligent automation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Creating immersive shopping experiences with personalized recommendation engines, dynamic pricing systems, and omnichannel inventory management. We help retailers increase conversion rates and customer lifetime value.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    id: 5,
    title: "Logistics",
    description: "Optimizing supply chains with real-time tracking, automated route planning, and warehouse management systems. Our solutions reduce delivery times and operational costs while improving transparency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 6,
    title: "Education",
    description: "Transforming learning with smart classrooms, personalized e-learning platforms, and student performance analytics. We create engaging educational experiences that adapt to individual learning styles.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 7,
    title: "Smart Home",
    description: "Enabling intelligent living with integrated home automation, energy management systems, and IoT-connected devices. Our solutions provide comfort, security, and energy efficiency for modern homes.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 8,
    title: "Transportation",
    description: "Revolutionizing mobility with intelligent transportation systems, fleet management solutions, and autonomous vehicle technologies. We optimize routes, reduce emissions, and enhance passenger safety.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2500&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
];

export default function IndustryGrid() {
  return (
    <section id="industry" className="py-16 bg-background overflow-hidden">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Every Sector
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to manufacturing, our tailored solutions drive efficiency and innovation across the board.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer ${industry.colSpan}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-start">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{industry.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {industry.description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
