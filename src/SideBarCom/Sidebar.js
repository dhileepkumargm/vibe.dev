"use client"

import React, { useState } from 'react';
import { cn } from "../lib/utils";

// Ultra-premium glass background for sidebar
const GlassSidebarBg = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Primary glass base with ultra blur */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
      
      {/* Ultra-premium multi-layered glass effect */}
      <div 
        className="absolute inset-0
          shadow-[0_0_1px_rgba(255,255,255,0.6),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(0,0,0,0.1),0_2px_16px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),inset_1px_0_0_rgba(255,255,255,0.15),inset_-1px_0_0_rgba(0,0,0,0.15)] 
          border-r border-white/20"
      />
      
      {/* Advanced glass reflection system */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/3 via-transparent to-black/8"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/5"></div>
      
      {/* Premium glass highlights */}
      <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Inner glass glow system */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/6 via-white/2 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/3 to-transparent"></div>
      
      {/* Advanced glass color spectrum */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/2 via-purple-500/3 via-pink-500/2 to-blue-500/2"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/1 via-transparent to-violet-500/1"></div>
      
      {/* Frosted glass texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.04),transparent_25%)]"></div>
      
      {/* Premium glow filter */}
      <PremiumGlowFilter />
    </div>
  );
};

// Premium glow filter for Vibe logo
const PremiumGlowFilter = () => {
  return (
    <svg className="hidden">
      <defs>
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
            values="1 0.8 0 0 0
                    0.8 1 0 0 0
                    0 0 0.2 0 0
                    0 0 0 0.6 0"
            result="glowColor"
          />
          <feComposite in="SourceGraphic" in2="glowColor" operator="over" />
        </filter>
      </defs>
    </svg>
  );
};

