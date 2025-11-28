import React from 'react';
import ChallengeCard from './ChallengeCard';

export default function ChallengeList({ challenges = [], onSelect }) {
  if (!challenges.length) {
    return <p className="text-xs text-slate-500">No challenges available.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map(ch => (
        <ChallengeCard key={ch.id} challenge={ch} onSelect={onSelect} />
      ))}
    </div>
  );
}
