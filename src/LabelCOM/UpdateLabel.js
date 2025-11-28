import React from 'react';

const UpdateLabel = () => {
  return (
    <button 
      className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg text-sm font-medium text-purple-300 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/30 transition-all duration-300 cursor-pointer group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500"
      >
        <path 
          d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12M12 3V17M12 17L8 13M12 17L16 13" 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      Version 2.0 is now available - Update now
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default UpdateLabel;
