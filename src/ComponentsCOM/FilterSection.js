import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Components' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'cards', label: 'Cards' },
  { id: 'forms', label: 'Forms' },
  { id: 'animations', label: 'Animations' },
  { id: 'layouts', label: 'Layouts' },
  { id: 'effects', label: 'Effects' }
];

export default function FilterSection({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
  return (
    <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
