import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Layers, Palette } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Premium Quality',
    description: 'Meticulously crafted components with attention to every detail'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance First',
    description: 'Optimized for speed and efficiency without compromising quality'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Fully Customizable',
    description: 'Easy to adapt and integrate into any project or design system'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Modern Design',
    description: 'Contemporary aesthetics that elevate your user experience'
  }
];

export default function ComponentShowcase() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose Our Components
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with modern technologies and best practices to deliver exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50">
            Start Building Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}
