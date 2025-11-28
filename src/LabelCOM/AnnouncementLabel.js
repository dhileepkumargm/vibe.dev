import React from 'react';

const AnnouncementLabel = () => {
  return (
    <div className="text-blue-400 text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col sm:flex-row">
      <span className="whitespace-nowrap flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 mr-2"
        >
          <path 
            d="M12 2C13.1046 2 14 2.89543 14 4V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H10V4C10 2.89543 10.8954 2 12 2ZM12 8V12H8V10H6V18H18V10H16V12H12V8Z" 
            fill="currentColor"
          />
        </svg>
        <a 
          className="underline underline-offset-2 hover:text-blue-300 mr-1" 
          data-discover="true" 
          href="/announcements"
        >
          New features released
        </a>
        {' '}check them out!
      </span>
    </div>
  );
};

export default AnnouncementLabel;
