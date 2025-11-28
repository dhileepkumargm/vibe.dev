import React from 'react';

const PriceLabel = () => {
  return (
    <button 
      className="inline-flex items-center px-3 py-1 mb-8 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs font-normal text-neutral-600 dark:text-neutral-400 opacity-0 transform translate-y-4 transition-all duration-700 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 cursor-pointer" 
      style={{
        transitionDelay: '-100ms',
        transitionProperty: 'opacity, transform',
        opacity: 1,
        transform: 'translateY(0px)'
      }}
    >
      Price will increase to $20/month soon. Lock in your current rate.
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-arrow-right h-3 w-3 ml-2"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default PriceLabel;
