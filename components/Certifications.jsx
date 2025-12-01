"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/content";

export default function Certifications() {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-neon text-center mb-10"
      >
        Certifications
      </motion.h2>

      <ul className="space-y-4 text-gray-300">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-b border-neon/40 pb-3"
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
