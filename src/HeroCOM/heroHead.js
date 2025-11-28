"use client"

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from "../lib/utils";
import { useAuth } from "../context/AuthContext";


// Ultra-high quality glass morphism background
const ModernHeaderBg = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      {/* Primary glass base with ultra blur */}
      <div className="absolute inset-0 bg-white/8 backdrop-blur-3xl"></div>
      
      {/* Ultra-premium multi-layered glass effect */}
      <div 
        className="absolute inset-0 
          shadow-[0_0_1px_rgba(255,255,255,0.8),0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(0,0,0,0.1),0_2px_16px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3),inset_1px_0_0_rgba(255,255,255,0.2),inset_-1px_0_0_rgba(0,0,0,0.2)] 
          border-t border-white/30 border-b border-black/30 border-l border-white/10 border-r border-white/10"
      />
      
      {/* Advanced glass reflection system */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 via-transparent to-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Premium glass highlights */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Inner glass glow system */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/8 via-white/3 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/5 to-transparent"></div>
      
      {/* Ultra-premium glass shadow system */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
      <div className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      
      {/* Advanced glass color spectrum */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/4 via-pink-500/3 to-blue-500/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/2 via-transparent to-violet-500/2"></div>
      
      {/* Frosted glass texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_25%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_25%)]"></div>
      
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
        {/* Container glass filter for the new glass effect */}
        <filter
          id="container-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.8 0"
            result="glassEffect"
          />
          <feComposite in="SourceGraphic" in2="glassEffect" operator="over" />
        </filter>

        {/* Ultra-advanced glass distortion filter */}
        <filter
          id="ultra-glass-distortion"
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
            seed="5"
            result="primaryNoise"
          />

          {/* Secondary fine detail turbulence */}
          <feTurbulence
            type="turbulence"
            baseFrequency="0.08 0.08"
            numOctaves="2"
            seed="12"
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
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
            result="glassDistortion"
          />

          {/* Secondary micro-displacement for ultra realism */}
          <feDisplacementMap
            in="glassDistortion"
            in2="detailNoise"
            scale="2"
            xChannelSelector="B"
            yChannelSelector="A"
            result="microDistortion"
          />

          {/* Final glass blur for light refraction */}
          <feGaussianBlur in="microDistortion" stdDeviation="0.3" result="refractionBlur" />

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
          id="glass-reflection"
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
          id="premium-glow"
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

// Ultra-premium navigation with normal font weight
const ModernNav = ({ className }) => {
  const navItems = [
    { name: 'Designs', href: '/designs', internal: true },
    { name: 'Challenges', href: '/challenges', internal: true },
    { name: 'Templates', href: '/templates', internal: true },
    { name: 'Components', href: '/components', badge: 'New', internal: true },
    { name: 'Partners', href: '#partners', internal: false },
    { name: 'Pricing', href: '#pricing', internal: false }
  ];

  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {navItems.map((item) => {
        const commonClasses = "relative text-white hover:text-white transition-all duration-300 text-sm font-normal px-4 py-2.5 rounded-xl hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] transform hover:scale-105 hover:-translate-y-0.5 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/8 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 drop-shadow-sm hover:drop-shadow-lg";
        const innerGlow = <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />;
        const content = <><span className="relative z-10 text-shadow-sm">{item.name}</span>{innerGlow}</>;
        return (
          <div key={item.name} className="relative flex items-center group">
            {item.internal ? (
              <NavLink
                to={item.href}
                className={({ isActive }) => (
                  commonClasses + (isActive ? ' ring-1 ring-white/40 bg-white/20' : '')
                )}
                style={{ filter: 'url(#glass-reflection)' }}
              >
                {content}
              </NavLink>
            ) : (
              <a href={item.href} className={commonClasses} style={{ filter: 'url(#glass-reflection)' }}>
                {content}
              </a>
            )}
            {item.badge && (
              <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white rounded-full backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(168,85,247,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-pulse" style={{ filter: 'url(#premium-glow)' }}>
                {item.badge}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

// Ultra-premium logo with advanced effects
const ModernLogo = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-3 group cursor-pointer", className)}>
      <div className="relative">
        {/* Main logo container with ultra-premium effects */}
        <div className="relative w-12 h-10 bg-gradient-to-br from-yellow-300 via-yellow-400 via-amber-400 to-orange-500 rounded-2xl flex items-center justify-center
          shadow-[0_0_25px_rgba(251,191,36,0.3),0_0_50px_rgba(251,191,36,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]
          border border-yellow-200/30 backdrop-blur-sm
          transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out
          group-hover:shadow-[0_0_35px_rgba(251,191,36,0.5),0_0_70px_rgba(251,191,36,0.2)]"
          style={{ filter: 'url(#premium-glow)' }}
        >
          <span className="text-black font-black text-lg tracking-tighter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300">
            Vibe
          </span>
          
          {/* Premium inner glow */}
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-60"></div>
        </div>
        
        {/* Multi-layered glow effects */}
        <div className="absolute inset-0 w-12 h-10 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-2xl blur-md opacity-40 -z-10 
          group-hover:opacity-60 group-hover:blur-lg transition-all duration-500"></div>
        <div className="absolute inset-0 w-12 h-10 bg-gradient-to-br from-yellow-200 to-amber-400 rounded-2xl blur-xl opacity-20 -z-20
          group-hover:opacity-40 transition-all duration-700"></div>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0ms' }}></div>
        <div className="absolute top-2 right-0 w-0.5 h-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '200ms' }}></div>
        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 
          group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '400ms' }}></div>
      </div>
      
      {/* .dev text */}
      <span className="text-yellow-400 font-bold text-xl tracking-tight drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300 group-hover:text-yellow-300">
        .dev
      </span>
    </div>
  );
};

// Ultra-premium theme toggle with advanced glass effects
const ThemeToggle = ({ className }) => {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-sm group",
        "text-white/80 hover:text-white",
        "hover:shadow-[0_0_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]",
        "transform hover:scale-110 hover:-translate-y-1",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-400/10 before:to-purple-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
      style={{ filter: 'url(#glass-reflection)' }}
    >
      <div className="relative z-10 transition-all duration-300 group-hover:drop-shadow-lg">
        {isDark ? (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
      
      {/* Premium glow ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    </button>
  );
};

// Ultra-premium main header component with maximum quality
const Header = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, initializing } = useAuth();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogin = () => {
    closeMenu();
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to logout', error);
    } finally {
      closeMenu();
    }
  };

  return (
    <header className={cn(
      // Removed before:-inset-x-full which created a pseudo-element 200% width causing horizontal overflow.
      // Constrained to inset-x-0 and added overflow-hidden so decorative line stays within viewport.
      "relative mb-14 overflow-hidden before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]",
      className
    )}>
      {/* Include SVG filters */}
      <UltraGlassFilter />
      
      <div className="h-[82px] py-2">
        <div className="fixed inset-x-0 z-50 w-full p-1">
          <div 
            className="flex h-[64px] w-full items-center justify-between gap-3 rounded-3xl pl-6 pr-3 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
            backdrop-blur-md transition-all 
            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
            style={{ backdropFilter: 'url("#container-glass") blur(4px)' }}
          >
            {/* Logo section */}
            <div className="w-40">
              <ModernLogo />
            </div>
            
            {/* Navigation - Hidden on mobile */}
            <div className="hidden pl-1 md:block">
              <ModernNav />
            </div>
            
            {/* Mobile menu button */}
            <div className="block md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9" 
                type="button" 
                aria-haspopup="dialog" 
                aria-expanded={isMobileMenuOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-equal h-5 w-5">
                  <line x1="5" x2="19" y1="9" y2="9"></line>
                  <line x1="5" x2="19" y1="15" y2="15"></line>
                </svg>
              </button>
            </div>
            
            {/* Right side actions */}
            <div className="hidden items-center md:flex">
              <div className="flex items-center gap-1">
                {/* Theme Toggle */}
                <ThemeToggle />
                
                {/* Select dropdown */}
                <button type="button" role="combobox" className="border-input aria-invalid:border-destructive ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 shadow-xs aria-invalid:focus-visible:ring-0 flex h-9 items-center justify-between border bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-[14px] md:w-24 text-white">
                  <span style={{ pointerEvents: 'none' }} className="text-white">UI</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down size-3 opacity-50 text-white">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </button>
                
                <div className="hidden items-center gap-2 md:flex">
                  {!initializing && user && (
                    <div className="flex items-center gap-2 rounded-[14px] border border-white/20 bg-white/10 px-3 py-2 text-xs uppercase tracking-wide text-white/80 backdrop-blur">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
                        {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                      </span>
                      <div className="text-left">
                        <p className="font-semibold text-white">{user.displayName || user.email}</p>
                        <p className="text-[10px] text-white/60">Signed in</p>
                      </div>
                    </div>
                  )}
                  {!initializing && !user && (
                    <button
                      onClick={handleLogin}
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 py-2 px-4 rounded-[14px] text-white"
                      type="button"
                    >
                      Sign in
                    </button>
                  )}
                  {!initializing && user && (
                    <button
                      onClick={handleLogout}
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-rose-500 hover:bg-rose-600 h-9 py-2 px-3 rounded-[14px] text-white"
                      type="button"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-premium Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-white/8 backdrop-blur-3xl border-b border-white/15
          shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
          style={{ filter: 'url(#ultra-glass-distortion)' }}
        >
          <div className="px-8 py-6 space-y-4">
            {['Designs', 'Challenges', 'Templates', 'Components', 'Partners', 'Pricing'].map((item, index) => {
              const isComponents = item === 'Components';
              const internalRoute = item === 'Templates' ? '/templates' : (isComponents ? '/components' : (item === 'Challenges' ? '/challenges' : null));
              const baseClasses = "block text-white hover:text-white transition-all duration-300 py-3 px-4 rounded-xl font-normal hover:bg-white/15 backdrop-blur-sm border border-transparent hover:border-white/25 transform hover:translate-x-2 drop-shadow-sm hover:drop-shadow-lg";
              const elem = internalRoute ? (
                <NavLink
                  to={internalRoute}
                  className={({ isActive }) => baseClasses + (isActive ? ' bg-white/20 border-white/30' : '')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item} {isComponents && <span className="ml-2 px-2 py-1 text-xs bg-purple-500/90 text-white rounded-full font-bold">New</span>}
                </NavLink>
              ) : (
                <a href={`#${item.toLowerCase()}`} className={baseClasses}>
                  {item} {isComponents && <span className="ml-2 px-2 py-1 text-xs bg-purple-500/90 text-white rounded-full font-bold">New</span>}
                </a>
              );
              return (
                <div key={item} style={{ animationDelay: `${index * 50}ms` }}>
                  {elem}
                </div>
              );
            })}
            <div className="pt-4 border-t border-white/20 space-y-3">
              {!initializing && !user && (
                <button
                  onClick={handleLogin}
                  className="w-full text-left px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-normal text-sm backdrop-blur-sm border border-white/30
                hover:opacity-90 transition-all duration-300
                hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] drop-shadow-sm"
                  type="button"
                >
                  Sign in
                </button>
              )}
              {!initializing && user && (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-6 py-3 bg-rose-500/80 text-white rounded-2xl font-normal text-sm backdrop-blur-sm border border-white/30
                hover:bg-rose-500 transition-all duration-300
                hover:shadow-[0_0_25px_rgba(244,63,94,0.35)] drop-shadow-sm"
                  type="button"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header, ModernHeaderBg, ModernNav, ModernLogo, ThemeToggle, UltraGlassFilter };
export default Header;