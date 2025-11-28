import React from 'react';
import { motion } from 'framer-motion';

export default function HolographicButton({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80',
    secondary: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80',
    ghost: 'bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40',
    outline: 'bg-transparent border-2 border-gradient-to-r from-cyan-500 to-purple-500 text-white hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-2xl font-bold
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  );
}
