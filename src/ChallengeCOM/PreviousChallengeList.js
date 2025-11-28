import React from 'react';
import PreviousChallengeCard from './PreviousChallengeCard';

export default function PreviousChallengeList({ items = [], onSelect }) {
  if (!items.length) {
    return (
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold font-display text-slate-100 ml-1">Previous Challenges</h2>
        <div className="text-sm text-slate-500">No previous challenges yet.</div>
      </section>
    );
  }
  
  return (
    <section className="space-y-6 pt-4">
      <h2 className="text-2xl font-bold font-display text-slate-100 ml-1">Previous Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(item => (
          <PreviousChallengeCard key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
