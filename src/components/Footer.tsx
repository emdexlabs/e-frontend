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
      className="bg-card text-card-foreground border-t border-border relative overflow-hidden section-padding"
    >
      {/* Background decoration - only visible in dark mode via opacity adjustment if needed, or keeping it subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left Column: Brand & Nav */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-8 hover:opacity-90">
                <Logo iconSize={40} textColor="text-foreground" />
              </Link>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">
                Ready to build something{" "}
                <span className="text-primary">amazing?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-lg">
                Let&apos;s collaborate to transform your vision into an
                intelligent, scalable reality.
              </p>

              <div className="flex flex-col gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <a
                    href="mailto:contact@emdexlabs.com"
                    className="hover:text-foreground transition-colors"
                  >
                    contact@emdexlabs.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="bg-secondary/50 border border-border rounded-3xl p-8 backdrop-blur-sm shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-foreground">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed mt-2 cursor-pointer"
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
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} EMDEX LABS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
