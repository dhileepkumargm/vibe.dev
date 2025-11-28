import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChallengeExplorer({ onSearch, totalChallenges, activeChallenges, totalPrizes }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#050508]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px] animate-pulse duration-[4s]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[35vw] h-[35vw] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse duration-[5s] delay-700" />
        <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[700px]">
        <div className="text-center mb-12 md:mb-20 relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/70 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Challenge Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Compete. Create. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Conquer
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Join design and code challenges hosted by top companies and creators. Win prizes, build your portfolio, and showcase your skills.
          </p>
        </div>

        <div className="w-full max-w-5xl relative group perspective-1000">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

          <div className="relative bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl ring-1 ring-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-10">
              <div className="w-full transform transition-all duration-300 hover:scale-[1.01]">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search challenges..."
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                  <button className="absolute right-3 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  icon={
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  }
                  value={totalChallenges}
                  label="Total Challenges"
                  color="from-yellow-400 to-orange-500"
                />
                <StatCard
                  icon={
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  }
                  value={activeChallenges}
                  label="Active Now"
                  color="from-green-400 to-emerald-500"
                />
                <StatCard
                  icon={
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                    </svg>
                  }
                  value={`$${totalPrizes}`}
                  label="In Prizes"
                  color="from-cyan-400 to-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, color }) {
  return (
    <div className="relative group">
      <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-3`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}
