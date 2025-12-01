"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section className="py-16 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-neon text-center mb-10"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-black transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
