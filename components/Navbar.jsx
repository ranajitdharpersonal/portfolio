"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Ranajit • AI/ML
        </span>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/80 px-6 py-4 space-y-4 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
