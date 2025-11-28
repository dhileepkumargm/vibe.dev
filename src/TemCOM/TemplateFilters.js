import React, { useState, useEffect } from 'react';

/*
 * TemplateFilters
 * Props:
 * - allTemplates: array of template objects
 * - onChange: (filteredTemplates, state) => void
 * - availableCategories: optional categories list
 * - availableTags: optional tags list (array of strings)
 */
export default function TemplateFilters({
  allTemplates = [],
  onChange,
  availableCategories,
  availableTags
}) {
  const derivedCategories = availableCategories || Array.from(new Set(allTemplates.map(t => t.category).filter(Boolean)));
  const derivedTags = availableTags || Array.from(new Set(allTemplates.flatMap(t => t.tags || [])));

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [difficulty, setDifficulty] = useState('all');

  useEffect(() => {
    let filtered = [...allTemplates];

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(t =>
        t.title.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        (t.tags || []).some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(t => t.category === category);
    }

    if (difficulty !== 'all') {
      filtered = filtered.filter(t => (t.difficulty || '').toLowerCase() === difficulty);
    }

    if (selectedTags.length) {
      filtered = filtered.filter(t => selectedTags.every(st => (t.tags || []).includes(st)));
    }

    onChange && onChange(filtered, { query, category, selectedTags, difficulty });
  }, [query, category, selectedTags, difficulty, allTemplates, onChange]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search templates..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-2.5 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 shadow-lg"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">Ctrl + K</span>
        </div>

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-white/20 shadow-lg"
        >
          <option value="all">All Categories</option>
          {derivedCategories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
          className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-white/20 shadow-lg"
        >
          <option value="all">All Difficulty</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {derivedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {derivedTags.slice(0, 30).map(tag => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2.5 py-1 rounded-xl border text-[11px] font-medium tracking-wide transition-all duration-200 ${active ? 'bg-white/90 backdrop-blur-xl text-gray-900 border-white/30 shadow-lg scale-105' : 'bg-white/5 backdrop-blur-xl border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'}`}
              >
                {tag}
              </button>
            );
          })}
          {derivedTags.length > 30 && (
            <span className="px-2.5 py-1 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-[11px] text-slate-400">+{derivedTags.length - 30} more</span>
          )}
        </div>
      )}

      {(selectedTags.length > 0 || query || category !== 'all' || difficulty !== 'all') && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400">Active Filters:</span>
          {query && <span className="text-xs bg-white/10 backdrop-blur-xl px-2 py-1 rounded-lg border border-white/10">q:"{query}"</span>}
          {category !== 'all' && <span className="text-xs bg-white/10 backdrop-blur-xl px-2 py-1 rounded-lg border border-white/10">cat:{category}</span>}
          {difficulty !== 'all' && <span className="text-xs bg-white/10 backdrop-blur-xl px-2 py-1 rounded-lg border border-white/10">lvl:{difficulty}</span>}
          {selectedTags.map(t => (
            <button
              key={t}
              onClick={() => toggleTag(t)}
              className="text-xs bg-white/90 backdrop-blur-xl text-gray-900 hover:bg-white hover:scale-105 px-2 py-1 rounded-lg border border-white/30 shadow-lg transition-all duration-200"
            >
              {t} ×
            </button>
          ))}
          <button
            onClick={() => { setQuery(''); setCategory('all'); setDifficulty('all'); setSelectedTags([]); }}
            className="ml-auto text-xs text-slate-400 hover:text-white transition-colors"
          >
            Reset All
          </button>
        </div>
      )}
    </section>
  );
}
