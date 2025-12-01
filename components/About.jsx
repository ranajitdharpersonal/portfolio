"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-10">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-neon"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4 text-gray-300 text-lg leading-relaxed"
      >
        {about.text.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </motion.div>
    </section>
  );
}
