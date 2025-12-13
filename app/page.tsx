'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2, Layers, Smartphone, Database,
  Cpu, LayoutTemplate, Terminal,
  PieChart, Briefcase, Mail, Phone, ExternalLink,
  Zap, CheckCircle2, Globe, Box, PenTool, Wifi, Github, Linkedin, Instagram
} from 'lucide-react';

// --- FIXED IMPORT ---
// This pulls the data from the file you just created above
import { PROJECTS } from '@/app/data';

// --- SKILLS DATA ---
const SKILL_CATEGORIES = [
  {
    title: "Flutter & Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      "Flutter & Dart ",
      "High-Performance Rendering",
      "Cross-Platform Plugin Dev"
    ]
  },
  {
    title: "Modern Frontend (React Ecosystem)",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      "Next.js ",
      "React.js & TypeScript",
      "Tailwind CSS & Shadcn UI",
      "Framer Motion Animations"
    ]
  },
  {
    title: "Full Stack & Web Fundamentals",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      "HTML5, CSS3, JavaScript ",
      "PHP & MySQL (Legacy/Backend)",
      "Bootstrap & Responsive Layouts"
    ]
  },
  {
    title: "App Architecture & Scalability",
    icon: <Box className="w-6 h-6" />,
    skills: [
      "Clean Architecture (Modular)",
      "MVVM & MVC Patterns",
      "Scalable File Structures",
      "State Management Strategy"
    ]
  },
  {
    title: "UI/UX & Product Design",
    icon: <PenTool className="w-6 h-6" />,
    skills: [
      "User Flow",
      "Interactive Mockups",
      "Design System Implementation"
    ]
  },
  
];

const QUALITIES = [
  { title: "Fast Execution", desc: "Delivers end-to-end projects quickly" },
  { title: "Problem Solver", desc: "Loves solving complex challenges" },
  { title: "Creative & Intuitive", desc: "Designs flows that feel natural" },
  { title: "Product Thinking", desc: "Converts ideas into real-world solutions" },
];

const MILESTONES = [
  "Verified Developer on Google Play Store",
  "Build Expense Manager App in 48 hours",
  "Developed Multiplayer Game with Firebase",
  "Delivered Freelance projects for Premium clients"
];

// --- COMPONENTS ---

