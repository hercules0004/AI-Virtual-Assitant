"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, ArrowDown, Database, Cpu, Layers } from "lucide-react";
import { aiModels } from "@/data/modelsData";
import ModelCard from "@/components/ModelCard";
import TimelineItem from "@/components/TimelineItem";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-neutral-100 min-h-screen selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 max-w-7xl mx-auto border-b border-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.07)_0,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-3xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" /> Core Model Matrix Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Next-Gen Artificial <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligence Catalogs
            </span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Exploring the developmental history, performance scopes, capabilities, and applications of modern foundation engineering constructs.
          </p>

          <p className="text-xs font-mono text-neutral-500 font-medium tracking-wide pt-4">
            Designed and developed by <span className="text-neutral-300 font-semibold">Harshit Kumar</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Get in Touch
            </button>
            <a
              href="#overview"
              className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-800 transition flex items-center gap-2"
            >
              Explore Models <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. MODELS OVERVIEW */}
      <section id="overview" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left md:flex justify-between items-end">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-mono text-indigo-400 mb-2 font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Model Repository
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Structured AI Architecture Profiles</h2>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              An abstract reference log showcasing categorization indices, deployment goals, and baseline application use cases.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-center font-mono text-xs text-neutral-500">
            OWNERSHIP CREDENTIALS: HARSHIT KUMAR
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModels.map((model, idx) => (
            <ModelCard key={model.id} model={model} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. TIMELINE */}
      <section className="py-24 px-4 bg-neutral-950/40 border-t border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center text-xs font-mono text-indigo-400 mb-2 font-bold uppercase tracking-wider">
              <Database className="w-4 h-4" /> Architectural Evolution
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Chronological Progress Matrix</h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto mt-2">
              Traced journey charting release vectors, generational milestones, and version progression frameworks.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto py-8">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/10 via-neutral-800 to-indigo-500/10 transform -translate-x-1/2" />
            {aiModels.map((model, idx) => (
              <TimelineItem key={`tl-${model.id}`} model={model} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_60%)]" />
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Have Technical or Engineering Inquiries?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Reach out directly to Harshit Kumar through this secure contact gateway.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition tracking-wide shadow-xl shadow-indigo-600/10"
          >
            <Cpu className="w-4 h-4" /> Open Communications Gateway
          </button>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-neutral-900 bg-black py-8 px-4 text-center text-xs text-neutral-500 font-mono tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© Harshit Kumar — All rights reserved</p>
          <p className="text-[11px]">AI Models Showcase Project — Production Blueprint V1.0</p>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
