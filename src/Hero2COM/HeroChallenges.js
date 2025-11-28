import React from 'react';

const ComponentCard = ({ title, author, image, avatar, views, likes, href }) => (
  <div className="flex-none w-full h-full">
    <div className="block select-none h-full">
      <div className="group relative h-full flex flex-col rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-1">
        
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
          <a aria-label={title} className="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50" href={href}>
            <img alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold text-white truncate tracking-tight">{title}</h3>
              <p className="text-sm text-white/60 truncate mt-1 font-medium">UI Component</p>
            </div>

            {/* Top Right Stats */}
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10 shadow-lg">
              <div className="flex items-center text-xs text-white gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span className="font-semibold">{views}</span>
              </div>
              <div className="w-px h-3 bg-white/20"></div>
              <div className="flex items-center text-xs text-white gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                <span className="font-semibold">{likes}</span>
              </div>
            </div>
          </a>

          {/* Hover Actions */}
          <div className="absolute right-3 bottom-20 flex flex-col gap-2.5 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
            <button type="button" aria-label="Like" className="size-10 flex items-center justify-center rounded-full backdrop-blur-xl border transition-all duration-200 hover:scale-110 bg-white/10 text-white border-white/20 hover:bg-white/20 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
            </button>
            <button type="button" aria-label="Share" className="size-10 flex items-center justify-center rounded-full backdrop-blur-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 bg-white/[0.02] border-t border-white/5 mt-auto backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <a className="shrink-0" href={href}>
              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10 hover:ring-white/30 transition-all shadow-md">
                <img className="w-full h-full object-cover" alt={author} src={avatar} />
              </div>
            </a>
            <div className="flex-1 min-w-0">
              <a className="block text-sm font-bold text-white truncate hover:text-blue-400 transition-colors" href={href}>{author}</a>
              <div className="text-xs text-white/40 truncate font-medium">Verified Author</div>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <a className="size-9 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/20" aria-label="View" href={href}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default function HeroChallenges() {
  return (
    <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#0a0a0c]/90 border border-white/10 backdrop-blur-md p-6 lg:p-8 flex flex-col">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" />
          <path d="M100 20V180" stroke="white" strokeWidth="20" />
          <path d="M20 100H180" stroke="white" strokeWidth="20" />
        </svg>
      </div>
      
      <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display text-white mb-2">Trending Components</h2>
          <p className="text-gray-400 max-w-md text-sm">Explore the most popular UI elements used by top developers this week.</p>
        </div>
        <a href="/components" className="text-sm font-medium text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/60 pb-0.5">
          View all components
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto">
        <ComponentCard 
          title="Glassmorphic Card" 
          author="Alex Morgan"
          image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          avatar="https://i.pravatar.cc/150?u=alex"
          views="12.5k"
          likes="842"
          href="/components/glass-card"
        />
        <ComponentCard 
          title="Animated Button" 
          author="Sarah Chen"
          image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
          avatar="https://i.pravatar.cc/150?u=sarah"
          views="8.2k"
          likes="653"
          href="/components/animated-button"
        />
        <ComponentCard 
          title="Dark Mode Toggle" 
          author="Jordan Smith"
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
          avatar="https://i.pravatar.cc/150?u=jordan"
          views="15k"
          likes="1.2k"
          href="/components/dark-mode-toggle"
        />
      </div>
    </div>
  );
}
