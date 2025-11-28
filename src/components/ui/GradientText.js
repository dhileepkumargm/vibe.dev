import React from 'react';

export default function GradientText({ children, className = '', gradient = 'default' }) {
  const gradients = {
    default: 'from-cyan-400 via-blue-500 to-purple-600',
    fire: 'from-orange-500 via-red-500 to-pink-500',
    ocean: 'from-blue-400 via-cyan-500 to-teal-500',
    sunset: 'from-yellow-400 via-orange-500 to-red-500',
    forest: 'from-green-400 via-emerald-500 to-teal-600',
    cosmic: 'from-purple-400 via-pink-500 to-rose-500',
    rainbow: 'from-red-500 via-yellow-500 to-green-500'
  };

  return (
    <span className={`bg-gradient-to-r ${gradients[gradient]} text-transparent bg-clip-text font-bold ${className}`}>
      {children}
    </span>
  );
}
