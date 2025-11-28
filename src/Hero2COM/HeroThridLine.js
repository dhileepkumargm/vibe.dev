import React from 'react';
import HeroMonetize from './HeroMonetize';
import HeroTopCreators from './HeroTopCreators';

export default function HeroThridLine() {
  return (
    <section className="relative z-10 flex flex-col gap-8 px-4 mx-auto mb-24 sm:container sm:px-0">
      <div className="flex flex-wrap gap-4">
        
        <HeroMonetize />
        <HeroTopCreators/>
        
      </div>
    </section>
  );
}
