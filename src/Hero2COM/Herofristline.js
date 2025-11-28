import React, { useMemo } from 'react';
import HoverPreviewCard from './HoverPreviewCard';

// Sample data (can be provided via props)
// Added image placeholder (could be replaced by real image URLs). Video only plays on hover now.
const SAMPLE_ITEMS = Array.from({ length: 18 }).map((_, i) => ({
  id: `item-${i + 1}`,
  title: `Design preview ${i + 1}`,
  href: `/${i + 1}`,
  image: `https://picsum.photos/seed/design-${i + 1}/400/300`
}));

// Card that shows an image by default and only loads/plays video on hover or keyboard focus.
// HoverPreviewCard moved to its own file for reuse.

// Marquee row component (duplicates content for seamless loop)
function MarqueeRow({ items, direction = 'left', speedClass }) {
  const list = useMemo(() => [...items, ...items], [items]); // duplicate once
  return (
    <div className="marquee-row relative w-full">
      <div
        className={
          'marquee-animate marquee-track gap-2 ' +
          (direction === 'left' ? 'marquee-left ' : 'marquee-right ') +
          speedClass
        }
        role="list"
        aria-label="Scrolling preview row"
      >
        {list.map((item, i) => (
          <div role="listitem" key={`${item.id}-${i}`}> <HoverPreviewCard item={item} /> </div>
        ))}
      </div>
    </div>
  );
}

export default function Herofristline({
  items = SAMPLE_ITEMS,
  compact = false,
  className = '',
  hideCta = false,
  // New: how many times to repeat each group to "add more" items visually.
  repeatFactor = 2
}) {
  // Split items roughly into three groups
  const third = Math.ceil(items.length / 3);
  const group1 = items.slice(0, third);
  const group2 = items.slice(third, third * 2);
  const group3 = items.slice(third * 2);

  // Helper to repeat arrays without mutating originals
  const repeatItems = (arr, times) => {
    if (!Array.isArray(arr) || times <= 1) return arr;
    const out = [];
    for (let i = 0; i < times; i++) out.push(...arr);
    return out;
  };

  // Apply repetition so each marquee has more cards (user requested "add more")
  const rGroup1 = repeatItems(group1, repeatFactor);
  const rGroup2 = repeatItems(group2.length ? group2 : group1, repeatFactor);
  const rGroup3 = repeatItems(group3.length ? group3 : group1, repeatFactor);

  // Removed top padding (previously used py-4 / py-14) to eliminate unwanted space above the marquee
  // Increase bottom padding significantly when CTA is visible to push it further down
  const sectionClasses = `w-full ${compact ? 'pt-0 pb-2' : hideCta ? 'pt-0 pb-6' : 'pt-0 pb-40 md:pb-48'} relative bg-gray-950/0 overflow-hidden ${className}`;

  return (
    <section className={sectionClasses} aria-label="Scrolling component previews">

      {/* Background video removed per request */}

      <div className="space-y-3">
        <MarqueeRow items={rGroup1} direction="left" speedClass="marquee-speed-med" />
        <MarqueeRow items={rGroup2} direction="right" speedClass="marquee-speed-mid" />
        <MarqueeRow items={rGroup3} direction="left" speedClass="marquee-speed-slow" />
      </div>

  {/* Cinematic / vignette gradients */}
  {/* Darker top fade */}
  <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-gray-950/90 to-transparent" />
  {/* Darker bottom fade */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-gray-950/90 to-transparent" />
  {/* Side fades for cinematic look */}
  <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
  <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
  {/* Subtle radial vignette (center highlight) */}
  <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.75)_100%)] mix-blend-multiply" />

      { !hideCta && (
  // CTA block repositioned: anchored at bottom-center per user request
  <div className="flex flex-col items-center text-center absolute bottom-24 sm:bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 mt-0 z-20 px-2">
          <h1
            className="text-lg sm:text-xl md:text-3xl font-bold tracking-tight mt-2 mb-3 md:mb-3.5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            style={{ filter: 'blur(0px)', transform: 'none' }}
          >
            Share Your Components
            <br className="hidden sm:block" />
            with the World
          </h1>
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-0">
            <a
              href="#"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-md bg-gradient-to-r from-indigo-500 via-violet-600 to-fuchsia-500 hover:from-indigo-400 hover:via-violet-500 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_14px_-4px_rgba(109,40,217,0.55),0_2px_5px_-2px_rgba(139,92,246,0.45)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_18px_-4px_rgba(109,40,217,0.65),0_3px_6px_-2px_rgba(139,92,246,0.55)]"
              aria-label="Browse available UI components"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 opacity-90 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 3l2.09 6.26H20l-5.17 3.76L16.18 21 12 16.98 7.82 21l1.35-7.98L4 9.26h5.91L12 3z" /></svg>
                <span>Browse Components</span>
                <svg className="w-3.5 h-3.5 -mr-0.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-white/15" />
              <span className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] mix-blend-overlay" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white/75 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/40 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
              Submit Yours
            </a>
          </div>
        </div>
      ) }
    </section>
  );
}

