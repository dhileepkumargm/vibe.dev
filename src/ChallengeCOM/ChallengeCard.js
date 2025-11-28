import React from 'react';

export default function ChallengeCard({ challenge, onSelect }) {
  if (!challenge) return null;
  const progress = Math.min(100, Math.round((challenge.taken / challenge.spots) * 100));
  return (
    <div
      onClick={() => onSelect && onSelect(challenge)}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 cursor-pointer select-none hover:border-white/20 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-100 leading-tight line-clamp-2">{challenge.title}</h3>
        <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-slate-200">{challenge.status}</span>
      </div>
      <p className="mt-2 text-xs text-slate-400 line-clamp-3">{challenge.description}</p>
      <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400">
        <span>${challenge.prizePool.toLocaleString()}</span>
        <span className="h-1 w-1 rounded-full bg-slate-400" />
        <span>{challenge.taken}/{challenge.spots} spots</span>
        <span className="h-1 w-1 rounded-full bg-slate-400" />
        <span>Hosted by {challenge.hostedBy}</span>
      </div>
      <div className="mt-4 h-1.5 rounded-full bg-white/10 backdrop-blur-xl overflow-hidden border border-white/10">
        <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg" style={{ width: progress + '%' }} />
      </div>
    </div>
  );
}
