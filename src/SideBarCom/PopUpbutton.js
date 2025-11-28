"use client"

import React, { useState } from 'react';
import { cn } from "../lib/utils";

// Ultra-premium glass background for sidebar button
const GlassButtonBg = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
      {/* Primary glass base with ultra blur */}
      <div className="absolute inset-0 bg-white/8 backdrop-blur-3xl rounded-2xl"></div>
      
      {/* Ultra-premium multi-layered glass effect */}
      <div 
        className="absolute inset-0 rounded-2xl
          shadow-[0_0_1px_rgba(255,255,255,0.8),0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(0,0,0,0.1),0_2px_16px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3),inset_1px_0_0_rgba(255,255,255,0.2),inset_-1px_0_0_rgba(0,0,0,0.2)] 
          border border-white/30"
      />
      
      {/* Advanced glass reflection system */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 via-white/5 via-transparent to-black/10"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Premium glass highlights */}
      <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
      <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
      
      {/* Inner glass glow system */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/8 via-white/3 to-transparent rounded-t-2xl"></div>
      <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/5 to-transparent rounded-b-2xl"></div>
      
      {/* Advanced glass color spectrum */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/3 via-purple-500/4 via-pink-500/3 to-blue-500/3"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/2 via-transparent to-violet-500/2"></div>
      
      {/* Frosted glass texture overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-30 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_25%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_25%)]"></div>
      
      {/* Advanced glass distortion filter */}
      <UltraGlassFilter />
    </div>
  );
};

// Ultra-premium glass distortion SVG filter system
const UltraGlassFilter = () => {
  return (
    <svg className="hidden">
      <defs>
        {/* Ultra-advanced glass distortion filter */}
        <filter
          id="sidebar-glass-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          {/* Primary glass turbulence */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.015"
            numOctaves="3"
            seed="8"
            result="primaryNoise"
          />

          {/* Secondary fine detail turbulence */}
          <feTurbulence
            type="turbulence"
            baseFrequency="0.08 0.08"
            numOctaves="2"
            seed="15"
            result="detailNoise"
          />

          {/* Combine noise patterns (multiply blend) */}
          <feBlend
            in="primaryNoise"
            in2="detailNoise"
            mode="multiply"
            result="combinedNoise"
          />

          {/* Advanced gaussian blur for smooth glass effect */}
          <feGaussianBlur in="combinedNoise" stdDeviation="1.5" result="smoothGlass" />

          {/* Primary glass displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothGlass"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
            result="glassDistortion"
          />

          {/* Final glass blur for light refraction */}
          <feGaussianBlur in="glassDistortion" stdDeviation="0.3" result="refractionBlur" />

          {/* Glass color matrix for premium tinting */}
          <feColorMatrix
            in="refractionBlur"
            type="matrix"
            values="1.02 0.01 0.02 0 0.01
                    0.01 1.03 0.02 0 0.01
                    0.02 0.02 1.05 0 0.02
                    0 0 0 0.98 0"
            result="glassColorEffect"
          />

          {/* Final composition */}
          <feComposite in="glassColorEffect" in2="glassColorEffect" operator="over" />
        </filter>

        {/* Premium glass reflection filter */}
        <filter
          id="sidebar-glass-reflection"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="reflectionBlur" />
          <feOffset in="reflectionBlur" dx="0" dy="-1" result="reflectionOffset" />
          <feFlood floodColor="rgba(255,255,255,0.1)" result="reflectionColor" />
          <feComposite in="reflectionColor" in2="reflectionOffset" operator="in" result="reflection" />
          <feComposite in="SourceGraphic" in2="reflection" operator="over" />
        </filter>

        {/* Ultra-premium glow filter */}
        <filter
          id="sidebar-premium-glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="glowBlur" />
          <feColorMatrix
            in="glowBlur"
            type="matrix"
            values="1 0 1 0 0
                    0 1 1 0 0
                    1 1 1 0 0
                    0 0 0 0.4 0"
            result="glowColor"
          />
          <feComposite in="SourceGraphic" in2="glowColor" operator="over" />
        </filter>
      </defs>
    </svg>
  );
};

// Ultra-premium sidebar toggle button component
const SidebarToggleButton = ({ className, onClick, isOpen = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn(
      "ml-px flex items-center fixed bottom-4 left-4 transition-all duration-300",
      isOpen ? "z-30" : "z-50", // Lower z-index when sidebar is open
      className
    )}>
      <button 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-transparent text-white cursor-pointer flex flex-col items-center p-3 rounded-2xl
          hover:bg-white/5 transition-all duration-500 group
          transform hover:scale-105 hover:-translate-y-1
          backdrop-blur-3xl border border-white/20
          hover:shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"
        style={{ filter: 'url(#sidebar-glass-distortion)' }}
      >
        {/* Ultra-premium Glass Background */}
        <GlassButtonBg />
        
        {/* Avatar Section */}
        <div className="relative z-10 flex select-none items-center justify-center mb-2">
          <div className="relative w-6 h-6 overflow-hidden rounded-full shrink-0 bg-white/10 backdrop-blur-sm border border-white/20
            group-hover:scale-110 transition-all duration-300
            shadow-[0_0_15px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
            style={{ filter: 'url(#sidebar-glass-reflection)' }}
          >
            <img 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110" 
              src="https://avatars.githubusercontent.com/u/189240654"
              alt="User Avatar"
            />
            {/* Avatar glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
        </div>
        
        {/* Sidebar Icon */}
        <div className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-lg">
          <svg 
            className={cn(
              "w-5 h-5 transition-all duration-500 ease-out",
              isOpen ? "rotate-180" : "rotate-0",
              "group-hover:scale-110"
            )} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M4 6h16M4 12h16M4 18h7" 
            />
          </svg>
        </div>
        
        {/* Premium hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0ms' }}></div>
        <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '200ms' }}></div>
        <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '400ms' }}></div>
      </button>
    </div>
  );
};

// Main popup button component for easy import
const PopUpButton = ({ onToggleSidebar, isSidebarOpen = false }) => {
  return (
    <SidebarToggleButton 
      onClick={onToggleSidebar}
      isOpen={isSidebarOpen}
    />
  );
};

export { PopUpButton, SidebarToggleButton, GlassButtonBg, UltraGlassFilter };
export default PopUpButton;
