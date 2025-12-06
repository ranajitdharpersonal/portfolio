import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 max-w-5xl mx-auto space-y-20">
      
      {/* 1. Hero Section (Updated with Profile Pic) */}
      <section className="w-full text-center space-y-6 mt-16 animate-slide-up flex flex-col items-center">
        
        {/* Tagline */}
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-4">
          ✨ AI Engineer & Architect
        </div>

        {/* Profile Pic + Name Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          
          {/* Profile Picture (Round & Glowing) */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
               {/* Make sure 'profile.png' is in your public folder */}
               <Image 
                 src="/profile.jpg" 
                 alt="Ranajit Dhar" 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-text-shine pb-2">
              Ranajit Dhar
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400 font-light mt-2">
              AI/ML Developer | <span className="text-white font-medium">Google Cloud Certified</span>
            </h2>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-center gap-5 pt-8">
          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition hover:scale-105 shadow-lg shadow-blue-500/25">
            Connect LinkedIn
          </Link>
          <Link href="https://github.com/ranajitdharpersonal" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition hover:scale-105">
            GitHub Profile
          </Link>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section className="w-full gamma-card p-8 md:p-12 animate-slide-up delay-1">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me ✨</h3>
        <h4 className="text-xl font-semibold text-white mb-4">From Commerce to Code: My Journey into AI Innovation</h4>
        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            I'm a B.Com graduate turned <strong>AI Engineer in progress</strong>. Breaking the stereotype that you need a CS degree to code. I build autonomous agents, secure cloud workflows, and real-world generative AI applications.
          </p>
          <p>
            From starting with zero coding background to creating advanced agentic systems, my journey proves that <span className="text-blue-300">curiosity, grit, and creativity</span> can build anything.
          </p>
        </div>
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <p className="text-purple-200 font-medium">💡 Where Curiosity Meets Creation</p>
          <p className="text-gray-400 text-sm mt-2">My aim: Turn real problems into reliable AI workflows that people can actually use.</p>
        </div>
      </section>

      {/* --- ADVANCED BENTO GRID: What Sets Me Apart --- */}
      <section className="w-full animate-slide-up delay-2">
        <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
          <span className="text-blue-500">⚡</span> What Sets Me Apart
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[400px]">
          
          {/* Card 1: Main USP (Boro Box) */}
          <div className="col-span-1 md:col-span-2 row-span-2 gamma-card p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl -mr-10 -mt-10 rounded-full transition group-hover:bg-blue-500/30"></div>
            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">🧠</div>
            <h4 className="text-2xl font-bold text-white mb-3">Business + AI Architect</h4>
            <p className="text-gray-400 leading-relaxed">
              Not just a coder. My <strong className="text-blue-300">Commerce background</strong> allows me to see the 'Money' & 'Value' behind every line of code. I build AI that sells.
            </p>
          </div>

          {/* Card 2: Speed (Choto Box) */}
          <div className="col-span-1 md:col-span-2 gamma-card p-6 flex items-center gap-4 group hover:bg-white/5 transition">
             <div className="p-3 bg-purple-500/20 rounded-lg text-2xl group-hover:rotate-12 transition">🚀</div>
             <div>
               <h4 className="text-lg font-bold text-white">Rapid Prototyping</h4>
               <p className="text-xs text-gray-400">Idea to Deployment in days.</p>
             </div>
          </div>

          {/* Card 3: Agentic (Choto Box) */}
          <div className="col-span-1 gamma-card p-6 flex flex-col justify-between group hover:bg-white/5 transition">
             <div className="text-3xl mb-2 grayscale group-hover:grayscale-0 transition">🤖</div>
             <h4 className="text-lg font-bold text-purple-300">Agentic Workflow</h4>
          </div>

          {/* Card 4: Tech Stack (Choto Box) */}
          <div className="col-span-1 gamma-card p-6 flex flex-col justify-between group hover:bg-white/5 transition">
             <div className="text-3xl mb-2 grayscale group-hover:grayscale-0 transition">☁️</div>
             <h4 className="text-lg font-bold text-green-300">Cloud Native</h4>
          </div>

        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="w-full animate-slide-up delay-2">
        <h3 className="text-3xl font-bold mb-10 text-white border-l-4 border-blue-500 pl-4">Featured Projects ⚡️</h3>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Project 1 */}
          <div className="gamma-card p-8 flex flex-col md:flex-row gap-8 group">
            <div className="md:w-1/2 min-h-[280px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float">
               <span className="text-gray-500 text-sm">Upload `project1.png`</span>
               <Image src="/project1.png" alt="YES Ai" fill className="object-cover transition duration-500 group-hover:scale-110" />
            </div>
            <div className="md:w-1/2 space-y-5">
              <h4 className="text-3xl font-bold text-white group-hover:text-blue-400 transition">YES Ai 🤖</h4>
              <p className="text-gray-400">A next-gen AI assistant combining multiple tools with <strong>Gemini 2.0 Flash</strong>.</p>
              
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">🌐 <strong>Real-Time:</strong> Seamlessly connects with live data.</li>
                <li className="flex items-center gap-2">🔐 <strong>Secure:</strong> Custom login with bcrypt & OTP.</li>
                <li className="flex items-center gap-2">☁️ <strong>Serverless:</strong> Deployed on Google Cloud Run.</li>
              </ul>

              <div className="pt-4 flex gap-4">
                 <Link href="https://github.com/ranajitdharpersonal/YES-Ai-2.0-Multi-Tool" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition">View Code</Link>
                 <Link href="#" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition">Live Demo</Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="gamma-card p-8 flex flex-col md:flex-row gap-8 group">
            <div className="md:w-1/2 min-h-[280px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float delay-1">
               <span className="text-gray-500 text-sm">Upload `project2.png`</span>
               <Image src="/project2.png" alt="YES Ai Studio" fill className="object-cover transition duration-500 group-hover:scale-110" />
            </div>
            <div className="md:w-1/2 space-y-5">
              <h4 className="text-3xl font-bold text-white group-hover:text-purple-400 transition">YES Ai Studio 🌟</h4>
              <p className="text-gray-400">Autonomous Multi-Agent Pipeline: <strong>Plan → Create → Validate</strong>.</p>
              
              <div className="bg-white/5 p-4 rounded-lg text-sm text-gray-300 space-y-2">
                <p>🧭 <strong>Navigator:</strong> Generates learning roadmaps.</p>
                <p>📰 <strong>Curator:</strong> Creates social media posts & images.</p>
                <p>✅ <strong>Evaluator:</strong> Quality control & scoring.</p>
              </div>

               <div className="pt-4">
                 <Link href="https://github.com/ranajitdharpersonal/-YES-Ai-Studio-Agentic-Multimodal-Creator-Capstone-Edition-" className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition">View Capstone Repo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hackathons & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-slide-up delay-3">
         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center gap-2">🏆 Hackathon Recognition 2025</h3>
           <ul className="space-y-4 text-gray-300 text-sm">
             <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
               <strong className="text-white block text-base">Google Cloud Run Hackathon</strong>
               Scalable cloud deployment & containerized AI.
             </li>
             <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
               <strong className="text-white block text-base">Chrome Built-in AI</strong>
               Showcased browser integrated AI capabilities.
             </li>
             <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
               <strong className="text-white block text-base">Kaggle Community Hackathon</strong>
               Structured agent pipelines & evaluation frameworks.
             </li>
           </ul>
         </section>

         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-green-400 flex items-center gap-2">🧠 Core Technical Expertise</h3>
           <div className="space-y-6">
             <div>
               <h4 className="text-white font-semibold mb-3 border-b border-gray-700 pb-2">AI & ML Skills</h4>
               <div className="flex flex-wrap gap-2">
                  {["Generative AI", "Prompt Engineering", "Orchestration", "LLMs", "Vertex AI", "RAG"].map(s => (
                    <span key={s} className="px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/20 text-xs rounded-full cursor-default">
                      {s}
                    </span>
                  ))}
               </div>
             </div>
             <div>
               <h4 className="text-white font-semibold mb-3 border-b border-gray-700 pb-2">Development & Cloud</h4>
               <div className="flex flex-wrap gap-2">
                  {["Python", "Streamlit", "Next.js", "Cloud Run", "Serverless", "API Integration"].map(s => (
                    <span key={s} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs rounded-full cursor-default">
                      {s}
                    </span>
                  ))}
               </div>
             </div>
           </div>
         </section>
      </div>

      {/* 5. Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-slide-up delay-4">
         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-pink-400">Google Cloud Certifications 📜</h3>
           <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl">🏅</div>
              <div>
                 <h4 className="text-white font-bold">55+ Skill Badges</h4>
                 <p className="text-sm text-gray-400">Earned on Google Cloud Skills Boost</p>
              </div>
           </div>
           <ul className="space-y-3 text-sm text-gray-300 list-disc ml-5 marker:text-pink-500">
             <li>Inspect Rich Documents with Gemini</li>
             <li>Multimodality and Multimodal RAG</li>
             <li>Introduction to Generative AI</li>
             <li>Develop GenAI Apps with Streamlit</li>
             <li>Prompt Design in Vertex AI</li>
           </ul>
           <div className="mt-8">
             <Link href="https://www.credly.com/users/ranajit-dhar" className="inline-flex items-center gap-2 px-5 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm hover:bg-pink-600/30 transition border border-pink-500/30">
               View Credly Profile &rarr;
             </Link>
           </div>
         </section>

         <section className="gamma-card p-8">
           <h3 className="text-xl font-bold mb-6 text-orange-400">Educational Foundation 🎓</h3>
           <div className="mb-8">
             <h4 className="text-white font-bold text-lg">University of Kalyani</h4>
             <p className="text-gray-300">Bachelor of Commerce (Honours)</p>
             <p className="text-gray-500 text-sm mt-1">2019 - 2022</p>
             <p className="text-xs text-gray-400 mt-4 leading-relaxed bg-white/5 p-3 rounded">
               Specialized in Accounting, Business Law & Finance.
             </p>
           </div>
           
           <div className="border-t border-gray-700 pt-6">
             <h4 className="text-white font-bold mb-1">Google Cloud Skill Boost</h4>
             <p className="text-sm text-gray-400">Completed <strong>46+ courses</strong> and <strong>121+ hands-on labs</strong>.</p>
           </div>
         </section>
      </div>

      {/* 6. Footer */}
      <footer className="w-full text-center py-12 border-t border-white/5 animate-slide-up delay-4">
        <h3 className="text-3xl font-bold mb-6 text-white">Let's Connect 🤝</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
          Looking for someone who can bridge business insight with cutting-edge AI innovation? I'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
           <a href="mailto:ranajitdharpersonal@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition shadow-lg shadow-white/10 hover:-translate-y-1">
            Email Me
          </a>
          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 hover:-translate-y-1">
            LinkedIn
          </Link>
        </div>
        <p className="text-sm text-gray-600">Built with Next.js, Tailwind & Vercel • 2025 Ranajit Dhar</p>
      </footer>

    </main>
  );
}