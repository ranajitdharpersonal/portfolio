import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 max-w-5xl mx-auto space-y-20">
      
      {/* Hero Section */}
      <section className="w-full text-center space-y-6 mt-16 animate-slide-up">
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-4">
          ✨ AI Engineer & Architect
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-text-shine pb-2">
          Ranajit Dhar
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
          Building <span className="text-white font-medium">Autonomous Agents</span> & <span className="text-white font-medium">Cloud AI Systems</span>
        </h2>
        
        <div className="flex justify-center gap-5 pt-8">
          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition hover:scale-105 shadow-lg shadow-blue-500/25">
            Connect LinkedIn
          </Link>
          <Link href="https://github.com/ranajitdharpersonal" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition hover:scale-105">
            GitHub Profile
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full gamma-card p-8 md:p-12 animate-slide-up delay-1">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a B.Com graduate turned <strong className="text-white">AI Engineer</strong>. Breaking the stereotype that you need a CS degree to code. I build autonomous agents, secure cloud workflows, and real-world generative AI applications.
        </p>
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <p className="text-purple-200">💡 <strong>Mission:</strong> Turning curiosity into reliable AI workflows.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full animate-slide-up delay-2">
        <h3 className="text-3xl font-bold mb-10 text-white border-l-4 border-blue-500 pl-4">Featured Projects</h3>
        
        <div className="grid grid-cols-1 gap-10">
          {/* Project 1 */}
          <div className="gamma-card p-8 flex flex-col md:flex-row gap-8 group">
            <div className="md:w-1/2 min-h-[250px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float">
               <span className="text-gray-500 text-sm">Upload `project1.png` to see magic</span>
               {/* <Image src="/project1.png" alt="YES Ai" fill className="object-cover transition duration-500 group-hover:scale-110" /> */}
            </div>
            <div className="md:w-1/2 space-y-4">
              <h4 className="text-3xl font-bold text-white group-hover:text-blue-400 transition">YES Ai 🤖</h4>
              <p className="text-gray-400">Next-gen AI assistant with <strong>Gemini 2.0 Flash</strong> & <strong>Multi-Tool</strong> capabilities.</p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-200">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full">Real-Time Data</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full">Cloud Run</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full">Secure Auth</span>
              </div>
              <div className="pt-4">
                 <Link href="https://github.com/ranajitdharpersonal/YES-Ai-2.0-Multi-Tool" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400">View Source Code &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="gamma-card p-8 flex flex-col md:flex-row gap-8 group">
            <div className="md:w-1/2 min-h-[250px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float delay-1">
               <span className="text-gray-500 text-sm">Upload `project2.png`</span>
               {/* <Image src="/project2.png" alt="YES Ai Studio" fill className="object-cover transition duration-500 group-hover:scale-110" /> */}
            </div>
            <div className="md:w-1/2 space-y-4">
              <h4 className="text-3xl font-bold text-white group-hover:text-purple-400 transition">YES Ai Studio 🌟</h4>
              <p className="text-gray-400">Autonomous Multi-Agent Pipeline: <strong>Plan → Create → Validate</strong>.</p>
              <div className="flex flex-wrap gap-2 text-xs text-purple-200">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full">Agentic Workflow</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full">Automated QA</span>
              </div>
               <div className="pt-4">
                 <Link href="https://github.com/ranajitdharpersonal/-YES-Ai-Studio-Agentic-Multimodal-Creator-Capstone-Edition-" className="text-white border-b border-purple-500 pb-1 hover:text-purple-400">View Capstone Repo &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid for Skills & Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-slide-up delay-3">
         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center gap-2">🏆 Hackathon Wins</h3>
           <ul className="space-y-4 text-gray-300 text-sm">
             <li className="flex items-start gap-3">
               <span className="mt-1 text-yellow-500">★</span>
               <div><strong className="text-white">Google Cloud Run</strong><br/>Scalable AI deployment</div>
             </li>
             <li className="flex items-start gap-3">
               <span className="mt-1 text-yellow-500">★</span>
               <div><strong className="text-white">Chrome Built-in AI</strong><br/>Browser-native models</div>
             </li>
           </ul>
         </section>

         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-green-400 flex items-center gap-2">🧠 Tech Stack</h3>
           <div className="flex flex-wrap gap-2">
              {["Python", "Generative AI", "Vertex AI", "Next.js", "Streamlit", "Docker", "GCP"].map(s => (
                <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">
                  {s}
                </span>
              ))}
           </div>
         </section>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-12 text-gray-500 border-t border-white/5 animate-slide-up delay-4">
        <p>Built with Next.js & Tailwind • 2025 Ranajit Dhar</p>
      </footer>

    </main>
  );
}