const Navbar = () => (
  <>
    {/* Top Header */}
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none mix-blend-difference">
      <span className="text-xl font-extrabold tracking-tighter text-white pointer-events-auto">
        Shrey Thakkar
      </span>
      <div className="flex gap-4 pointer-events-auto">
        <button
          onClick={() => alert("Resume is currently being updated. Please contact me directly!")}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
        >
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Resume</span>
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" title="Updating..." />
        </button>
        <Link href="/contact" className="...">
          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
            Contact
          </button>
        </Link>
      </div>
    </nav>

    {/* Bottom Floating Dock */}
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-8 py-4 bg-[#050505] border border-white/10 rounded-full shadow-2xl backdrop-blur-xl">
        {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-medium text-white/70 hover:text-[#4ADE80] transition-colors uppercase tracking-wide cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </>
);

const FloatingShape = ({ color, className, delay = 0 }: { color: string, className?: string, delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
    style={{ backgroundColor: color }}
  />
);

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Background Ambience */}
      <FloatingShape color="#6366F1" className="w-96 h-96 -top-20 -left-20" delay={0} />
      <FloatingShape color="#4ADE80" className="w-80 h-80 bottom-20 -right-20" delay={2} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-6">
            Hi, I’m Shrey Thakkar<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Product Engineer & Dev.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            I turn concepts into real apps, websites, and systems.
          </p>
        </motion.div>

        {/* Floating Cards (Decorative) */}
        {/* 1. THE TERMINAL CARD (Top Left) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-6 md:left-20 hidden lg:block p-4 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl w-56 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          {/* Typing Code Effect */}
          <div className="font-mono text-[10px] space-y-1 text-gray-400">
            <div className="flex gap-2">
              <span className="text-[#A06CD5]">➜</span>
              <span>~ shrey start project</span>
            </div>
            <div className="text-green-400">
              ✔ Compiled successfully
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">⚠</span>
              <span>0 Errors, 0 Warnings</span>
            </div>
            <div className="flex gap-2 animate-pulse mt-2">
              <span className="text-[#A06CD5]">➜</span>
              <span className="w-2 h-4 bg-gray-500 block"></span>
            </div>
          </div>
        </motion.div>
        {/* 2. THE ANALYTICS CARD (Bottom Right) */}
        {/* 2. THE SYSTEM STATUS CARD (Bottom Right) */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-6 md:right-20 hidden lg:block p-5 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl w-64 shadow-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">System Operational</span>
            </div>
            <span className="text-[10px] text-gray-500 font-mono">v2.4.0</span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Uptime Metric */}
            <div className="p-2 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[10px] text-gray-500 mb-1">Uptime</div>
              <div className="text-sm font-bold text-white font-mono">99.9%</div>
            </div>

            {/* Latency Metric */}
            <div className="p-2 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[10px] text-gray-500 mb-1">Latency</div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#4ADE80] font-mono">24ms</span>
                <Zap size={10} className="text-[#4ADE80]" />
              </div>
            </div>
          </div>

          {/* Progress Bar Decoration */}
          <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#4ADE80] to-transparent opacity-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] text-white relative overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 bg-white/5 opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
              Building the future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-teal-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                digital experiences
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I’m a <span className="text-white font-semibold">Product Engineer</span>, Flutter & Full-Stack Developer, and Tech Co-Founder of <span className="text-white font-semibold">Statmize</span>.
              I don't just write code; I architect production-ready systems and intuitive UIs that feel natural to use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Fast Execution', 'Problem Solving', 'Creative Direction', 'Patient Leadership'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#4ADE80]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_10px_#4ADE80]" />
                  <span className="font-medium text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Visual / Image */}
          <div className="relative group">
            {/* The "Alive" Glow Effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4ADE80] to-teal-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            {/* Container */}
            <div className="relative aspect-square rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">

              {/* Image */}
              <img
                src="/image.png"
                alt="Shrey Thakkar"
                // OLD: grayscale group-hover:grayscale-0
                // NEW: grayscale-0 md:grayscale md:group-hover:grayscale-0
                className="w-full h-full object-cover transition-all duration-700 
             grayscale-0 md:grayscale 
             md:group-hover:grayscale-0 
             md:group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-between z-20">
                <div>
                  <p className="text-sm font-bold text-white tracking-wide">Shrey Thakkar</p>
                  <p className="text-xs text-[#4ADE80] font-medium">@shreythakkar.dev</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-white/10 border border-white/5 flex items-center justify-center">
                  <Code2 size={18} className="text-white" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4ADE80]/10 rounded-full blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] text-white relative overflow-hidden">

      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Technical <span className="text-[#4ADE80]">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#4ADE80] to-transparent rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#4ADE80]/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/0 to-[#4ADE80]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white group-hover:text-[#4ADE80] group-hover:border-[#4ADE80]/30 transition-colors shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* List of Skills */}
              <ul className="space-y-2 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#4ADE80]/50 group-hover:bg-[#4ADE80]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  return (
    <section id="work" className="bg-[#050505] relative z-10">
      {PROJECTS.map((project, idx) => (
        <div
          key={project.id}
          // THEME FIX: Alternates between Pure Black and Very Dark Grey (No White)
          className={`sticky top-0 min-h-[50vh] flex items-center py-20 border-t border-white/5 
            ${idx % 2 === 0 ? 'bg-[#050505]' : 'bg-[#0A0A0A]'}`}
        >
          <div className="container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">

              {/* Left Side: Text Content */}
              <div className="md:w-1/2 order-2 md:order-1">
                {/* Tag: Consistent Dark Theme Style */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border
                     ${idx % 2 === 0
                      ? 'bg-[#4ADE80]/10 border-[#4ADE80]/20 text-[#4ADE80]'
                      : 'bg-purple-500/10 border-purple-500/20 text-purple-400'}`}>
                    {project.tag}
                  </span>
                  <div className="h-px w-10 bg-white/10" />
                </div>

                <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-white leading-none">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-400 max-w-md mb-8 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Link: Hover Effect Matches Theme */}
                <Link
                  href={`/work/${project.id}`}
                  className="group inline-flex items-center gap-2 font-bold text-white hover:text-[#4ADE80] transition-colors"
                >
                  <span className="border-b border-white/30 pb-1 group-hover:border-[#4ADE80]">
                    View Case Study
                  </span>
                  <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Right Side: Visual Preview */}
              <div className="md:w-1/2 w-full order-1 md:order-2">
                <Link href={`/work/${project.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group bg-[#0F0F0F] border border-white/10 cursor-pointer"
                  >
                    {/* Image */}
                    <Image
                      src={project.image || "/projects/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                    />

                    {/* Gradient Overlay (Darkens bottom for text contrast) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />

                    {/* Hover Reveal Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                      <span className="px-6 py-3 rounded-full bg-[#050505]/80 border border-[#4ADE80]/30 text-[#4ADE80] font-bold shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                        Open Project
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const QualitiesAndMilestones = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white relative">

      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Qualities */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">What I Bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUALITIES.map((q, i) => (
              <div key={i} className="p-6 bg-[#050505] border border-white/5 rounded-3xl hover:border-[#4ADE80]/30 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-[#4ADE80]">{q.title}</h3>
                <p className="text-sm text-gray-400">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <h2 className="text-3xl font-bold mb-10 tracking-tight">Milestones</h2>
        <div className="space-y-4">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl flex items-center gap-4 border
                ${i % 2 === 0 ? 'bg-[#050505] border-white/10' : 'bg-[#111] border-white/5'}`}
            >
              <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-[#4ADE80]' : 'bg-[#A06CD5]'}`} />
              <span className="text-lg md:text-xl font-medium tracking-tight text-gray-200">{m}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#A06CD5]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-8">
          Let’s Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A06CD5] to-[#F97316]">
            The Future.
          </span>
        </h2>

        {/* Contact Methods Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a href="mailto:shreythakkar2056@gmail.com" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex items-center gap-3 text-white">
            <Mail size={20} /> shreythakkar2056@gmail.com
          </a>
          <a href="tel:+919104604404" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex items-center gap-3 text-white">
            <Phone size={20} /> +91 91046 04404
          </a>
          <a href="https://shreythakkar.dev/" target="_blank" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex items-center gap-3 text-white">
            <LayoutTemplate size={20} /> shreythakkar.dev
          </a>
        </div>

        {/* --- NEW: SOCIAL INTELLIGENCE GRID --- */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="https://github.com/shreythakkar2056" // Replace with actual URL
            target="_blank"
            className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-[#4ADE80] transition-colors"
          >
            <div className="absolute inset-0 bg-[#4ADE80] opacity-0 group-hover:opacity-20 rounded-full transition-opacity blur-md" />
            <Github size={24} className="text-gray-400 group-hover:text-[#4ADE80] transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/shreythakkar20" // Replace with actual URL
            target="_blank"
            className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-[#0077B5] transition-colors"
          >
            <div className="absolute inset-0 bg-[#0077B5] opacity-0 group-hover:opacity-20 rounded-full transition-opacity blur-md" />
            <Linkedin size={24} className="text-gray-400 group-hover:text-[#0077B5] transition-colors" />
          </a>

          <a
            href="https://instagram.com/shreythakkar.dev" // Replace with actual URL
            target="_blank"
            className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-[#E1306C] transition-colors"
          >
            <div className="absolute inset-0 bg-[#E1306C] opacity-0 group-hover:opacity-20 rounded-full transition-opacity blur-md" />
            <Instagram size={24} className="text-gray-400 group-hover:text-[#E1306C] transition-colors" />
          </a>
        </div>

        {/* Call to Action Button */}
        <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
          <span className="relative z-10">Reach Out &rarr;</span>
          <div className="absolute inset-0 bg-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
        </button>

        <footer className="mt-24 text-gray-500 text-sm">
          © {new Date().getFullYear()} Shrey Thakkar. Engineered with Next.js & Tailwind.
        </footer>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <main className="w-full bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <QualitiesAndMilestones />
      <Contact />
    </main>
  );
}