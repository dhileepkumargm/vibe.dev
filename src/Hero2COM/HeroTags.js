import React, { useMemo } from 'react';

/**
 * HeroTags (re-created)
 * --------------------------------------------------
 * A horizontally scrolling (marquee-style) collection of tag chips separated
 * into groups. This reimplementation focuses on:
 *  - Uniqueness: duplicates automatically removed (unless intentionally kept via props)
 *  - Configurability: optional props to inject custom groups or a master tags list
 *  - Accessibility: semantic grouping & aria labels
 *  - Stability: consistent key generation via slugs
 *  - Progressive enhancement: works without JS animations gracefully
 *
 * Tailwind utility classes assume existing custom colors & animations:
 *  - animate-marquee-left
 *  - direction-reverse (utility to flip animation direction)
 *  - group-hover:pause (plugin / custom variant that pauses animation)
 */

/** Default master tag list (fine-grained, diverse). */
const DEFAULT_TAGS = [
  'button','card','loader','rounded','dark','minimal','blue','white','simple','black','animation','form','animated','switch',
  'input','modern','icon','gradient','hover','hover effect','shadow','text','gray','centered','purple','minimalist','checkbox',
  'green','pattern','3d','tooltip','red','neumorphism','radio','minimalistic','material design','circle','bold','label','toggle'
];

/** Auto-highlight heuristics (words we often want to accent). */
const AUTO_HIGHLIGHT_KEYWORDS = ['dark','gradient','3d','animated','radio','pattern','switch','neumorphism'];

const toSlug = (t) => t.trim().toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');

/**
 * Split an array into N roughly equal chunks (preserves order).
 */
function splitIntoGroups(list, groupCount) {
  const groups = Array.from({ length: groupCount }, () => []);
  list.forEach((item, idx) => {
    groups[idx % groupCount].push(item);
  });
  return groups;
}

/**
 * Build group data from either provided groups prop or a master tag list.
 */
function useGroups({ groups, tags, groupCount = 3, enableAutoHighlight = true, ensureUnique = true }) {
  return useMemo(() => {
    if (groups && groups.length) {
      // Normalize provided groups (convert highlight arrays to Set for O(1) lookup)
      return groups.map(g => ({
        ...g,
        highlight: g.highlight instanceof Set ? g.highlight : new Set(g.highlight || [])
      }));
    }
    // Derive from master tag list
    let source = Array.isArray(tags) && tags.length ? tags.slice() : DEFAULT_TAGS.slice();
    if (ensureUnique) {
      // Preserve first occurrence order
      const seen = new Set();
      source = source.filter(t => (seen.has(t) ? false : (seen.add(t), true)));
    }
    const chunked = splitIntoGroups(source, groupCount);
    return chunked.map((tagArr, idx) => {
      const highlight = new Set();
      if (enableAutoHighlight) {
        tagArr.forEach(t => {
          if (AUTO_HIGHLIGHT_KEYWORDS.some(k => t.toLowerCase().includes(k))) highlight.add(t);
        });
      }
      return {
        tags: tagArr,
        reverse: idx % 2 === 0, // alternate directions
        highlight
      };
    });
  }, [groups, tags, groupCount, enableAutoHighlight, ensureUnique]);
}

/**
 * Tag chip component (anchor for discoverability).
 */
function TagChip({ tag, isHighlighted }) {
  return (
    <a
      key={tag}
      className={
        'bg-gradient-to-br rounded-md px-3 py-2 m-1 overflow-visible transition-colors duration-300 ' +
        (isHighlighted
          ? 'text-indigo-400 opacity-85 from-dark-500/80 to-dark-700 hover:opacity-100'
          : 'text-gray-300 opacity-55 from-dark-600 to-dark-700 hover:opacity-80')
      }
      data-discover="true"
      href={`/tags/${toSlug(tag)}`}
      aria-label={`Browse tag ${tag}`}
    >
      {tag}
    </a>
  );
}

/**
 * Flex marquee row (duplicated 3x for continuous effect)
 */
function MarqueeRow({ group }) {
  return Array.from({ length: 3 }).map((_, dup) => (
    <div
      key={`tag-marquee-dup-${dup}`}
      className={
        'flex justify-around [--gap:1rem] shrink-0 animate-marquee-left flex-row group-hover:pause gap-[10px]' +
        (group.reverse ? ' direction-reverse' : '')
      }
      aria-hidden={dup > 0} // first is semantic, clones are presentational
    >
      {group.tags.map((tag) => (
        <TagChip key={tag + '-' + dup} tag={tag} isHighlighted={group.highlight.has(tag)} />
      ))}
    </div>
  ));
}

/**
 * Props:
 *  - groups?: pre-built groups [{ tags:string[], reverse?:boolean, highlight?:string[]|Set }]
 *  - tags?: master list for auto-splitting (ignored if groups supplied)
 *  - groupCount?: number (default 3)
 *  - heading?: custom heading text
 *  - ensureUnique?: remove duplicates (default true)
 *  - enableAutoHighlight?: infer highlight set (default true)
 */
export default function HeroTags(props) {
  const {
    heading = 'Browse by Tags',
    groupCount = 3,
    ensureUnique = true,
    enableAutoHighlight = true,
    groups: providedGroups,
    tags
  } = props || {};

  const groups = useGroups({
    groups: providedGroups,
    tags,
    groupCount,
    enableAutoHighlight,
    ensureUnique
  });

  return (
    <section
      className="bg-dark-800 min-w-[300px] w-full min-h-[300px] flex-1 rounded-3xl overflow-hidden border-dark-600/80 border-2 p-6"
      aria-labelledby="hero-tags-heading"
    >
      <div className="flex flex-col gap-[10px] mt-auto pb-6">
        {groups.map((group, gi) => (
          <div
            key={gi}
            className="group flex gap-[1rem] overflow-hidden flex-row"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, transparent 100%)',
              // Longer duration for denser groups = smoother perceived scroll
              '--duration': `${110 + gi * 15}s`
            }}
            aria-label={`tag marquee row ${gi + 1}`}
          >
            <MarqueeRow group={group} />
          </div>
        ))}
        <h2
          id="hero-tags-heading"
          className="mt-6 mb-2 sm:mb-4 text-3xl font-bold font-display text-gray-100 text-center relative z-10"
        >
          {heading}
        </h2>
      </div>
    </section>
  );
}

// Optional named export for advanced usage/testing.
export { HeroTags as RecreatedHeroTags };
