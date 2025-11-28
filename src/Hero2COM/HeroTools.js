import React from 'react';

// Three simplified tool cards replacing the previous complex interactive card
// Adjust styling as needed to match your design system.

function ToolCard({ title, subtitle, description, actionLabel, href, gradient }) {
  return (
    <div className={`relative rounded-2xl p-6 border border-white/10 bg-dark-800/60 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_4px_18px_-4px_rgba(0,0,0,0.55)] transition-shadow group overflow-hidden`}>      
      <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient} blur-xl`} aria-hidden />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
          <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-white/10 text-white/60 bg-white/5">{subtitle}</span>
        </h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-sm">{description}</p>
        <div className="mt-5">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            {actionLabel}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HeroTools() {
  return (
    <div className="max-w-md mx-auto">{/* changed from grid layout since only one card remains */}
      <ToolCard
        title="Design"
        subtitle="UI"
        description="Generate sleek, modern UI layouts and responsive sections with smart semantic structure."
        actionLabel="Launch Designer"
        href="#design"
        gradient="from-fuchsia-500/20 via-pink-500/15 to-purple-500/10"
      />
      <ToolCard
        title="coming soon"
        subtitle="X"
        description="coming soon"
        actionLabel="Launch coming soon"
        href="#coming soon"
        gradient="from-fuchsia-500/20 via-pink-500/15 to-purple-500/10"
      />
      <ToolCard
        title="coming soon"
        subtitle="X"
        description="coming soon."
        actionLabel="Launch coming soon"
        href="#coming soon"
        gradient="from-fuchsia-500/20 via-pink-500/15 to-purple-500/10"
      />
    </div>
  );
}
