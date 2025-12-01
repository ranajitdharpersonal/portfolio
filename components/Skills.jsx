"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-neon text-center mb-8">Skills</motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span key={index} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} transition={{delay: index*0.04}} className="px-5 py-2 rounded-full border border-neon text-neon shadow-md hover:bg-neon hover:text-black">
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
