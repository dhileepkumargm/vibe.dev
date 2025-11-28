import React from 'react';

const StatusLabel = ({ status = 'live', message = 'All systems operational' }) => {
  const statusConfig = {
    live: {
      color: 'text-green-400',
      hoverColor: 'hover:text-green-300',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      )
    },
    warning: {
      color: 'text-yellow-400',
      hoverColor: 'hover:text-yellow-300',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" fill="none" strokeWidth="2"/>
        </svg>
      )
    },
    error: {
      color: 'text-red-400',
      hoverColor: 'hover:text-red-300',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" fill="none" strokeWidth="2"/>
        </svg>
      )
    }
  };

  const config = statusConfig[status] || statusConfig.live;

  return (
    <div className={`${config.color} text-sm flex items-center gap-2 mb-4 font-medium`}>
      <span className="flex items-center gap-2">
        <div className={`p-1 rounded-full ${config.bgColor} border ${config.borderColor}`}>
          {config.icon}
        </div>
        <span className={`capitalize ${config.hoverColor} transition-colors cursor-pointer`}>
          {status}
        </span>
        <span className="text-white/70">•</span>
        <span className="text-white/80">{message}</span>
      </span>
    </div>
  );
};

export default StatusLabel;
