import React from 'react';

const CreatorCard = ({ initials, name, niche, score, gradient, shadowColor, scoreColor, scoreBg }) => (
  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pr-5 pl-2 py-2 backdrop-blur-sm hover:bg-white/10 transition-colors shrink-0">
    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg ${shadowColor}`}>
      {initials}
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-white leading-tight">{name}</span>
      <span className="text-xs text-gray-400">{niche}</span>
    </div>
    <div className={`ml-2 flex items-center gap-1 text-xs font-medium ${scoreColor} ${scoreBg} px-2 py-0.5 rounded-full`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
      {score}
    </div>
  </div>
);

const MarqueeRow = ({ children, duration = "40s", reverse = false }) => (
  <div 
    className="group flex overflow-hidden" 
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      '--duration': duration
    }}
  >
    <div className={`flex gap-4 pr-4 animate-marquee-left group-hover:pause ${reverse ? 'direction-reverse' : ''}`}>
      {children}
    </div>
    <div className={`flex gap-4 pr-4 animate-marquee-left group-hover:pause ${reverse ? 'direction-reverse' : ''}`} aria-hidden="true">
      {children}
    </div>
    <div className={`flex gap-4 pr-4 animate-marquee-left group-hover:pause ${reverse ? 'direction-reverse' : ''}`} aria-hidden="true">
      {children}
    </div>
  </div>
);

export default function HeroTopCreators() {
  return (
    <div className="bg-[#0a0a0c]/80 backdrop-blur-md border border-white/10 min-h-[340px] min-w-[300px] w-full flex-1 rounded-3xl max-w-[700px] overflow-hidden relative px-6 pt-6 pb-8 flex flex-col">
      
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-fuchsia-600/10 blur-3xl rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-indigo-600/10 blur-3xl rounded-full mix-blend-screen"></div>
      </div>

      <h2 className="mb-6 text-3xl font-bold font-display text-gray-100 text-center relative z-10 tracking-tight">
        Top Creators
      </h2>
      
      <div className="flex flex-col gap-5 relative z-10 mt-auto">
        {/* Row 1 */}
        <MarqueeRow duration="45s">
           <CreatorCard 
             initials="AC" name="Ava Collins" niche="UI Motion" score="98"
             gradient="from-purple-500 to-indigo-600" shadowColor="shadow-purple-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="LP" name="Liam Patel" niche="3D Design" score="95"
             gradient="from-blue-500 to-cyan-500" shadowColor="shadow-blue-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="MC" name="Mia Chen" niche="Illustration" score="94"
             gradient="from-pink-500 to-rose-500" shadowColor="shadow-pink-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="NG" name="Noah García" niche="Brand Systems" score="92"
             gradient="from-amber-500 to-orange-600" shadowColor="shadow-amber-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
        </MarqueeRow>

        {/* Row 2 */}
        <MarqueeRow duration="55s" reverse>
           <CreatorCard 
             initials="ZM" name="Zoe Martin" niche="Product UX" score="97"
             gradient="from-emerald-500 to-teal-600" shadowColor="shadow-emerald-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="ER" name="Ethan Rossi" niche="AI Gen Art" score="93"
             gradient="from-violet-500 to-purple-600" shadowColor="shadow-violet-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="RS" name="Ruby Singh" niche="Accessibility" score="91"
             gradient="from-red-500 to-orange-500" shadowColor="shadow-red-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
           <CreatorCard 
             initials="KO" name="Kai Okada" niche="Shaders" score="96"
             gradient="from-cyan-500 to-blue-600" shadowColor="shadow-cyan-500/20"
             scoreColor="text-emerald-400" scoreBg="bg-emerald-400/10"
           />
        </MarqueeRow>
      </div>
    </div>
  );
}
