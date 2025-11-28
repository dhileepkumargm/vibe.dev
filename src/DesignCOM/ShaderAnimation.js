import React from 'react';

// Simple full-screen dark background component.
// Replaces the previous Three.js shader for a lightweight background.
const DarkBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#050508', // very dark
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
      aria-hidden="true"
    />
  );
};

export default DarkBackground;
