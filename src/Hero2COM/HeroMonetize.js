import React from 'react';

const FeatureCard = ({ icon, title, description, iconBg, iconColor }) => (
  <div className="flex items-center gap-4 bg-black/40 rounded-xl px-5 py-4 backdrop-blur-sm shadow-sm transition-colors border border-white/5 hover:bg-black/60">
    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg} ${iconColor} flex-shrink-0`}>
      {icon}
    </div>
    <div className="pr-4">
      <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
      <p className="text-sm text-neutral-300 whitespace-nowrap">{description}</p>
    </div>
  </div>
);

const MarqueeRow = ({ children, duration = "60s", reverse = false }) => (
  <div 
    className="group flex overflow-hidden flex-row mb-3" 
    aria-label="brand scrolling feature" 
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, transparent 100%)',
      '--duration': duration
    }}
  >
    <div className={`flex items-center gap-6 shrink-0 animate-marquee-left group-hover:pause pr-6 ${reverse ? 'direction-reverse' : ''}`}>
      {children}
    </div>
    <div className={`flex items-center gap-6 shrink-0 animate-marquee-left group-hover:pause pr-6 ${reverse ? 'direction-reverse' : ''}`} aria-hidden="true">
      {children}
    </div>
    <div className={`flex items-center gap-6 shrink-0 animate-marquee-left group-hover:pause pr-6 ${reverse ? 'direction-reverse' : ''}`} aria-hidden="true">
      {children}
    </div>
  </div>
);

export default function HeroMonetize() {
  return (
    <section className="bg-[#0a0a0c]/90 backdrop-blur-md border border-white/10 min-w-[300px] w-full min-h-[300px] flex-1 rounded-3xl overflow-hidden px-5 py-6 flex flex-col" aria-labelledby="hero-monetize-heading">
      
      <div className="flex flex-col gap-[10px] mt-auto mb-6">
        {/* Row 1 */}
        <MarqueeRow duration="60s">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>}
            title="Build Your Brand"
            description="Establish yourself as a trusted creator in the developer community."
            iconBg="bg-white/10"
            iconColor="text-white"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v6h6"></path><path d="M21 21v-6h-6"></path><path d="M3 9c4.5-8 13.5 8 18 0"></path><path d="M3 15c4.5-8 13.5 8 18 0"></path></svg>}
            title="Grow Your Audience"
            description="Reach engaged builders actively exploring new interfaces."
            iconBg="bg-amber-400/15"
            iconColor="text-amber-300"
          />
        </MarqueeRow>

        {/* Row 2 */}
        <MarqueeRow duration="70s" reverse>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>}
            title="Keep 100% Earnings"
            description="Sell products, make referrals, and keep every cent you make."
            iconBg="bg-emerald-500/15"
            iconColor="text-emerald-300"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><path d="M5 9h6"></path><path d="M13 15h6"></path><path d="M5 21h14"></path></svg>}
            title="Smart Income Streams"
            description="Diversify with subscriptions, tips, and premium asset sales."
            iconBg="bg-teal-400/15"
            iconColor="text-teal-300"
          />
        </MarqueeRow>

        {/* Row 3 */}
        <MarqueeRow duration="88s">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 9"></path><path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"></path></svg>}
            title="Reach Developers"
            description="Connect with thousands of developers and vibe coders instantly."
            iconBg="bg-indigo-500/15"
            iconColor="text-indigo-300"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M7 9h4l2 6 2-6h2"></path><path d="M7 15h10"></path></svg>}
            title="Amplify Exposure"
            description="Get surfaced in curated feeds and themed discovery lanes."
            iconBg="bg-fuchsia-500/15"
            iconColor="text-fuchsia-300"
          />
        </MarqueeRow>
      </div>

      <h2 id="hero-monetize-heading" className="mt-auto mb-2 text-3xl font-bold font-display text-gray-100 text-center relative z-10">
        📈 Why Publish on <span className="text-yellow-300 font-extrabold tracking-tight drop-shadow-[0_0_6px_rgba(250,204,21,0.35)]">Vibe.dev</span> ?
      </h2>
    </section>
  );
}