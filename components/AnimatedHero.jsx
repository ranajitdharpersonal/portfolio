"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function AnimatedHero(){
  return (
    <section id="hero" className="section">
      <div className="container text-center relative">
        {/* floating background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#05202b]/20 to-[#2a0b3a]/10 opacity-60 mx-auto blur-3xl"
            style={{marginTop: "-300px"}}
          />
        </div>

        {/* Name + round avatar */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {/* round avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image src="/images/profile.jpg" alt="Ranajit Dhar" width={80} height={80} priority />
            </div>

            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold neon">{hero.name}</h1>
              <div className="text-sm md:text-lg text-slate-300">{hero.title}</div>
            </div>
          </div>

          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">{hero.subtitle}</p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-neon text-black rounded-md font-medium shadow-lg">Projects</a>
            <a href={hero.resume || "/resume.pdf"} className="px-6 py-3 border border-neon text-neon rounded-md">Resume</a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
