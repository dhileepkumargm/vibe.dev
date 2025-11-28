import React from 'react';

// Updated HeroSecnodLine: removed tag marquees and replaced with new intro + stats section
export default function HeroSecnodLine() {
  return (
    <section className="relative z-10 px-4 mx-auto mb-24 sm:container sm:px-0">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-12 md:my-16 max-w-4xl mx-auto px-4" style={{ filter: 'blur(0px)', transform: 'none' }}>
          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:bg-black/40 hover:border-white/20 hover:shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">100k+</div>
            <div className="text-xs sm:text-sm text-neutral-300 text-center">Monthly Users</div>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:bg-black/40 hover:border-white/20 hover:shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">6k+</div>
            <div className="text-xs sm:text-sm text-neutral-300 text-center">Components</div>
          </div>
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:bg-black/40 hover:border-white/20 hover:shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">124k+</div>
            <div className="text-xs sm:text-sm text-neutral-300 text-center">Monthly Downloads</div>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:bg-black/40 hover:border-white/20 hover:shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
            <div className="text-xs sm:text-sm text-neutral-300 text-center">Contributors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
