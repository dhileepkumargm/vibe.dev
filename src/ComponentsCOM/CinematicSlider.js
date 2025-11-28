import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderData } from './data';

const CinematicSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9] // Cinematic ease
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === sliderData.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-black group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={sliderData[currentIndex].image}
              alt={sliderData[currentIndex].title}
              className="w-full h-full object-cover"
            />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-12 md:px-24 max-w-4xl">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-blue-400 font-medium tracking-widest uppercase mb-4"
              >
                {sliderData[currentIndex].category}
              </motion.span>
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {sliderData[currentIndex].title}
              </motion.h1>
              <motion.p 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {sliderData[currentIndex].description}
              </motion.p>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                Explore Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button 
          onClick={handlePrevious}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 md:left-24 z-30 flex gap-3">
        {sliderData.map((_, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-blue-500" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicSlider;
