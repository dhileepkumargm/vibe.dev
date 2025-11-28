import React, { useState, useCallback } from 'react';

/*
 * TemplateCard (Displayer-inspired)
 * Props:
 * - template: { id, title, description, thumbnail, tags:[], category, difficulty, stats?:{views, bookmarks} }
 * - onSelect: function(template)
 * - onLike: function(liked:boolean, template)
 * - onShare: function(template)
 */
export default function TemplateCard({ template, onSelect, onLike, onShare }) {
  // Hooks must run unconditionally; move them before any early returns.
  const [liked, setLiked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  // Safely reference template fields (template may be null first render during suspense/data loading)
  const safeTemplate = template || {};
  const { title, description, thumbnail, tags = [], difficulty, stats = {} } = safeTemplate;

  const toggleLike = useCallback((e) => {
    e.stopPropagation();
    setLiked(prev => {
      const next = !prev; onLike && template && onLike(next, template); return next;
    });
  }, [onLike, template]);

  const handleSelect = () => { onSelect && onSelect(template); };

  const handleShare = useCallback(async (e) => {
    e.stopPropagation();
    try {
      const url = window.location.origin + '/templates#' + template.id;
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
        setShareStatus('Shared');
      } else {
        await navigator.clipboard.writeText(url);
        setShareStatus('Copied!');
      }
      onShare && onShare(template);
    } catch (err) {
      setShareStatus('Canceled');
    } finally {
      setTimeout(() => setShareStatus(''), 1800);
    }
  }, [title, description, template, onShare]);

  // After hooks are declared, we can decide not to render if template missing.
  if (!template) return null;

  return (
    <div
      data-component="TemplateCard"
      className="group relative flex flex-col gap-y-3 list-none cursor-pointer select-none"
      onClick={handleSelect}
    >
  <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg p-4 transition-all duration-300 focus-within:ring-4 focus-within:ring-white/10 group-hover:border-white/20 group-hover:shadow-2xl">
        <div className="relative block w-full aspect-video overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
              No Preview
            </div>
          )}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
          {/* Top-right actions */}
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              type="button"
              aria-label={liked ? 'Unlike' : 'Like'}
              onClick={toggleLike}
              className={`inline-flex size-9 items-center justify-center rounded-xl backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg text-gray-900 hover:bg-white hover:scale-110 transition-all duration-200 ${liked ? '!text-pink-500' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.995 7.162c-.885-1.06-2.44-2.012-4.07-1.187-2.232 1.139-2.614 4.27-.808 6.516 1.31 1.64 3.956 3.82 4.878 4.57a.5.5 0 0 0 .634 0c.922-.75 3.57-2.93 4.878-4.57 1.806-2.246 1.424-5.377-.808-6.516-1.63-.825-3.185.127-4.07 1.187Z" />
              </svg>
            </button>
            <div className="relative">
              <button
                type="button"
                aria-label="Share"
                onClick={(e) => { e.stopPropagation(); setShareOpen(o => !o); }}
                className="inline-flex size-9 items-center justify-center rounded-xl backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg text-gray-900 hover:bg-white hover:scale-110 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-8 4h5m2.5-12H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7 5.76 7 6.04 7 6.6V19.4c0 .56 0 .84.109 1.054.095.18.247.332.437.437C7.76 21 8.04 21 8.6 21H17m.4-16h-8.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7 5.76 7 6.04 7 6.6V19.4c0 .56 0 .84.109 1.054.095.18.247.332.437.437C7.76 21 8.04 21 8.6 21H17c.56 0 .84 0 1.054-.109.18-.095.332-.247.437-.437C18.999 20.24 19 19.96 19 19.4V6.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C17.76 5 17.48 5 16.92 5Z" />
                </svg>
              </button>
              {shareOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-2 flex flex-col gap-1 z-40">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="text-xs px-2 py-1 rounded-lg hover:bg-white/80 text-left text-gray-900 font-medium transition-colors"
                  >
                    {shareStatus || 'Share / Copy'}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setShareOpen(false); }}
                    className="text-xs px-2 py-1 rounded-lg hover:bg-white/80 text-left text-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Bottom overlay info on hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-sm font-semibold text-slate-100 leading-tight line-clamp-2 drop-shadow">{title}</h3>
            <p className="text-[11px] text-slate-300/80 line-clamp-2 leading-snug">{description}</p>
          </div>
        </div>
        {/* Meta area below media */}
        <div className="mt-4 flex flex-wrap items-center gap-2 min-h-[1.75rem]">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-300 text-[10px] font-medium tracking-wide border border-slate-600/60">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-lg bg-white/10 backdrop-blur-xl text-gray-300 text-[10px] border border-white/20">+{tags.length - 3}</span>
          )}
          {difficulty && (
            <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-medium border border-white/20 bg-white/10 backdrop-blur-xl text-white tracking-wide">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50" /> {difficulty}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            {typeof stats.views === 'number' && (
              <div className="flex items-center gap-1" title={`${stats.views} views`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/></svg>
                <span>{Intl.NumberFormat('en', { notation:'compact'}).format(stats.views)}</span>
              </div>
            )}
            {typeof stats.bookmarks === 'number' && (
              <div className="flex items-center gap-1" title={`${stats.bookmarks} bookmarks`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70"><path d="M19 19.9948V6C19 4.343 17.657 3 16 3H8a3 3 0 0 0-3 3v13c0 .81.912 1.285 1.575.82l3.7-2.6c1.034-.728 2.416-.728 3.45 0l3.7 2.6c.663.466 1.575-.01 1.575-.82Z"/></svg>
                <span>{Intl.NumberFormat('en', { notation:'compact'}).format(stats.bookmarks)}</span>
              </div>
            )}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); handleSelect(); }}
            className="ml-auto rounded-xl px-3 py-1.5 text-[11px] font-medium bg-white/90 backdrop-blur-xl text-gray-900 hover:bg-white hover:scale-105 tracking-wide shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 border border-white/30 transition-all duration-200"
            aria-label={`Open template ${title}`}
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
}
