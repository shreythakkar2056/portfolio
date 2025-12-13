'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Terminal, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
        read: false,
      });
      setStatus('success');
      setTimeout(() => setForm({ name: '', email: '', project: '', message: '' }), 2000);
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden selection:bg-[#4ADE80]/30">
      
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4ADE80]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="p-6 relative z-10">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm tracking-wider">./BACK_TO_HOME</span>
        </button>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-2xl">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4 text-[#4ADE80]">
              <Terminal size={24} />
              <span className="font-mono text-sm">INITIALIZE_CONNECTION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Let's Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-teal-400">
                Your Next Breakthrough.
              </span>
            </h1>
          </motion.div>

          {/* FORM */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="group relative">
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#4ADE80] transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-[#4ADE80] peer-focus:text-xs transition-all pointer-events-none peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="group relative">
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#4ADE80] transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-[#4ADE80] peer-focus:text-xs transition-all pointer-events-none peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Email Address
                </label>
              </div>
            </div>

            {/* Project Type Select */}
            <div className="relative">
              <select 
                value={form.project}
                onChange={(e) => setForm({...form, project: e.target.value})}
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-xl px-4 py-4 text-gray-300 focus:outline-none focus:border-[#4ADE80] transition-colors appearance-none"
              >
                <option value="" disabled>Select Project Type</option>
                <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
                <option value="Web App (Next.js)">Web App (Next.js)</option>
                <option value="IoT/Hardware">IoT / Hardware Integration</option>
                <option value="Consultancy">Technical Consultancy</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ↓
              </div>
            </div>

            {/* Message Input */}
            <div className="group relative">
              <textarea 
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#4ADE80] transition-colors peer resize-none"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-[#4ADE80] peer-focus:text-xs transition-all pointer-events-none peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Project Brief
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="group relative w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" /> Transmitting...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 /> Request Received
                  </>
                ) : (
                  <>
                    Initialize_Collaboration <Send size={18} />
                  </>
                )}
              </span>
            </button>
            
            {/* Status Message */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400"
                >
                  <CheckCircle2 size={20} />
                  <span>Data uplink successful. I will decode your request and respond within 24 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </main>
  );
}