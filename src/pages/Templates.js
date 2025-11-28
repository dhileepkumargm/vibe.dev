import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles, GlowingCard, GradientText, HolographicButton } from '../components/ui';
import {
  TemplateGrid,
  TemplateFilters,
  TemplateCategoryTabs,
  templates as templateData,
  getCategories
} from '../TemCOM';

export default function Templates() {
  const categories = useMemo(() => getCategories(), []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSet, setFilteredSet] = useState(templateData);
  const [filterState, setFilterState] = useState({});

  const handleFiltersChange = useCallback((list, state) => {
    setFilterState(state);
    if (activeCategory === 'all') {
      setFilteredSet(list);
    } else {
      setFilteredSet(list.filter(t => t.category === activeCategory));
    }
  }, [activeCategory]);

  const onCategoryChange = (cat) => {
    setActiveCategory(cat);
    setFilteredSet(prev => {
      let base = [...templateData];
      const { query = '', category = 'all', selectedTags = [], difficulty = 'all' } = filterState;
      if (query.trim()) {
        const q = query.toLowerCase();
        base = base.filter(t =>
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q)) ||
          (t.tags || []).some(tag => tag.toLowerCase().includes(q))
        );
      }
      if (category !== 'all') base = base.filter(t => t.category === category);
      if (difficulty !== 'all') base = base.filter(t => (t.difficulty || '').toLowerCase() === difficulty);
      if (selectedTags.length) base = base.filter(t => selectedTags.every(st => (t.tags || []).includes(st)));
      if (cat !== 'all') base = base.filter(t => t.category === cat);
      return base;
    });
  };

  const handleSelectTemplate = (template) => {
    alert(`Selected template: ${template.title}`);
  };

  const handleLike = (liked, template) => {
    console.log('Template like toggled', template.id, liked);
  };

  const handleShareTemplate = (template) => {
    console.log('Template share action', template.id);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingParticles density={50} colors={['#f97316', '#8b5cf6', '#06b6d4']} />

      <main className="relative z-10 px-4 md:px-8 lg:px-14 py-16 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl"
          >
            <span className="text-orange-400 font-semibold text-sm tracking-wider">
              🚀 PRODUCTION-READY TEMPLATES
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <GradientText gradient="fire">
              Templates
            </GradientText>
          </h1>

          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Beautiful, responsive templates for your next project.
            <br />
            <span className="text-orange-400 font-semibold">Launch faster, build better.</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <HolographicButton size="lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download All
            </HolographicButton>
            <HolographicButton variant="ghost" size="lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Preview Live
            </HolographicButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8 mb-12"
        >
          <GlowingCard glowColor="orange" className="p-6">
            <TemplateCategoryTabs
              categories={categories}
              value={activeCategory}
              onChange={onCategoryChange}
            />
          </GlowingCard>

          <TemplateFilters
            allTemplates={templateData}
            onChange={handleFiltersChange}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TemplateGrid
            templates={filteredSet}
            onSelect={handleSelectTemplate}
            onLike={handleLike}
            onShare={handleShareTemplate}
          />
        </motion.div>

        {filteredSet.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <GlowingCard glowColor="purple">
              <div className="p-16">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-4">No Templates Found</h3>
                <p className="text-xl text-slate-400 mb-8">
                  Try adjusting your filters or browse all templates
                </p>
                <HolographicButton onClick={() => {
                  setActiveCategory('all');
                  setFilteredSet(templateData);
                }}>
                  Reset Filters
                </HolographicButton>
              </div>
            </GlowingCard>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <GlowingCard glowColor="green" className="text-center">
            <div className="p-16">
              <h2 className="text-5xl font-bold mb-6">
                <GradientText gradient="forest">Need a Custom Template?</GradientText>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get a tailored template designed specifically for your project
              </p>
              <HolographicButton size="xl" variant="secondary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact Us
              </HolographicButton>
            </div>
          </GlowingCard>
        </motion.div>
      </main>
    </div>
  );
}
