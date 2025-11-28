import React from 'react';
import { motion } from 'framer-motion';

export default function GlowingCard({ children, className = '', glowColor = 'cyan', ...props }) {
  const glowColors = {
    cyan: 'from-cyan-500 via-blue-500 to-purple-500',
    purple: 'from-purple-500 via-pink-500 to-rose-500',
    green: 'from-green-500 via-emerald-500 to-teal-500',
    orange: 'from-orange-500 via-amber-500 to-yellow-500',
    pink: 'from-pink-500 via-rose-500 to-red-500'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative ${className}`}
      {...props}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${glowColors[glowColor]} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500`} />
      <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        {children}
      </div>
    </motion.div>
  );
}
