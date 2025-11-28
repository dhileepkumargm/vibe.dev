import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Crown, Zap } from 'lucide-react';

const ComponentCard = ({ component }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
    >
      {/* Premium Badge */}
      {component.isPremium && (
        <div className="absolute top-3 right-3 z-20 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Crown size={12} />
          <span>PRO</span>
        </div>
      )}

      {/* Type Badge */}
      <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-xs font-medium">
        {component.type}
      </div>

      <div className="aspect-video overflow-hidden relative">
        <img 
          src={component.image} 
          alt={component.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
            View Details <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              {component.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
              {component.name}
            </h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            component.price === 'Free' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'bg-white/10 text-white border border-white/20'
          }`}>
            {component.price}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <img src={component.authorAvatar} alt={component.authorName} className="w-6 h-6 rounded-full" />
            <span className="text-sm text-gray-400">{component.authorName}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{component.views} views</span>
            <span>•</span>
            <span>{component.saves} saves</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentCard;