// Menu item component with glass effects
const MenuItem = ({ icon, label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative",
        "hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30",
        "backdrop-blur-sm border border-transparent hover:border-white/20",
        isActive 
          ? "bg-white/15 text-white font-medium border-white/25 shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
          : "text-white/80 hover:text-white font-normal"
      )}
    >
      <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="truncate transition-all duration-300">{label}</span>
      
      {/* Premium hover glow */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

// Group section component
const MenuGroup = ({ title, children }) => {
  return (
    <div className="relative flex w-full min-w-0 flex-col p-2 pl-3">
      {title && (
        <div className="flex h-8 shrink-0 items-center rounded-md px-2 mb-1">
          <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
            {title}
          </span>
        </div>
      )}
      <div className="w-full text-sm">
        <ul className="flex w-full min-w-0 flex-col gap-1">
          {children}
        </ul>
      </div>
    </div>
  );
};

// Main sidebar component
const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState('Components');

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Sidebar container */}
      <div className={cn(
        "group peer text-white fixed inset-y-0 z-50 h-full transition-all duration-300 ease-in-out",
        "left-0 w-60 bg-transparent",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        {/* Sidebar content */}
        <div className="fixed inset-y-0 z-40 h-full flex left-0 w-60 bg-transparent border-none">
          <div className="flex h-full w-full flex-col bg-transparent relative overflow-hidden">
            
            {/* Ultra-premium Glass Background */}
            <GlassSidebarBg />
            
            {/* Sidebar content wrapper */}
            <div className="flex min-h-0 flex-col gap-2 overflow-auto flex-1 bg-transparent relative z-10">
              
              {/* Header Section */}
              <div className="flex items-center h-[var(--header-height)] px-4">
                <a href="/" className="text-2xl font-semibold text-accent flex items-center">
                  <span className="i-bolt:logos-bolt-new?mask w-[70.5px] inline-block"></span>
                </a>
              </div>

              {/* Start New Chat Button */}
              <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2 pl-3 pt-1 pb-2">
                <div data-sidebar="group-content" className="w-full text-sm">
                  <button className="whitespace-nowrap outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_0_0.5px_rgb(23,23,23),inset_0_0_0_1px_rgba(255,255,255,0.14)] dark:shadow-[0_0_0_0.5px_rgb(23,23,23),inset_0_0_0_1px_rgba(0,0,0,0.14)] rounded-lg px-3 w-full font-normal h-8 text-sm flex items-center justify-center pr-1 relative active:scale-[98%] transition-transform">
                    Start new chat
                    <kbd className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-4 min-w-4 items-center justify-center rounded border border-primary-foreground/20 bg-primary-foreground/10 px-1 font-[inherit] text-[0.5rem] font-medium text-primary-foreground/80">C</kbd>
                  </button>
                </div>
              </div>

              {/* Your Chats Header */}
              <div className="flex h-8 shrink-0 items-center rounded-md px-2 mb-1">
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Your Chats</span>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto pl-4 pr-5 pb-5">
                {/* July Section */}
                <div className="mt-4 first:mt-0 flex flex-col gap-0.5">
                  <p className="text-bolt-elements-textTertiary sticky top-0 z-1 bg-bolt-elements-background-depth-2 pl-2 pt-2 pb-1">July</p>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/49806951" className="flex w-full relative truncate block py-1.5 pl-2">
                      MemeLord.ai - AI Meme CEO Simulator
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                </div>

                {/* June Section */}
                <div className="mt-4 first:mt-0 flex flex-col gap-0.5">
                  <p className="text-bolt-elements-textTertiary sticky top-0 z-1 bg-bolt-elements-background-depth-2 pl-2 pt-2 pb-1">June</p>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/51281071" className="flex w-full relative truncate block py-1.5 pl-2">
                      MemeLord.ai - AI Meme CEO Simulator (duplicated)
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/51194032" className="flex w-full relative truncate block py-1.5 pl-2">
                      MemeLord.ai - AI Meme CEO Simulator (duplicated)
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/50161720" className="flex w-full relative truncate block py-1.5 pl-2">
                      MemeLord.ai - AI Meme CEO Simulator (duplicated)
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/49927524" className="flex w-full relative truncate block py-1.5 pl-2">
                      MemeLord.ai - AI Meme CEO Simulator (duplicated)
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                </div>

                {/* May Section */}
                <div className="mt-4 first:mt-0 flex flex-col gap-0.5">
                  <p className="text-bolt-elements-textTertiary sticky top-0 z-1 bg-bolt-elements-background-depth-2 pl-2 pt-2 pb-1">May</p>
                  <div className="group rounded-md text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 overflow-hidden flex justify-between items-center pr-2">
                    <a href="/p/48600419" className="flex w-full relative truncate block py-1.5 pl-2">
                      Integrate SplashCursor and HeroGeometric Components
                      <div className="absolute right-0 z-1 top-0 bottom-0 bg-gradient-to-l from-bolt-elements-background-depth-2 group-hover:from-bolt-elements-background-depth-3 to-transparent w-10 flex justify-end group-hover:w-15 group-hover:from-45%"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="select-none">
              <div className="bg-white/5 border-t border-white/20 overflow-hidden backdrop-blur-sm">
                {/* Tools Section */}
                <div className="relative flex w-full min-w-0 flex-col p-2 pl-3">
                  <div className="flex h-8 shrink-0 items-center rounded-md px-2 mb-1">
                    <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Try Our Online Editor</span>
                  </div>
                  <div className="w-full text-sm">
                    <ul className="flex w-full min-w-0 flex-col gap-1">
                      <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-sm border border-transparent hover:border-white/20 text-white/80 hover:text-white font-normal">
                        <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.5 21H6.375C4.511 21 3 19.4885 3 18V16.5M16.5 21H17.625C19.4885 21 21 19.4885 21 18V16.5M3 7.5V6.375C3 4.511 4.511 3 6.375 3H7.5M16.5 3H17.625C19.4885 3 21 4.511 21 6.375V7.5"/>
                          </svg>
                        </div>
                        <span className="truncate transition-all duration-300">Start Coding</span>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-sm border border-transparent hover:border-white/20 text-white/80 hover:text-white font-normal">
                        <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7735 20.9229C15.9175 20.9791 16.0714 21.005 16.2258 20.9991C16.3802 20.9932 16.5317 20.9555 16.671 20.8886L20.3962 19.0961C20.5881 19.0037 20.75 18.8591 20.8633 18.6788C20.9766 18.4985 21.0367 18.2898 21.0367 18.0769V5.92301C21.0367 5.71008 20.9765 5.50148 20.8632 5.32121C20.7499 5.14094 20.588 4.99632 20.3962 4.904L16.6711 3.11151C16.4606 3.01023 16.2239 2.97689 15.9936 3.01612C15.7633 3.05534 15.5509 3.16518 15.3858 3.33044L8.25458 9.83601L5.14836 7.47847C5.00826 7.37212 4.83535 7.31816 4.65963 7.32596C4.48391 7.33376 4.31647 7.40282 4.18634 7.52117L3.18996 8.42746C3.11234 8.49808 3.05032 8.58412 3.00786 8.68008C2.9654 8.77604 2.94343 8.87981 2.94336 8.98475C2.94329 9.08968 2.96512 9.19348 3.00746 9.28949C3.0498 9.38551 3.11171 9.47163 3.18923 9.54235L5.88294 11.9999L3.18923 14.4575C3.11171 14.5283 3.0498 14.6144 3.00746 14.7104C2.96512 14.8064 2.94329 14.9102 2.94336 15.0151C2.94343 15.1201 2.9654 15.2238 3.00786 15.3198C3.05032 15.4158 3.11234 15.5018 3.18996 15.5724L4.18634 16.4787C4.31647 16.5971 4.48391 16.6661 4.65963 16.6739C4.83535 16.6817 5.00826 16.6278 5.14836 16.5214L8.25458 14.1639L15.3858 20.6698C15.4961 20.7802 15.6281 20.8663 15.7735 20.9229ZM16.5159 7.8928L11.105 11.9999L16.5159 16.1073V7.8928Z"/>
                          </svg>
                        </div>
                        <span className="truncate transition-all duration-300 flex items-center gap-2">
                          3D Studio
                          <span className="text-[0.6rem] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full font-medium">
                            Coming Soon
                          </span>
                        </span>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Settings Section */}
                <div className="relative flex w-full min-w-0 flex-col p-2 pl-3">
                  <div className="flex h-8 shrink-0 items-center rounded-md px-2 mb-1">
                    <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Settings</span>
                  </div>
                  <div className="w-full text-sm">
                    <ul className="flex w-full min-w-0 flex-col gap-1">
                      <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-sm border border-transparent hover:border-white/20 bg-white/15 text-white font-medium border-white/25 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
                          </svg>
                        </div>
                        <span className="truncate transition-all duration-300">Profile</span>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-sm border border-transparent hover:border-white/20 text-white/80 hover:text-white font-normal">
                        <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M7.5 21H6.375C4.511 21 3 19.4885 3 18V16.5M16.5 21H17.625C19.4885 21 21 19.4885 21 18V16.5M3 7.5V6.375C3 4.511 4.511 3 6.375 3H7.5M16.5 3H17.625C19.4885 3 21 4.511 21 6.375V7.5"/>
                            <path d="M8 13V10.6569C8 9.7418 8.7418 9 9.65685 9C9.87657 9 10.0873 8.91272 10.2426 8.75736L10.4142 8.58579C10.7893 8.21071 11.298 8 11.8284 8H12.1716C12.702 8 13.2107 8.21071 13.5858 8.58579L13.7574 8.75736C13.9127 8.91272 14.1234 9 14.3431 9C15.2582 9 16 9.7418 16 10.6569V13C16 14.1046 15.1046 15 14 15H10C8.89543 15 8 14.1046 8 13Z"/>
                            <path d="M12 11.85V11.84M12.5 11.85C12.5 12.1261 12.2761 12.35 12 12.35C11.7239 12.35 11.5 12.1261 11.5 11.85C11.5 11.5738 11.7239 11.35 12 11.35C12.2761 11.35 12.5 11.5738 12.5 11.85Z"/>
                          </svg>
                        </div>
                        <span className="truncate transition-all duration-300">Manage Subcre...</span>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 group relative hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-sm border border-transparent hover:border-white/20 text-white/80 hover:text-white font-normal">
                        <div className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:scale-110">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/>
                            <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/>
                            <path d="M 7 17h.01"/>
                            <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>
                          </svg>
                        </div>
                        <span className="truncate transition-all duration-300">Creator's Studio</span>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-start p-4 border-t border-white/20 w-full bg-transparent focus-visible:outline-2 hover:bg-white/5 rounded-br-3xl transition-all duration-300">
                <div className="flex items-center gap-3 max-w-full min-w-0">
                  <div className="size-9 flex items-center justify-center shrink-0 bg-white/10 text-white/80 border overflow-hidden rounded-full border-white/20 backdrop-blur-sm">
                    <img className="w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/189240654" alt="User Avatar" />
                  </div>
                  <div className="flex flex-col items-start w-full overflow-hidden">
                    <div className="truncate text-sm min-w-0 truncate w-full max-w-56 text-left font-semibold text-white">
                      dhileepkumargm@gmail.com
                    </div>
                    <div className="truncate text-sm min-w-0 truncate w-full max-w-56 text-left text-white/60">
                      <span>Personal Plan</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
