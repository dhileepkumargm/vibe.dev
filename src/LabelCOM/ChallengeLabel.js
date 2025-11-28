import React from 'react';

const ChallengeLabel = () => {
  return (
    <div className="text-orange-400 text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col sm:flex-row">
      <span className="whitespace-nowrap flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 mr-2"
        >
          <path 
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <a 
          className="underline underline-offset-2 hover:text-orange-300 mr-1" 
          data-discover="true" 
          href="/challenges"
        >
          Weekly Challenge
        </a>
        {' '}starts tomorrow!
      </span>
      <div className="flex -space-x-2 ml-2">
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-orange-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/challenger1"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="Challenger 1" 
              src="https://avatars.githubusercontent.com/u/123456789?v=4&s=24" 
            />
          </span>
        </a>
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-orange-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/challenger2"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="Challenger 2" 
              src="https://avatars.githubusercontent.com/u/987654321?v=4&s=24" 
            />
          </span>
        </a>
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-orange-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/challenger3"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="Challenger 3" 
              src="https://avatars.githubusercontent.com/u/456789123?v=4&s=24" 
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ChallengeLabel;
