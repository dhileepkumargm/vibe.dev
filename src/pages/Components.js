import React from 'react';
import Footer from '../HeroCOM/Footer';
import { CinematicSlider, ComponentsGrid } from '../ComponentsCOM';

const Components = () => {
  return (
    <section className="min-h-screen relative overflow-hidden text-neutral-200 bg-black">
      {/* Monochrome Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Pure Black Base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Subtle Gray Gradients for Depth */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-white/[0.02] rounded-full blur-[120px] animate-pulse duration-[10s]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-white/[0.03] rounded-full blur-[120px] animate-pulse duration-[12s] delay-1000" />
        
        {/* Noise Texture for Matte Finish */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative z-10">
        <CinematicSlider />
        <ComponentsGrid />
        
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Components;
