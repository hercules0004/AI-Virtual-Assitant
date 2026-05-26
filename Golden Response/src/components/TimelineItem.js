"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function TimelineItem({ model, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center my-12 w-full">
      {/* Central Connector Node */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-black z-10" />

      {/* Content Block */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
          className="bg-neutral-900/60 border border-neutral-800/80 p-6 rounded-xl inline-block max-w-xl text-left backdrop-blur-sm"
        >
          <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-indigo-400 font-bold">{model.period} ({model.year})</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-1">{model.name}</h4>
          <p className="text-xs font-medium text-neutral-500 mb-2">{model.category}</p>
          <p className="text-neutral-400 text-sm leading-relaxed">{model.description}</p>
        </motion.div>
      </div>

      {/* Spacing alignment balancing block */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}
