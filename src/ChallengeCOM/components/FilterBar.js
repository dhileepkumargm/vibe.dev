import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All Challenges', icon: '🎯' },
  { id: 'ui-components', label: 'UI Components', icon: '🎨' },
  { id: 'plugins', label: 'Plugins', icon: '🔌' },
  { id: 'templates', label: 'Templates', icon: '📐' },
  { id: 'full-projects', label: 'Full Projects', icon: '🚀' }
];

const statuses = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'voting', label: 'Voting' },
  { id: 'ended', label: 'Ended' }
];

export default function FilterBar({ filters, onFilterChange }) {
  const activeCategory = filters.category || 'all';
  const activeStatus = filters.status || 'all';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange({
              ...filters,
              category: category.id === 'all' ? null : category.id
            })}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 border border-transparent'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm font-medium text-gray-400">Status:</span>
        {statuses.map((status) => (
          <button
            key={status.id}
            onClick={() => onFilterChange({
              ...filters,
              status: status.id === 'all' ? null : status.id
            })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeStatus === status.id
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
}
