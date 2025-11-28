import React from 'react';

export default function PreviousChallengeCard({ item, onSelect }) {
  if (!item) return null;
  return (
    <div
      onClick={() => onSelect && onSelect(item)}
      className="relative w-full group rounded-3xl overflow-hidden transition-all duration-300 flex bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 cursor-pointer hover:shadow-2xl"
    >
      {/* Cover */}
      <div className="absolute inset-0">
        <div
          className="bg-cover scale-105 group-hover:scale-110 transition-transform w-full h-full bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${item.cover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-800/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col min-h-[380px]">
        <h3 className="mt-6 mb-4 text-2xl font-bold tracking-tight text-slate-50 font-display line-clamp-2">{item.title}</h3>
        <div className="mb-2 text-sm italic font-medium text-slate-300 group-hover:text-slate-200 transition-colors line-clamp-2">{item.tagline}</div>
        <p className="text-sm text-slate-400 line-clamp-3 max-w-[650px]">{item.description}</p>
        <div className="flex flex-wrap items-end gap-6 font-semibold mt-auto pt-6 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
              <CalendarIcon className="w-4 h-4" /> {item.date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
              <UsersIcon className="w-4 h-4" /> {item.participants}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="6" width="18" height="16" rx="2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
    </svg>
  );
}
