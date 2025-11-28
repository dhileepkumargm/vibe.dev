import React, { useState, useMemo, useCallback } from 'react';
import {
  TemplateGrid,
  TemplateFilters,
  TemplateCategoryTabs,
  templates as templateData,
  getCategories
} from '../TemCOM';

// Templates page integrates filter UI + category tabs + grid display.
export default function Templates() {
  const categories = useMemo(() => getCategories(), []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSet, setFilteredSet] = useState(templateData);
  const [filterState, setFilterState] = useState({});

  const handleFiltersChange = useCallback((list, state) => {
    // Additional category filtering layered after TemplateFilters base category logic
    setFilterState(state);
    if (activeCategory === 'all') {
      setFilteredSet(list);
    } else {
      setFilteredSet(list.filter(t => t.category === activeCategory));
    }
  }, [activeCategory]);

  const onCategoryChange = (cat) => {
    setActiveCategory(cat);
    // Re-run layering with existing filter state by simulating call
    // We'll reuse TemplateFilters internal filtering by just adjusting post-filter constraint.
    // Simpler approach: trigger recalculation by manually filtering current templateData.
    // This avoids coupling into TemplateFilters internal logic.
    setFilteredSet(prev => {
      // If we don't have latest base list accessible, recompute from scratch using stored filterState.
      let base = [...templateData];
      const { query = '', category = 'all', selectedTags = [], difficulty = 'all' } = filterState;
      if (query.trim()) {
        const q = query.toLowerCase();
        base = base.filter(t =>
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q)) ||
          (t.tags || []).some(tag => tag.toLowerCase().includes(q))
        );
      }
      if (category !== 'all') base = base.filter(t => t.category === category);
      if (difficulty !== 'all') base = base.filter(t => (t.difficulty || '').toLowerCase() === difficulty);
      if (selectedTags.length) base = base.filter(t => selectedTags.every(st => (t.tags || []).includes(st)));
      if (cat !== 'all') base = base.filter(t => t.category === cat);
      return base;
    });
  };

  const handleSelectTemplate = (template) => {
    // TODO: integrate modal / route navigation. Temporary alert for interaction.
    alert(`Selected template: ${template.title}`);
  };

  const handleLike = (liked, template) => {
    // eslint-disable-next-line no-console
    console.log('Template like toggled', template.id, liked);
  };

  const handleShareTemplate = (template) => {
    // eslint-disable-next-line no-console
    console.log('Template share action', template.id);
  };

  return (
    <main className="px-4 md:px-8 lg:px-14 py-10 max-w-7xl mx-auto">
      <div className="space-y-10">
        <TemplateCategoryTabs
          categories={categories}
          value={activeCategory}
            onChange={onCategoryChange}
        />
        <TemplateFilters
          allTemplates={templateData}
          onChange={handleFiltersChange}
        />
        <TemplateGrid
          templates={filteredSet}
          onSelect={handleSelectTemplate}
          onLike={handleLike}
          onShare={handleShareTemplate}
        />
      </div>
    </main>
  );
}
