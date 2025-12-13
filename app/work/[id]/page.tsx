'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, Code2, Cpu, CheckCircle2, Zap, ExternalLink, Globe } from 'lucide-react';
import { PROJECTS } from '@/app/data'; 

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Find the project matching the URL id
  const project = PROJECTS.find((p) => p.id === params.id);

  // Handle 404 Case
  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <h1 className="text-2xl">Project not found.</h1>
        <button onClick={() => router.back()} className="ml-4 text-[#4ADE80] underline">Go Back</button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#4ADE80]/30">
      
      {/* --- PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-[#4ADE80] z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
      />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <button 
          onClick={() => router.back()} 
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#4ADE80]/50 hover:bg-[#4ADE80]/10 transition-all backdrop-blur-md"
        >
          <ArrowLeft size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-sm font-bold text-gray-300 group-hover:text-white">Back</span>
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 px-6 container mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] text-xs font-bold tracking-widest uppercase">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {project.fullDesc}
          </p>

          {/* --- NEW: VISIT WEBSITE BUTTON --- */}
          {project.link && project.link !== '#' ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4ADE80] text-black rounded-full font-bold text-lg hover:bg-[#3ecf72] hover:scale-105 transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              <Globe size={20} /> Visit Live  <ExternalLink size={18} />
            </a>
          ) : (
            <button disabled className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-gray-500 rounded-full font-bold text-lg cursor-not-allowed border border-white/5">
              Live Demo Coming Soon
            </button>
          )}

        </motion.div>
      </section>

      {/* --- PREVIEW SECTION (Clickable Image) --- */}
      <section className="px-4 md:px-6 container mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Wrap image in link if valid, otherwise just div */}
          {project.link && project.link !== '#' ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A] group cursor-pointer">
               {/* Image Component */}
               <Image 
                src={project.image || "/projects/placeholder.png"} // Fallback if image missing
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-2">
                    Open Project <ExternalLink size={16} />
                 </span>
              </div>
            </a>
          ) : (
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]">
               <Image 
                src={project.image || "/projects/placeholder.png"} 
                alt={project.title}
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-gray-500 font-mono">PREVIEW_OFFLINE</span>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* --- TECH CLARITY & BLOG --- */}
      <section className="px-6 container mx-auto pb-32">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          
          {/* LEFT: Tech Stack Sidebar */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Cpu size={24} className="text-[#4ADE80]" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:border-[#4ADE80]/30 hover:text-white transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: The "Clarity" Blog */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code2 size={32} className="text-[#4ADE80]" /> Technical Deep Dive
            </h3>
            
            <div className="space-y-12">
              {/* Challenge Block */}
              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-red-500/30 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 rounded-full bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                      <Zap size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-white">The Challenge</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Block */}
              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#4ADE80]/30 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] group-hover:bg-[#4ADE80] group-hover:text-black transition-all">
                      <CheckCircle2 size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-white">The Solution</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}