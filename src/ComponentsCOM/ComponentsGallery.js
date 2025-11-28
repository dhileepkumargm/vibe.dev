import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download, Heart, Code } from 'lucide-react';
import { componentsData } from './componentsData';

export default function ComponentsGallery({ selectedCategory, searchQuery }) {
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    let filtered = componentsData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(comp => comp.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(comp =>
        comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredComponents(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredComponents.map((component, index) => (
            <motion.div
              key={component.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onHoverStart={() => setHoveredId(component.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-8">
                  <div className="text-6xl">{component.icon}</div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === component.id ? 1 : 0,
                    y: hoveredId === component.id ? 0 : 20
                  }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Code className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </motion.div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {component.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {component.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {component.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {component.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {component.likes}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {component.downloads}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredComponents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-2xl text-gray-400">No components found</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
        </motion.div>
      )}
    </div>
  );
}
