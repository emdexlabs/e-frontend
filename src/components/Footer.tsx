"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, ArrowRight, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Sending inquiry", formData);
    window.location.href = `mailto:embdex@gmail.com?subject=Inquiry from ${formData.name}&body=${formData.message} (Contact: ${formData.email})`;

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer
      id="contact"
      className="bg-foreground text-white py-16 md:py-24 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left Column: Brand & Nav */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-8 hover:opacity-90">
                <Logo iconSize={40} textColor="text-white" />
              </Link>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Ready to build something{" "}
                <span className="text-primary">amazing?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Let&apos;s collaborate to transform your vision into an
                intelligent, scalable reality.
              </p>

              <div className="flex flex-col gap-6 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  <a
                    href="mailto:contact@emdexlabs.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@emdexlabs.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-6">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} EMDEX LABS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
