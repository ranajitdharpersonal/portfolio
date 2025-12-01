"use client";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-neon mb-4">Let’s build something great</h2>
        <p className="text-slate-300 mb-6">Reach out for collaborations, freelance or hiring.</p>

        <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-neon rounded-md text-black font-semibold">Email Me</a>

        <div className="mt-8 text-sm text-slate-400">
          <a href={contact.linkedin} target="_blank" className="mx-3">LinkedIn</a>
          <a href={contact.github} target="_blank" className="mx-3">GitHub</a>
          <a href={contact.website} target="_blank" className="mx-3">Gamma Profile</a>
        </div>
      </div>
    </section>
  );
}
