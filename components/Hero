"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold"
      >
        {hero.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl md:text-2xl mt-4 text-neon font-semibold"
      >
        {hero.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
      >
        {hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-10 flex justify-center gap-6"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-neon text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
