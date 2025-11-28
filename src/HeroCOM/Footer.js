import React, { useCallback } from 'react';

// Data configuration (easy to extend)
const SECTIONS = [
	{
		heading: 'PRODUCT',
		links: [
			{ label: 'Create', href: '/create' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'FAQ', href: '/pricing#faq' },
			{ label: 'Download', href: '/mac' }
		]
	},
	{
		heading: 'MADE BY US',
		links: [
			{ label: 'Courses', href: 'https://designcode.io', external: true },
			{ label: 'UI Kit', href: 'https://designcodeui.com', external: true },
			{ label: 'Video Editor', href: 'https://dreamcut.ai', external: true },
			{ label: 'Mockups', href: 'https://angle.sh', external: true }
		]
	},
	{
		heading: 'CONNECT',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
			{ label: 'Support', href: 'mailto:support@example.com' },
			{ label: 'Report issue', href: 'mailto:support@example.com?subject=Issue%20Report' }
		]
	}
];

const SOCIAL = [
	{
		label: 'Twitter',
		href: 'https://x.com',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
		)
	},
	{
		label: 'YouTube',
		href: 'https://youtube.com',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
		)
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
		)
	}
];

export default function Footer() {
    // Theme toggle removed per request; dark/light theming now relies on global app logic if any.

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<footer className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-100 dark:border-neutral-800 py-12 md:py-16 m-4 rounded-2xl relative overflow-hidden">
			<svg width="0" height="0" className="absolute" aria-hidden="true">
				<defs>
					<filter id="premium-glow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="4" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
			</svg>
			{/* Decorative subtle gradient / noise overlays */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.18),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.18),transparent_65%)]" />
			<button
				onClick={scrollToTop}
				aria-label="Scroll to top"
				className="absolute top-8 right-8 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors bg-neutral-100 dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m18 15-6-6-6 6" /></svg>
			</button>
			<div className="px-6 md:px-12 max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 md:mb-14 w-full">
					<div className="flex flex-col items-center md:items-start mb-10 md:mb-0 max-w-sm">
						<div className="flex items-center space-x-2 mb-4">
							{/* Animated Vibe badge */}
							<div className="flex items-center space-x-3 group cursor-pointer select-none" aria-label="Vibe.dev Home" tabIndex={0}>
								<div className="relative">
									<div
										className="relative w-12 h-10 bg-gradient-to-br from-yellow-300 via-yellow-400 via-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.3),0_0_50px_rgba(251,191,36,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)] border border-yellow-200/30 backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out group-hover:shadow-[0_0_35px_rgba(251,191,36,0.5),0_0_70px_rgba(251,191,36,0.2)]"
										style={{ filter: 'url(#premium-glow)' }}
									>
										<span className="text-black font-black text-lg tracking-tighter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300">Vibe</span>
										<div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-60" />
									</div>
									<div className="absolute inset-0 w-12 h-10 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-2xl blur-md opacity-40 -z-10 group-hover:opacity-60 group-hover:blur-lg transition-all duration-500" />
									<div className="absolute inset-0 w-12 h-10 bg-gradient-to-br from-yellow-200 to-amber-400 rounded-2xl blur-xl opacity-20 -z-20 group-hover:opacity-40 transition-all duration-700" />
									<div className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0ms' }} />
									<div className="absolute top-2 right-0 w-0.5 h-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '200ms' }} />
									<div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '400ms' }} />
								</div>
								<span className="text-yellow-400 font-bold text-xl tracking-tight drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300 group-hover:text-yellow-300">.dev</span>
							</div>
						</div>
						<p className="text-neutral-500 dark:text-neutral-400 text-sm text-center md:text-left leading-relaxed">
							Empowering creators with fast, elegant UI building blocks and immersive design surfaces for the modern web.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-8 md:gap-12 text-sm w-full md:w-auto">
						{SECTIONS.map(section => (
							<div key={section.heading} className="flex flex-col items-start">
								<h3 className="font-thin mb-3 text-[10px] tracking-wide text-neutral-500 dark:text-neutral-400">
									{section.heading}
								</h3>
								<ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
									{section.links.map(link => (
										<li key={link.label}>
											<a
												href={link.href}
												target={link.external ? '_blank' : undefined}
												rel={link.external ? 'noreferrer noopener' : undefined}
												className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors relative group focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-400/60 rounded-sm"
											>
												{link.label}
												<span className="absolute left-0 bottom-[-1px] w-0 h-px bg-neutral-900 dark:bg-neutral-100 transition-all group-hover:w-full" />
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="border-t border-neutral-200/60 dark:border-neutral-800/70 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex flex-col md:flex-row items-center gap-4 order-2 md:order-1">
						<p className="text-xs text-neutral-500 dark:text-neutral-500 text-center md:text-left">
							© {new Date().getFullYear()} Vibe. All rights reserved.{' '}
							<a href="https://github.com" target="_blank" rel="noreferrer" className="underline hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Open Source ❤️</a>.
						</p>
					</div>
					<div className="flex space-x-6 mb-0 order-1 md:order-2">
						{SOCIAL.map(s => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noreferrer noopener"
								className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors bg-neutral-100 dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-400/60"
							>
								<span className="sr-only">{s.label}</span>
								{s.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

// ThemeToggle component removed per request.

