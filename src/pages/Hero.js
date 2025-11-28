import React, { useState } from 'react';
// Update the import path to include the Components directory
import DesignComponent from '../DesignCOM/DesignComponent';
import { HeroParallaxDemo } from '../HeroCOM/Heromid';
import HeroHome from '../Hero2COM/HeroHome';
import Footer from '../HeroCOM/Footer';


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden bg-[#050508]">
      {/* Ultra Pro Max Design Component */}
      <div className="w-full">
        <div className="max-w-full mx-auto">
          <DesignComponent />
        </div>
      </div>
      
      {/* Main hero content area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full">
          <HeroHome />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Hero;
