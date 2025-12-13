'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, AlertTriangle, Terminal, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#4ADE80]/30">
      
      {/* --- BACKGROUND FX --- */}
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Red Alert Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Grain Texture */}
      <div className="absolute inset-0 bg-white/5 opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center px-6">
        
        {/* Animated Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
        >
          <AlertTriangle size={40} />
        </motion.div>

        {/* Glitchy 404 Title */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 relative">
          404
          {/* Decorative Glitch Bar */}
          <span className="absolute top-1/2 left-0 w-full h-1 bg-red-500/50 -translate-y-1/2 blur-sm"></span>
        </h1>

        {/* Terminal Error Message */}
        <div className="font-mono text-sm md:text-base text-gray-400 mb-10 flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            <span className="text-red-500">➜</span> 
            <span className="bg-white/5 px-2 py-1 rounded">ERROR: COORDINATES_INVALID</span>
          </p>
          <p>The requested sector appears to be lost in the void.</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Primary Button: Return Home */}
          <Link href="/" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Home size={18} /> Return to Base
            </span>
            <div className="absolute inset-0 bg-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
          </Link>

          {/* Secondary Button: Back */}
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-white/5 border border-white/10 text-gray-300 rounded-full font-bold text-lg hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>

      </div>

      {/* Footer Code Decoration */}
      <div className="absolute bottom-10 font-mono text-xs text-gray-700 select-none">
        System.exit(1); // Process terminated unexpectedly
      </div>

    </main>
  );
}