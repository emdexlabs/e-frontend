"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "What we do", href: "#team-expertise" },
  { name: "Industry", href: "#industry" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isScrollingRef = useRef(false);

  // Body Scroll Lock when Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Precise Center-Line Intersection Observer
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Active when element hits center of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      isScrollingRef.current = true;
      setActiveSection(targetId);

      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Unlock observer after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-background/80 backdrop-blur-[8px] shadow-sm border-border/50 py-3"
            : "bg-transparent border-transparent py-5",
        )}
        role="navigation"
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 hover:opacity-80 transition-opacity"
            aria-label="Emdex Labs Home"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <Logo iconSize={40} textColor="text-foreground" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                  )}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_25px_-5px_var(--primary)] hover:bg-cyan-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-full transition-colors relative z-50",
              scrolled
                ? "text-foreground hover:bg-white/10"
                : "text-foreground hover:bg-white/10",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden"
          >
            {/* Header: Logo & Close */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Logo iconSize={32} textColor="text-foreground" />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Main Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col gap-6"
              >
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="group flex items-center gap-4"
                      >
                        <span
                          className={cn(
                            "text-sm font-mono font-medium transition-colors",
                            isActive
                              ? "text-primary"
                              : "text-zinc-500 group-hover:text-primary/50",
                          )}
                        >
                          {(idx + 1).toString().padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "text-3xl md:text-4xl font-bold tracking-tight transition-colors",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground",
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white/5 border-t border-white/10"
            >
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  <span>contact@emdexlabs.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
