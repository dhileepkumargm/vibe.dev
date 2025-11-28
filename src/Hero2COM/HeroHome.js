import React from 'react';
import Herofristline from './Herofristline';
import HeroSecnodLine from './HeroSecnodLine';
import HeroThridLine from './HeroThridLine';
import HeroFourLine from './HeroFourLine';

export default function HeroHome(){
  return (
    <div className="flex flex-col w-full">
      <Herofristline />
      {/* <HeroSecnodLine /> */}
      <HeroThridLine />
      <HeroFourLine />
    </div>
  );
}

