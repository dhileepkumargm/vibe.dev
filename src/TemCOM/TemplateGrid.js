import React from 'react';
import TemplateCard from './TemplateCard';

/*
 * TemplateGrid
 * Props:
 * - templates: array of template objects
 * - onSelect: function(template)
 * - emptyMessage: optional custom empty state message
 */
export default function TemplateGrid({ templates = [], onSelect, emptyMessage = 'No templates match your filters.', onLike, onShare }) {
  if (!templates.length) {
    return (
      <div className="py-20 text-center text-slate-500 text-sm">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {templates.map((t) => (
        <TemplateCard key={t.id} template={t} onSelect={onSelect} onLike={onLike} onShare={onShare} />
      ))}
    </div>
  );
}
