import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ComponentCard from './ComponentCard';
import FilterBar from './FilterBar';
import { componentsData } from './data';

const ComponentsGrid = () => {
  const [activeType, setActiveType] = useState("All");
  const [activePrice, setActivePrice] = useState("All");

  const filteredComponents = useMemo(() => {
    return componentsData.filter((item) => {
      const typeMatch = activeType === "All" || item.type === activeType;
      const priceMatch = activePrice === "All" || 
        (activePrice === "Free" && item.price === "Free") ||
        (activePrice === "Premium" && item.isPremium);
      return typeMatch && priceMatch;
    });
  }, [activeType, activePrice]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Resources
            </h2>
            <p className="text-gray-400 max-w-xl">
              Discover our collection of premium UI elements, templates, and plugins designed to elevate your workflow.
            </p>
          </div>
        </div>

        <FilterBar 
          activeType={activeType} 
          onTypeChange={setActiveType}
          activePrice={activePrice}
          onPriceChange={setActivePrice}
        />

        <motion.div 
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredComponents.map((component) => (
              <motion.div 
                layout
                key={component.id} 
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ComponentCard component={component} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredComponents.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-400">No items found matching your filters.</h3>
            <button 
              onClick={() => {setActiveType("All"); setActivePrice("All");}}
              className="mt-4 text-blue-500 hover:text-blue-400"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <button className="px-6 py-3 border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors w-full">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComponentsGrid;
