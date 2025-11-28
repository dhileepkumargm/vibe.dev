import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles, GlowingCard, GradientText, HolographicButton } from '../components/ui';
import { CinematicSlider, ComponentsGrid, FilterBar } from '../ComponentsCOM';

const Components = () => {
  const [filters, setFilters] = useState({});

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingParticles density={60} colors={['#06b6d4', '#8b5cf6', '#ec4899']} />

      <div className="relative z-10 px-4 md:px-8 lg:px-14 py-16 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center space-y-6 mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl"
            >
              <span className="text-purple-400 font-semibold text-sm tracking-wider">
                ⚡ 500+ PREMIUM COMPONENTS
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <GradientText gradient="default">
                UI Components
              </GradientText>
            </h1>

            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover handcrafted components with stunning animations.
              <br />
              <span className="text-cyan-400 font-semibold">Copy, paste, and ship faster.</span>
            </p>
          </div>

          <CinematicSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <GlowingCard glowColor="cyan" className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Browse All Components</h2>
                <p className="text-slate-400">Filter by category, framework, or complexity</p>
              </div>
              <HolographicButton>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Request Component
              </HolographicButton>
            </div>
          </GlowingCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="mb-8">
            <FilterBar filters={filters} onFilterChange={setFilters} />
          </div>

          <ComponentsGrid filters={filters} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <GlowingCard glowColor="purple" className="text-center">
            <div className="p-16">
              <h2 className="text-5xl font-bold mb-6">
                <GradientText gradient="cosmic">Can't Find What You Need?</GradientText>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Request a custom component or contribute your own to the library
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <HolographicButton size="lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Request Component
                </HolographicButton>
                <HolographicButton variant="ghost" size="lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M upload 16l-6-6m0 0l-6 6m6-6v18" />
                  </svg>
                  Contribute
                </HolographicButton>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Components;
