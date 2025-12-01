"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section className="py-20 text-center max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-neon mb-10"
      >
        Contact
      </motion.h2>

      <div className="space-y-4 text-lg text-gray-300">
        <p>Email: <a className="text-neon" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>LinkedIn: <a className="text-neon" href={contact.linkedin} target="_blank">Visit</a></p>
        <p>GitHub: <a className="text-neon" href={contact.github} target="_blank">View Repos</a></p>
      </div>
    </section>
  );
}
