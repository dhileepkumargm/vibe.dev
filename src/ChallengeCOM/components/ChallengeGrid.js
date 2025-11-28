import React from 'react';
import ChallengeCard from './ChallengeCard';

export default function ChallengeGrid({ challenges, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-[400px]" />
          </div>
        ))}
      </div>
    );
  }

  if (challenges.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex p-6 rounded-full bg-white/5 border border-white/10 mb-6">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">No Challenges Found</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          We couldn't find any challenges matching your criteria. Try adjusting your filters or check back later for new challenges.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {challenges.map((challenge, index) => (
        <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
      ))}
    </div>
  );
}
