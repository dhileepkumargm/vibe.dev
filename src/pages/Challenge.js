import React, { useMemo } from 'react';
import {
  challenges,
  getPreviousChallenges,
  PreviousChallengeList,
  ActiveChallenge
} from '../ChallengeCOM';

export default function ChallengePage() {
  const prev = useMemo(() => getPreviousChallenges(), []);

  const handleSelect = (c) => {
    alert('Selected challenge: ' + c.title);
  };

  // Active challenge data
  const activeChallenge = {
    title: 'Retro Arcade Game Creator',
    subtitle: 'Craft a browser game from the 80\'s!',
    description: 'Design and code a nostalgic arcade directly in directly in a bower. Use pixel art, simple mechanics, and JavaScript to bring your 8-bit master price to life!',
    startDate: 'Oct 15, 2025',
    endDate: 'Oct 28, 2025',
    participants: '100',
    remainingDays: '13 days left for Submission 😊',
    status: 'Your not joined',
    prizePool: '$10,000',
    hostedBy: '@user1324983',
    joined: '312'
  };

  return (
    <main className="px-4 md:px-8 lg:px-14 py-12 max-w-7xl mx-auto space-y-12">
      {/* Section 1 - Active Challenge */}
      <section className="mb-16">
        <ActiveChallenge challenge={activeChallenge} />
      </section>

      {/* Previous challenges */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold font-display text-slate-100 ml-1">Previous Challenges</h2>
        <PreviousChallengeList items={prev} onSelect={handleSelect} />
      </section>
    </main>
  );
}
