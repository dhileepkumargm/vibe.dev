import React from 'react';

/**
 * HoverPreviewCard
 * Simplified card: static image with a "Get Prompt" CTA overlay. All video logic removed.
 * Props:
 *  - item: { id, title, href, image }
 */
export default function HoverPreviewCard({ item, size = 'sm', onPromptClick }) {

  const sizeMap = {
    xxs: {
      card: 'w-[150px] min-w-[150px] h-[135px]',
      btn: 'text-[9px] px-3 py-1.5'
    },
    xs: {
      card: 'w-[170px] min-w-[170px] h-[150px]',
      btn: 'text-[10px] px-3.5 py-2'
    },
    sm: {
      card: 'w-[200px] min-w-[200px] h-[180px]',
      btn: 'text-xs px-4 py-2'
    },
    md: {
      card: 'w-[240px] min-w-[240px] h-[215px]',
      btn: 'text-sm px-5 py-2.5'
    },
    lg: {
      card: 'w-[300px] min-w-[300px] h-[270px]',
      btn: 'text-base px-6 py-3'
    }
  };
  const sz = sizeMap[size] || sizeMap.sm;

  return (
    <article
      className={`group relative ${sz.card} flex-shrink-0 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1`}
      aria-label={`${item.title} card`}
      tabIndex={0}
    >
      {/* Animated Gradient Border Background */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-purple-500/20 opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      {/* Main Card Content */}
      <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[#0a0a0c] ring-1 ring-white/10 shadow-xl group-hover:shadow-purple-500/20 transition-all duration-500">
        
        {/* Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
            <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            draggable={false}
            />
            {/* Gradient Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Glass Overlay / Interaction Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
            
            {/* Floating Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onPromptClick) {
                  onPromptClick(item);
                } else if (item?.href) {
                  window.location.assign(item.href);
                }
              }}
              className={`
                relative overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium tracking-wide
                shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
                hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300
                ${sz.btn}
              `}
              aria-label={`Get prompt for ${item.title}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Prompt
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </button>
        </div>
      </div>
    </article>
  );
}
