"use client";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function ModelCard({ model, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-sm"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {model.category}
          </span>
          <Cpu className="w-5 h-5 text-neutral-600" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{model.description}</p>
      </div>

      <div className="border-t border-neutral-800/60 pt-4 mt-2">
        <p className="text-xs text-neutral-500 mb-1 font-semibold uppercase tracking-wider">Primary Use Case</p>
        <p className="text-sm text-neutral-300 mb-3">{model.useCase}</p>
        <div className="text-xs text-right text-indigo-400 font-mono">{model.period}</div>
      </div>
    </motion.div>
  );
}
