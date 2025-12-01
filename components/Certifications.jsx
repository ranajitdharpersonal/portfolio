import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 max-w-6xl mx-auto px-6">
      
      <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Certifications
      </h2>

      <div className="grid md:grid-columns-2 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-white/70">{cert.org}</p>
            <p className="text-white/50 text-sm">{cert.year}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
