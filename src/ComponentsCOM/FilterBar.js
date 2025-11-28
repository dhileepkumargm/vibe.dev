import React from 'react';
import { motion } from 'framer-motion';

const FilterBar = ({ activeType, onTypeChange, activePrice, onPriceChange }) => {
  const types = ["All", "Component", "Template", "Plugin"];
  const prices = ["All", "Free", "Premium"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
      {/* Type Filter */}
      <div className="flex p-1 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeType === type ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeType === type && (
              <motion.div
                layoutId="activeType"
                className="absolute inset-0 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{type}s</span>
          </button>
        ))}
      </div>

      {/* Price Filter */}
      <div className="flex gap-2">
        {prices.map((price) => (
          <button
            key={price}
            onClick={() => onPriceChange(price)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
              activePrice === price
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600"
            }`}
          >
            {price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
