"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-neon text-center mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="border border-neon/40 p-6 rounded-xl bg-black/40 backdrop-blur-md shadow-lg hover:shadow-neon transition"
          >
            <h3 className="text-2xl font-semibold text-neon">{project.title}</h3>

            <p className="mt-3 text-gray-300">{project.description}</p>

            <div className="mt-6 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  className="px-5 py-2 bg-neon text-black font-semibold rounded-lg"
                  target="_blank"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  className="px-5 py-2 border border-neon text-neon font-semibold rounded-lg hover:bg-neon hover:text-black transition"
                  target="_blank"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
