"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 max-w-5xl mx-auto space-y-20 scroll-smooth">
      {/* 🚀 RESPONSIVE NAV: Mobile (Center) + Desktop (Top-Right) */}
      <nav className="relative md:absolute md:top-6 md:right-6 z-50 inline-flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition duration-300 mt-4 md:mt-0">
        {[
          { name: "About", id: "#about" },
          { name: "Skills", id: "#skills" },
          { name: "Projects", id: "#projects" },
          { name: "Contact", id: "#contact" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.id}
            className="px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* 1. Hero Section (Nav Removed from here) */}
      <section className="w-full text-center space-y-8 mt-16 animate-slide-up flex flex-col items-center">

        {/* Ekhane ar Nav nei, direct Profile Pic/Content shuru hobe... */}

        {/* Profile Pic + Name Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

          {/* Profile Picture (Round & Glowing) */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
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
            {/* কোনো বক্স নেই, সরাসরি মোশন ডিভ */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-4"
            >
              {/* font-mono সরিয়ে দিয়েছি, এখন নরমাল ক্লিন ফন্ট */}
              {/* tracking-wide রেখেছি যাতে দেখতে ভালো লাগে */}
              <h2 className="text-base md:text-xl font-medium tracking-wide">
                <span
                  className="
                bg-clip-text 
                text-transparent 
                /* 👇 ব্রাইট সিলভার বেস (#cbd5e1) এবং পিওর হোয়াইট শাইন (#ffffff) 👇 */
                bg-[linear-gradient(110deg,#cbd5e1_45%,#ffffff_48%,#cbd5e1_50%,#ffffff_52%,#cbd5e1_55%)]
                bg-[length:250%_100%] 
                animate-shimmer
            "
                >
                  AI & ML Developer • Multi Agent Architect • Creator Of YES AI Studio
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Buttons: Mobile (Vertical) / Desktop (Horizontal) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-0 w-full px-6 md:px-0">

          <Link href="https://linkedin.com/in/ranajit-dhar-dev" className="w-full md:w-auto px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition hover:scale-105 shadow-lg shadow-blue-500/25 text-center">
            Connect LinkedIn
          </Link>

          <Link href="https://github.com/ranajitdharpersonal" className="w-full md:w-auto px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition hover:scale-105 text-center">
            GitHub Profile
          </Link>

          <a href="/resume.pdf" download className="w-full md:w-auto px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition shadow-lg shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2 text-center">
            <span>📄</span> Download CV
          </a>

        </div>
      </section>

      {/* 2. About Me Section (Added id="about") */}
      <section id="about" className="w-full gamma-card p-8 md:p-12 animate-slide-up delay-1 scroll-mt-32">
        <h3 className="text-3xl font-bold mb-6">
          <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>{" "}
          <span className="inline-block text-blue-500 animate-pulse">✨</span>
        </h3>
        <h4 className="text-xl font-semibold text-white mb-4">From Commerce to Code: My Journey into AI Innovation</h4>
        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            I'm a B.Com graduate turned <strong>AI Engineer in progress</strong>. passionate about building agentic AI systems and cloud powered applications. Starting from zero coding, I now architect real world <span className="text-amber-400">GenAI workflows, multi agent orchestration, and serverless automation</span> using Google Cloud.
          </p>
          <p>
            I thrive on learning by building blending business logic with technical intelligence to turn complex ideas into scalable, user focused AI solutions.
          </p>
        </div>
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <p className="text-purple-200 font-medium">💡 Where Curiosity Meets Creation</p>
          <p className="text-gray-400 text-sm mt-2">My aim: Turn real problems into reliable AI workflows that people can actually use.</p>
        </div>
      </section>

      {/* 3. What Sets Me Apart (NO ID Here - Fixed) */}
      <section className="w-full animate-slide-up delay-2">
        <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
          <span className="text-blue-500 animate-pulse">⚡</span> What Sets Me Apart
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[450px]">

          {/* ----------------- Card 1: Main USP (Big Box) ----------------- */}
          <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 flex flex-col justify-center group transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">

            {/* Background Blob */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/40 transition-all duration-700"></div>

            {/* 🔥 SECRET WEAPON: Auto Shine 🔥 */}
            <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-card-shine z-0"></div>

            <div className="relative z-10">
              <div className="text-6xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">🧠</div>
              <h4 className="text-3xl font-bold text-white mb-3 tracking-tight">Business + AI Architect</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                I bridge the gap between <span className="text-blue-400 font-semibold">Code</span> & <span className="text-purple-400 font-semibold">Capital</span>. My strategies turn AI concepts into profitable realities.
              </p>
            </div>
          </div>

          {/* ----------------- Card 2: Problem Solving (Wide Box) ----------------- */}
          <div className="col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex items-center gap-5 group transition-all duration-300 hover:-translate-y-1 hover:bg-white/5">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Pulse Effect (Heartbeat) */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/40 blur-[60px] rounded-full animate-pulse"></div>

            {/* 🔥 SECRET WEAPON: Auto Shine 🔥 */}
            <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-card-shine z-0"></div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-3xl group-hover:scale-125 group-hover:rotate-45 transition-all duration-500 shadow-lg relative z-10">🚀</div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400 mb-1">Problem Solving Mindset</h4>
              <p className="text-sm text-gray-400">From 0 to Deploy in <span className="text-white font-mono">48 Hours</span>.</p>
            </div>
          </div>

          {/* ----------------- Card 3: Agentic Systems (Small Box) ----------------- */}
          <div className="col-span-1 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50">

            {/* Pulse Effect (Heartbeat) */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/40 blur-[60px] rounded-full animate-pulse"></div>

            {/* 🔥 SECRET WEAPON: Auto Shine 🔥 */}
            <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-card-shine z-0"></div>

            <div className="text-4xl mb-2 relative z-10">🤖</div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-purple-400 mb-1">Agentic Systems</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Designing multi agent workflows for reasoning, automation, and orchestration.
              </p>
            </div>
          </div>

          {/* ----------------- Card 4: Cloud Native (Small Box) ----------------- */}
          <div className="col-span-1 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-green-500/50">

            {/* Pulse Effect (Heartbeat) */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-600/40 blur-[60px] rounded-full animate-pulse"></div>

            {/* 🔥 SECRET WEAPON: Auto Shine 🔥 */}
            <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-card-shine z-0"></div>

            <div className="text-4xl mb-2 relative z-10">☁️</div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-green-200 mb-1">Cloud Native</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Deploying scalable GenAI systems using Google Cloud & serverless architecture.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* 4. Featured Projects (Added id="projects") */}
      <section id="projects" className="w-full animate-slide-up delay-2 scroll-mt-32">
        <h3 className="text-3xl font-bold mb-10 text-white border-l-4 border-blue-500 pl-4">Featured Projects ⚡️</h3>

        <div className="grid grid-cols-1 gap-12">

          {/* Project 1: YES Ai Studio (With Purple Spinning Border) */}
          <div className="relative rounded-xl overflow-hidden p-[2px] group h-full">

            {/* 🔥 SECRET WEAPON: Purple Laser Beam */}
            {/* আগের Blue (#3b82f6) এর বদলে এখানে Purple (#a855f7) ব্যবহার করা হলো */}
            <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(transparent_270deg,#3b82f6_360deg)]"></div>

            {/* Inner Card: Solid Background (Must correspond to theme) */}
            <div className="relative h-full bg-[#0D1117] rounded-xl p-8 flex flex-col md:flex-row gap-8 z-10">

              {/* ------- Image Part ------- */}
              <div className="md:w-1/2 min-h-[280px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float delay-1">
                <Image
                  src="/project2.png"
                  alt="YES Ai Studio"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                {/* পার্পল আভা ছবির ওপরে */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* ------- Content Part ------- */}
              <div className="md:w-1/2 space-y-5">
                <h4 className="text-3xl font-bold text-white group-hover:text-blue-400 transition">YES Ai Studio Capstone 🌟</h4>
                <p className="text-gray-400">Autonomous Multi-Agent Pipeline: <strong>Plan → Create → Validate</strong></p>

                {/* ডিটেইলস বক্স একটু আপডেট করা হলো যাতে আইকনগুলো সুন্দর লাগে */}
                <div className="bg-white/5 p-4 rounded-lg text-sm text-gray-300 space-y-1 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">🧭</span>
                    <span><strong>Navigator:</strong> Generates learning roadmaps.</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">📰</span>
                    <span><strong>Curator:</strong> Creates social media posts & images.</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">✅</span>
                    <span><strong>Evaluator:</strong> Quality control & scoring.</span>
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="https://github.com/ranajitdharpersonal/-YES-Ai-Studio-Agentic-Multimodal-Creator-Capstone-Edition-" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition">
                    View Capstone Repo
                  </Link>
                </div>
              </div>

            </div>
          </div>


          {/* Project 2: Sharp Neon Border (Fixed) */}
          <div className="relative rounded-xl overflow-hidden p-[2px] group h-full">

            {/* 🔥 SECRET WEAPON 2.0: The Laser Beam Gradient */}
            {/* ১. blur সরিয়ে দিয়েছি (Sharpness এর জন্য) */}
            {/* ২. Black সরিয়ে transparent ব্যবহার করেছি (Clean Look এর জন্য) */}
            <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(transparent_270deg,#a855f7_360deg)]"></div>

            {/* ৩. Inner Card: ব্যাকগ্রাউন্ড সলিড হতে হবে! (bg-[#0D1117]) */}
            {/* backdrop-blur এবং opacity সরিয়ে দেওয়া হয়েছে যাতে আলো ভেতরে না ঢোকে */}
            <div className="relative h-full bg-[#0D1117] rounded-xl p-8 flex flex-col md:flex-row gap-8 z-10">

              {/* ------- আপনার কন্টেন্ট (যা ছিল তাই) ------- */}
              <div className="md:w-1/2 min-h-[280px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float">
                <Image src="/project1.png" alt="YES Ai" fill className="object-cover transition duration-500 group-hover:scale-110" />
              </div>

              <div className="md:w-1/2 space-y-5">
                <h4 className="text-3xl font-bold text-white group-hover:text-purple-400 transition">YES Ai 🤖</h4>
                <p className="text-gray-400">A next-gen AI assistant combining multiple tools with <strong>Gemini 2.0 Flash</strong>.</p>

                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">🌐 <strong>Real-Time:</strong> Seamlessly connects with live data.</li>
                  <li className="flex items-center gap-2">🔐 <strong>Secure:</strong> Custom login with bcrypt & OTP.</li>
                  <li className="flex items-center gap-2">☁️ <strong>Serverless:</strong> Deployed on Google Cloud Run.</li>
                </ul>

                <div className="pt-4 flex gap-4">
                  <Link href="https://github.com/ranajitdharpersonal/YES-Ai-2.0-Multi-Tool" className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition">View Code</Link>
                  <Link href="#" className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition">Live Demo</Link>
                </div>
              </div>
              {/* ------- কন্টেন্ট শেষ ------- */}
            </div>
          </div>

          {/* Project 3: YES Ai Studio IoT Edition 🌐 (With amber Spinning Border) */}
          <div className="relative rounded-xl overflow-hidden p-[2px] group h-full">

            {/* 🔥 SECRET WEAPON: Emerald Green Laser Beam */}
            {/* আগের Blue (#3b82f6) এর বদলে এখানে Emerald Green (#10b981) ব্যবহার করা হলো */}
            <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(transparent_270deg,#f59e0b_360deg)]"></div>

            {/* Inner Card: Solid Background (Must correspond to theme) */}
            <div className="relative h-full bg-[#0D1117] rounded-xl p-8 flex flex-col md:flex-row gap-8 z-10">

              {/* ------- Image Part ------- */}
              <div className="md:w-1/2 min-h-[280px] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden animate-float delay-1">
                <Image
                  src="/project3.png"
                  alt="YES Ai Studio IoT Edition 🌐"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                {/* পার্পল আভা ছবির ওপরে */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* ------- Content Part ------- */}
              <div className="md:w-1/2 space-y-5">
                <h4 className="text-3xl font-bold text-white group-hover:text-amber-500 transition">YES Ai Studio IoT Edition 🌐</h4>
                <p className="text-gray-400">AI Driven IoT Intelligence: <strong>Sense → Analyze → Act</strong></p>

                {/* ডিটেইলস বক্স একটু আপডেট করা হলো যাতে আইকনগুলো সুন্দর লাগে */}
                <div className="bg-white/5 p-4 rounded-lg text-sm text-gray-300 space-y-1 border border-white/5 group-hover:border-amber-500/30 transition-colors">
                  <p className="flex items-center gap-3">
                    <span className="text-amber-400 text-lg">📡</span>
                    <span><strong>Sensor Agent:</strong> Ingests & simulates IoT sensor data streams</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-amber-400 text-lg">🧠</span>
                    <span><strong>Analyzer Agent:</strong> Detects patterns, anomalies & thresholds</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-amber-400 text-lg">⚡</span>
                    <span><strong>Action Agent:</strong> Generates alerts / actions based on AI decisions</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-amber-400 text-lg">✅</span>
                    <span><strong>Evaluator Agent:</strong> Validates data reliability & response accuracy</span>
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="https://github.com/ranajitdharpersonal/YES-Ai-Studio-IoT-Edition-" className="text-white border-b border-amber-500 pb-1 hover:text-amber-400 transition">
                    View Capstone Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hackathons & Skills (Added id="skills") */}
      <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-slide-up delay-3 scroll-mt-32">
        <section className="gamma-card p-8">
          <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center gap-2">🏆 Hackathon Recognition 2025</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
              <strong className="text-white block text-base">Google Cloud Run Hackathon 2025</strong>
              Demonstrated scalable cloud deployment and containerized AI solutions.
            </li>
            <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
              <strong className="text-white block text-base">Google Chrome Built-in AI Challenge 2025</strong>
              Showcased browser integrated AI capabilities for seamless user experiences.
            </li>
            <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
              <strong className="text-white block text-base">Google AI Accelerate: Unlocking New Frontiers Hackathon</strong>
              Highlighted advanced generative AI features and real world applications.
            </li>
            <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
              <strong className="text-white block text-base">Kaggle · Community Hackathon - Agents Intensive</strong>
              Showcased an end-to-end agentic AI creator to automate content, analysis & workflow tasks.
            </li>
            <li className="bg-white/5 p-3 rounded-lg border-l-2 border-yellow-500">
              <strong className="text-white block text-base">Tuya Al Innovators Hackathon 2025</strong>
              Multi Agent AI System that autonomously controls IoT devices (Smart Lighting) based on quality assessment.
            </li>
            <div className="pt-4">
              <Link href="https://devpost.com/ranajitdharpersonal?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-600/20 text-yellow-300 rounded-full text-sm hover:bg-yellow-600/30 transition border border-yellow-500/30">
                Devpost Portfolio &rarr;
              </Link>
            </div>
          </ul>
        </section>

        <section className="gamma-card p-8">
          <h3 className="text-xl font-bold mb-6 text-amber-400 flex items-center gap-2">⚡ Core Technical Expertise</h3>

          <div className="space-y-6">

            {/* AI & ML Skills */}
            <div>
              <h4 className="text-white font-semibold mb-3 border-b border-gray-700 pb-2">🧠 AI & ML Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Generative AI",
                  "Large Language Models (LLMs)",
                  "Natural Language Processing (NLP)",
                  "Machine Learning",
                  "Multimodal AI",
                  "Artificial Intelligence (AI)"
                ].map(s => (
                  <span key={s} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-green-500/20 text-xs rounded-full cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Development & Backend */}
            <div>
              <h4 className="text-white font-semibold mb-3 border-b border-gray-700 pb-2">🤖 Agentic & Automation</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agentic AI Development",
                  "Multi-Agent Systems",
                  "Autonomous Agents",
                  "AI Agents",
                  "AI Workflow Orchestration",
                  "Tool Calling / Function Calling",
                  "Reasoning & Planning",
                  "Workflow Automation"
                ].map(s => (
                  <span key={s} className="px-3 py-1 bg-green-500/10 text-green-300 border border-blue-500/20 text-xs rounded-full cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Security & Authentication */}
            <div>
              <h4 className="text-white font-semibold mb-3 border-b border-gray-700 pb-2">🛠 Development, Cloud & Engineering</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python Programming",
                  "AI Application Development",
                  "Backend Development",
                  "REST APIs",
                  "Data Parsing & JSON Structuring",
                  "Web App Deployment",
                  "Scalable Web Apps",
                  "Serverless Architecture",
                  "Google Cloud Platform (GCP)",
                  "Vertex AI",
                  "Google Gemini API / Gemini APIs",
                  "Streamlit",
                  "Authentication Systems",
                  "bcrypt Password Hashing"
                ].map(s => (
                  <span key={s} className="px-3 py-1 bg-pink-500/10 text-pink-300 border border-red-500/20 text-xs rounded-full cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* 6. Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-slide-up delay-4">
        <section className="gamma-card p-8">
          <h3 className="text-xl font-bold mb-6 text-pink-400">Google Cloud Certifications 📜</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl">🏅</div>
            <div>
              <h4 className="text-white font-bold">62+ Skill Badges</h4>
              <p className="text-sm text-gray-400">Earned on Google Cloud Skills Boost</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-gray-300 list-disc ml-5 marker:text-pink-500">
            <li>Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge</li>
            <li>Build Real World AI Applications with Gemini and Imagen Skill Badge</li>
            <li>Develop GenAI Apps with Gemini and Streamlit Skill Badge</li>
            <li>Explore Generative AI with the Vertex AI Gemini API Skill Badge</li>
            <li>Prompt Design in Vertex AI Skill Badge</li>
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
            <p className="text-sm text-gray-400">Completed <strong>46+ courses</strong> and <strong>169+ hands-on labs</strong>.</p>
          </div>
        </section>
      </div>

      {/* 7. Footer (Added id="contact") */}
      <footer id="contact" className="w-full text-center py-12 border-t border-white/5 animate-slide-up delay-4 scroll-mt-32">
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