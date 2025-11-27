"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Industry", href: "#industry" },
  { name: "Innovation", href: "#innovation" },
  { name: "Contact Us", href: "#contact" },
];

// Debounce utility for scroll performance
function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef<number | null>(null);

  // Optimized scroll handler with RAF
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    // Debounced scroll handler for performance
    const debouncedScroll = debounce(handleScroll, 10);
    
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Navbar height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update active section immediately for better UX
      setActiveSection(targetId);
    }
    
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-white/90 backdrop-blur-md py-4 shadow-md"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#6D8196] rounded-lg"
          aria-label="Emdex Labs Home"
        >
          <Logo iconSize={44} />
        </Link>

        {/* Desktop Navigation - Prominent Tabs */}
        <div 
          className="hidden md:flex items-center gap-1"
          role="tablist"
          aria-label="Page sections"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6D8196] focus:ring-offset-2",
                  isActive
                    ? "text-[#6D8196]"
                    : "text-[#4A4A4A]/70 hover:text-[#6D8196]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(109,129,150,0.15)] border border-[#6D8196]/10 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ willChange: "transform" }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 hover:bg-[#FEEEE3] rounded-lg transition-colors text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#6D8196]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[#CBCBCB]/30"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "px-4 py-3 text-base font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#6D8196]",
                      isActive
                        ? "bg-gradient-to-r from-[#6D8196] to-[#5A6B7E] text-white shadow-md"
                        : "text-[#4A4A4A] hover:bg-[#FEEEE3] hover:text-[#6D8196]"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
