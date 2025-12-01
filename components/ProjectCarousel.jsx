"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectCarousel(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-neon text-center mb-8">Featured Projects</motion.h2>

        <div className="flex gap-6 items-start overflow-x-auto h-scroll pb-4">
          {projects.map((p,i)=>(
            <motion.div key={i} whileHover={{scale:1.02}} className="min-w-[320px] card p-0 rounded-xl border border-white/6 overflow-hidden">
              {/* banner image */}
              {p.image && (
                <div className="w-full h-[180px] relative">
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold neon">{p.title}</h3>
                  <div className="text-sm text-slate-300">{p.year || ""}</div>
                </div>

                <p className="mt-3 text-slate-300">{p.description}</p>

                <div className="mt-4 flex gap-3">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-neon text-black">GitHub</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 rounded border border-white/8 text-neon">Live</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
