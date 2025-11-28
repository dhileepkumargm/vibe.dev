import React from 'react';

/*
 * TemplateCategoryTabs
 * Props:
 * - categories: array of category strings
 * - value: current category value
 * - onChange: function(nextCategory)
 * - allLabel: label for the 'all' tab
 */
export default function TemplateCategoryTabs({ categories = [], value = 'all', onChange, allLabel = 'All' }) {
  const list = ['all', ...categories];

  return (
    <nav className="w-full overflow-x-auto pb-1">
      <ul className="flex gap-2 min-w-max">
        {list.map(cat => {
          const active = value === cat;
          return (
            <li key={cat}>
              <button
                onClick={() => onChange && onChange(cat)}
                className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 border backdrop-blur-xl ${active ? 'bg-white/90 text-gray-900 border-white/30 shadow-lg scale-105' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:scale-105'} `}
              >
                {cat === 'all' ? allLabel : cat}
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-xl ring-2 ring-white/20 animate-pulse" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
