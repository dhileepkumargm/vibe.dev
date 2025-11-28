import React from 'react';

const EventLabel = () => {
  return (
    <div className="text-cyan-400 text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col sm:flex-row">
      <span className="whitespace-nowrap flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 mr-2"
        >
          <path 
            d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <a 
          className="underline underline-offset-2 hover:text-cyan-300 mr-1" 
          data-discover="true" 
          href="/events/webinar"
        >
          Live webinar
        </a>
        {' '}tomorrow at 3 PM EST
      </span>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-medium">
          Free
        </span>
        <span className="text-xs text-white/60">•</span>
        <span className="text-xs text-white/70">234 registered</span>
      </div>
    </div>
  );
};

export default EventLabel;
