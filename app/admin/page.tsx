'use client';

import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { Lock, Unlock, Database, Clock, Mail, User, Terminal } from 'lucide-react';

// --- CONFIG YOUR SECRET CODE HERE ---
const SECRET_CODE = "shreythakkar_200506"; 

export default function AdminPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  // Real-time listener for messages
  useEffect(() => {
    if (!accessGranted) return;

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [accessGranted]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode === SECRET_CODE) {
      setAccessGranted(true);
    } else {
      alert("ACCESS DENIED. IP LOGGED.");
      setInputCode('');
    }
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md border border-green-500/30 p-8 rounded-lg bg-green-500/5 backdrop-blur-sm shadow-[0_0_50px_rgba(74,222,128,0.1)]">
          <div className="flex justify-center mb-6">
            <Lock size={48} className="animate-pulse" />
          </div>
          <h1 className="text-xl text-center mb-8 tracking-[0.2em]">RESTRICTED AREA</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center gap-2 border-b border-green-500/50 py-2">
              <span className="text-xl">{'>'}</span>
              <input 
                type="password" 
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="bg-transparent w-full focus:outline-none text-xl placeholder-green-500/30"
                placeholder="ENTER_ACCESS_CODE"
                autoFocus
              />
            </div>
            <button type="submit" className="w-full bg-green-500/20 hover:bg-green-500/30 py-3 rounded border border-green-500/50 transition-colors uppercase tracking-widest text-sm font-bold">
              Execute Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
               <Database size={24} />
            </div>
            <div>
               <h1 className="text-2xl font-bold">Admin Command Center</h1>
               <p className="text-gray-400 text-sm font-mono">Incoming Transmissions: {messages.length}</p>
            </div>
          </div>
          <button onClick={() => setAccessGranted(false)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
             <Lock size={16} /> Lock Terminal
          </button>
        </div>

        {/* Message Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={msg.id} 
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-[#4ADE80]/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#4ADE80]/20 transition-all">
                      <User size={18} />
                   </div>
                   <div>
                      <h3 className="font-bold text-white">{msg.name}</h3>
                      <p className="text-xs text-gray-500 font-mono">
                        {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                      </p>
                   </div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide bg-[#4ADE80]/10 text-[#4ADE80]">
                   {msg.project}
                </span>
              </div>

              <div className="mb-4">
                 <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Mail size={14} /> {msg.email}
                 </div>
              </div>

              <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-gray-300 text-sm leading-relaxed">
                 {msg.message}
              </div>
            </motion.div>
          ))}
        </div>

        {messages.length === 0 && (
           <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <Terminal size={48} className="mb-4 opacity-50" />
              <p>No transmissions received yet.</p>
           </div>
        )}

      </div>
    </div>
  );
}