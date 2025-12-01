"use client";
import { motion } from "framer-motion";
import { hackathons } from "@/data/content";

export default function Timeline(){
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-neon text-center mb-8">Hackathons & Achievements</motion.h2>

        <div className="mt-6 space-y-6">
          {hackathons.map((h,i)=>(
            <motion.div key={i} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} className="card p-4 rounded-lg border border-white/6 flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-neon mt-2" />
              <div>
                <div className="font-semibold text-white">{h.title}</div>
                <div className="text-sm text-slate-300">{h.meta}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
