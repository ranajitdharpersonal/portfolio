import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 max-w-5xl mx-auto space-y-16">
      
      {/* 1. Hero Section */}
      <section className="w-full text-center space-y-6 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Ranajit Dhar
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-light">
          AI/ML Developer | Multi Agent Architect | Google Cloud Certified
        </h2>
        <p className="text-gray-400">Built YES AI | AI Hackathon Participant | Building Real-World AI Projects</p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition font-medium">
            LinkedIn Profile
          </Link>
          <Link href="https://github.com/ranajitdharpersonal" className="px-6 py-2 rounded-full border border-gray-600 hover:bg-gray-800 text-white transition font-medium">
            GitHub
          </Link>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section className="w-full gamma-card p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="space-y-4 text-gray-300 flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">About Me ✨</h3>
            <h4 className="text-xl font-semibold text-purple-400">From Commerce to Code: My Journey into AI Innovation</h4>
            <p>
              I'm a B.Com graduate turned <strong>AI Engineer in progress</strong>. From starting with zero coding background to creating advanced agentic systems, my journey proves that curiosity, grit, and creativity can build anything.
            </p>
            <div className="bg-white/5 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
              <p className="font-bold text-white">💡 Where Curiosity Meets Creation</p>
              <p className="text-sm mt-1">I learn by building. My aim: turn real problems into reliable AI workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="w-full">
        <h3 className="text-3xl font-bold mb-10 text-blue-400 border-b border-gray-800 pb-4">Featured Projects ⚡️</h3>
        
        {/* Project 1: YES Ai */}
        <div className="gamma-card p-6 mb-10 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 min-h-[250px] bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
             {/* Image Placeholder - Replace with your Image */}
             <div className="text-center text-gray-500 p-4">
               <p>📸 Upload <code>project1.png</code> in public folder</p>
             </div>
             {/* <Image src="/project1.png" alt="YES Ai" fill className="object-cover" /> */}
          </div>
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-2xl font-bold text-white">🤖 YES Ai — Multi Tool AI Agent</h4>
            <p className="text-gray-400 italic">A next-gen AI assistant combining multiple tools with Gemini 2.0 Flash.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
               <div className="bg-white/5 p-3 rounded">🌐 <strong>Real-Time Integration</strong></div>
               <div className="bg-white/5 p-3 rounded">🌍 <strong>Multilingual Support</strong></div>
               <div className="bg-white/5 p-3 rounded">🔐 <strong>Secure Auth (bcrypt)</strong></div>
               <div className="bg-white/5 p-3 rounded">☁️ <strong>Cloud Run Serverless</strong></div>
            </div>

            <div className="pt-6 flex gap-4">
              <Link href="https://github.com/ranajitdharpersonal/YES-Ai-2.0-Multi-Tool" className="text-blue-400 font-semibold hover:underline">View on GitHub</Link>
            </div>
          </div>
        </div>

        {/* Project 2: YES Ai Studio */}
        <div className="gamma-card p-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 min-h-[250px] bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
             <div className="text-center text-gray-500 p-4">
               <p>📸 Upload <code>project2.png</code> in public folder</p>
             </div>
             {/* <Image src="/project2.png" alt="YES Ai Studio" fill className="object-cover" /> */}
          </div>
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-2xl font-bold text-white">🌟 YES Ai Studio (Capstone Edition)</h4>
            <p className="text-gray-400 italic">Complete Autonomous Multi-Agent Pipeline: Plan → Create → Validate.</p>
            
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>🧭 <strong>Navigator Agent:</strong> Generates learning roadmaps via Function Calling.</li>
              <li>📰 <strong>Curator Agent:</strong> Crafts social media posts & image prompts.</li>
              <li>✅ <strong>Evaluator Agent:</strong> Automated scoring & quality control.</li>
            </ul>

             <div className="pt-6 flex gap-4">
              <Link href="https://github.com/ranajitdharpersonal/-YES-Ai-Studio-Agentic-Multimodal-Creator-Capstone-Edition-" className="text-blue-400 font-semibold hover:underline">View on GitHub</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hackathons & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <section className="gamma-card p-6">
          <h3 className="text-xl font-bold mb-6 text-yellow-400">Hackathon Recognition 2025 🏆</h3>
          <ul className="space-y-4 text-sm text-gray-300">
             <li className="bg-white/5 p-3 rounded hover:bg-white/10 transition">
              <strong className="text-white block text-base">Google Cloud Run Hackathon</strong>
              Demonstrated scalable cloud deployment.
            </li>
            <li className="bg-white/5 p-3 rounded hover:bg-white/10 transition">
              <strong className="text-white block text-base">Google Chrome Built-in AI</strong>
              Showcased browser integrated AI capabilities.
            </li>
            <li className="bg-white/5 p-3 rounded hover:bg-white/10 transition">
              <strong className="text-white block text-base">Kaggle Community Hackathon</strong>
              Structured agent pipelines & evaluation frameworks.
            </li>
          </ul>
        </section>

        <section className="gamma-card p-6">
           <h3 className="text-xl font-bold mb-6 text-green-400">Core Technical Expertise 🧠</h3>
           <div className="space-y-6">
             <div>
               <h4 className="text-white font-semibold mb-2">AI & ML Skills</h4>
               <div className="flex flex-wrap gap-2">
                  {["Generative AI", "Prompt Engineering", "Orchestration", "LLMs", "Vertex AI"].map(s => (
                    <span key={s} className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">{s}</span>
                  ))}
               </div>
             </div>
             <div>
               <h4 className="text-white font-semibold mb-2">Development</h4>
               <div className="flex flex-wrap gap-2">
                  {["Python", "Streamlit", "API Integration", "Serverless", "Google Cloud"].map(s => (
                    <span key={s} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">{s}</span>
                  ))}
               </div>
             </div>
           </div>
        </section>
      </div>

      {/* 5. Certifications & Education (Exact Match) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
         <section className="gamma-card p-6">
           <h3 className="text-xl font-bold mb-4 text-pink-400">Google Cloud Certifications 📜</h3>
           <p className="text-sm text-gray-400 mb-4">Focus areas: Multimodality, Generative AI, Vertex AI.</p>
           <ul className="space-y-2 text-sm text-gray-300 list-disc ml-5">
             <li>Inspect Rich Documents</li>
             <li>Gemini Multimodality & RAG</li>
             <li>Introduction to Generative AI</li>
             <li>Develop GenAI Apps with Streamlit</li>
             <li>Prompt Design in Vertex AI</li>
           </ul>
           <div className="mt-6">
             <Link href="https://www.credly.com/users/ranajit-dhar" className="text-sm text-blue-400 hover:text-blue-300 underline">View Credly Profile &rarr;</Link>
           </div>
         </section>

         <section className="gamma-card p-6">
           <h3 className="text-xl font-bold mb-4 text-orange-400">Educational Foundation 🎓</h3>
           <div className="mb-6">
             <h4 className="text-white font-bold text-lg">University of Kalyani</h4>
             <p className="text-gray-400">Bachelor of Commerce (Honours)</p>
             <p className="text-gray-500 text-sm">2019 - 2022</p>
             <p className="text-xs text-gray-400 mt-2">Specialized in Accounting & Business Law. This foundation provides a unique business perspective in AI.</p>
           </div>
           
           <div className="border-t border-gray-700 pt-4">
             <h4 className="text-white font-bold">Google Cloud Skill Boost</h4>
             <p className="text-sm text-gray-400">Completed 46+ courses & 121+ hands-on labs.</p>
           </div>
         </section>
      </div>

      {/* 6. Footer / Contact */}
      <section className="w-full text-center py-12 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-4">Let's Connect 🤝</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Looking for someone who can bridge business insight with cutting-edge AI innovation? I'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
           <a href="mailto:ranajitdharpersonal@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition shadow-lg shadow-white/10">
            Email Me
          </a>
          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
            LinkedIn
          </Link>
        </div>
        <div className="mt-12 text-gray-600 text-sm">
          <p>© 2025 Ranajit Dhar. Built with Next.js & Tailwind CSS.</p>
        </div>
      </section>

    </main>
  );
}