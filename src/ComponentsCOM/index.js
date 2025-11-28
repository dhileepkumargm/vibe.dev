import React, { useState } from 'react';
import CinematicHero from './CinematicHero';
import ComponentShowcase from './ComponentShowcase';
import FilterSection from './FilterSection';
import ComponentsGallery from './ComponentsGallery';

export default function ComponentsCOM() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <CinematicHero />
      <FilterSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ComponentsGallery
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <ComponentShowcase />
    </div>
  );
}
