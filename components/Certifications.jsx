"use client";
import { certifications } from "@/data/content";

export default function Certifications(){
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-neon mb-6 text-center">Certifications</h2>
        <div className="flex gap-4 overflow-x-auto h-scroll py-4">
          {certifications.map((c,i)=>(
            <div key={i} className="min-w-[260px] p-4 card rounded-lg border border-white/6">
              <div className="font-semibold text-white">{c.title}</div>
              <div className="text-sm text-slate-300 mt-2">{c.org} • {c.year || ""}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
