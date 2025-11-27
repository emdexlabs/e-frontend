"use client";

import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#4A4A4A] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Logo iconSize={44} textColor="text-white" />
            </Link>
            <p className="text-gray-300 max-w-sm leading-relaxed">
              Empowering the future through innovation in AI, Robotics, and Cloud Computing. We build the technology that drives the world forward.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="#home" className="hover:text-[#FEEEE3] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#FEEEE3] transition-colors">About Us</Link></li>
              <li><Link href="#industry" className="hover:text-[#FEEEE3] transition-colors">Industries</Link></li>
              <li><Link href="#innovation" className="hover:text-[#FEEEE3] transition-colors">Innovation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#6D8196] hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#6D8196] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#6D8196] hover:text-white transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EMDEX LABS. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
