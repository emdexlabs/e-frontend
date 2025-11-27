"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Sending email to embdex@gmail.com", formData);
    window.location.href = `mailto:embdex@gmail.com?subject=Inquiry from ${formData.name} (${formData.company})&body=${formData.details}`;
    
    setStatus("success");
    setFormData({ name: "", company: "", details: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#FEEEE3] via-white to-[#FEEEE3] py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#6D8196]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FEEEE3]/50 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,74,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,74,74,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6D8196]/10 border border-[#6D8196]/20 mb-6"
            >
              <Sparkles size={16} className="text-[#6D8196]" />
              <span className="text-[#6D8196] font-semibold text-sm">Let&apos;s Connect</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#4A4A4A]">
              Ready to Build <br />
              <span className="text-[#6D8196]">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-lg text-[#4A4A4A]/70 mb-12 max-w-md leading-relaxed">
              Transform your vision into reality with our cutting-edge solutions. Let&apos;s discuss how we can help you innovate and grow.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-[#6D8196]/10 rounded-xl flex items-center justify-center border border-[#6D8196]/20 group-hover:border-[#6D8196] transition-colors shadow-sm"
                >
                  <Mail size={22} className="text-[#6D8196]" />
                </motion.div>
                <div>
                  <p className="text-xs text-[#4A4A4A]/60 uppercase tracking-wide font-semibold">Email Us</p>
                  <p className="text-lg font-medium text-[#4A4A4A]">contact@emdexlabs.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 bg-[#FEEEE3] rounded-xl flex items-center justify-center border border-[#CBCBCB] group-hover:border-[#6D8196] transition-colors shadow-sm"
                >
                  <MapPin size={22} className="text-[#6D8196]" />
                </motion.div>
                <div>
                  <p className="text-xs text-[#4A4A4A]/60 uppercase tracking-wide font-semibold">Location</p>
                  <p className="text-lg font-medium text-[#4A4A4A]">Bengaluru, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#6D8196]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FEEEE3]/60 rounded-full blur-2xl" />
            
            <div className="relative bg-white border border-[#CBCBCB] p-10 md:p-12 rounded-3xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#4A4A4A]">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#FEEEE3]/30 border border-[#CBCBCB] text-[#4A4A4A] placeholder-[#4A4A4A]/40 focus:bg-white focus:border-[#6D8196] focus:ring-2 focus:ring-[#6D8196]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#4A4A4A]">Company</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#FEEEE3]/30 border border-[#CBCBCB] text-[#4A4A4A] placeholder-[#4A4A4A]/40 focus:bg-white focus:border-[#6D8196] focus:ring-2 focus:ring-[#6D8196]/20 outline-none transition-all"
                    placeholder="Tech Solutions Inc."
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#4A4A4A]">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#FEEEE3]/30 border border-[#CBCBCB] text-[#4A4A4A] placeholder-[#4A4A4A]/40 focus:bg-white focus:border-[#6D8196] focus:ring-2 focus:ring-[#6D8196]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#6D8196] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#6D8196]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#6D8196]/25"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
