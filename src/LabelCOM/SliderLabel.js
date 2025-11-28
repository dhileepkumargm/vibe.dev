import React, { useState, useEffect } from 'react';
import HeroLabel from './heroLabel';
import PriceLabel from './PriceLabel';
import ChallengeLabel from './ChallengeLabel';
import AnnouncementLabel from './AnnouncementLabel';
import StatusLabel from './StatusLabel';
import UpdateLabel from './UpdateLabel';
import EventLabel from './EventLabel';

const SliderLabel = ({ autoSlide = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of all label components
  const labels = [
    { component: <HeroLabel />, key: 'hero' },
    { component: <PriceLabel />, key: 'price' },
    { component: <ChallengeLabel />, key: 'challenge' },
    { component: <AnnouncementLabel />, key: 'announcement' },
    { component: <StatusLabel status="live" message="All systems operational" />, key: 'status-live' },
    { component: <UpdateLabel />, key: 'update' },
    { component: <EventLabel />, key: 'event' },
    { component: <StatusLabel status="warning" message="Scheduled maintenance in 2 hours" />, key: 'status-warning' },
    { component: <StatusLabel status="error" message="Some features may be temporarily unavailable" />, key: 'status-error' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === labels.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, labels.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-0">
      {/* Main slider container */}
      <div className="relative overflow-hidden rounded-lg min-h-[120px] pb-0 mb-0">
        {/* Labels container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {labels.map((label, index) => (
            <div 
              key={label.key}
              className="w-full flex-shrink-0 flex justify-center items-center px-4"
            >
              {label.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderLabel;
