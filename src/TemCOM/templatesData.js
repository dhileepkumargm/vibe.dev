// Sample templates data. Replace with API fetch later.
// Fields: id, title, description, thumbnail, tags, category, difficulty

export const templates = [
  {
    id: 'landing-minimal',
    title: 'Minimal Landing Page',
    description: 'Clean hero, feature grid, pricing section; ideal for SaaS MVP launches.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Landing+Minimal',
    tags: ['landing', 'saas', 'responsive'],
    category: 'Landing',
    difficulty: 'beginner',
    stats: { views: 12400, bookmarks: 320 }
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    description: 'Modular cards, charts placeholder, responsive sidebar navigation.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Dashboard+Analytics',
    tags: ['dashboard', 'charts', 'admin'],
    category: 'Dashboard',
    difficulty: 'intermediate',
    stats: { views: 9800, bookmarks: 210 }
  },
  {
    id: 'ecommerce-product',
    title: 'E‑commerce Product Page',
    description: 'Product gallery, details layout, add to cart interactions scaffold.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Ecommerce+Product',
    tags: ['ecommerce', 'product', 'ui'],
    category: 'E‑commerce',
    difficulty: 'intermediate',
    stats: { views: 15200, bookmarks: 450 }
  },
  {
    id: 'portfolio-grid',
    title: 'Portfolio Grid Showcase',
    description: 'Masonry-ready grid with hover effects and category filtering.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Portfolio+Grid',
    tags: ['portfolio', 'grid', 'filter'],
    category: 'Portfolio',
    difficulty: 'beginner',
    stats: { views: 6700, bookmarks: 120 }
  },
  {
    id: 'blog-starter',
    title: 'Blog Starter Layout',
    description: 'Article list, category tabs, reading progress scaffolding.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Blog+Starter',
    tags: ['blog', 'content', 'markdown'],
    category: 'Content',
    difficulty: 'beginner',
    stats: { views: 8900, bookmarks: 260 }
  },
  {
    id: 'pricing-matrix',
    title: 'Pricing Tier Matrix',
    description: 'Highlight plan, toggle monthly/annual pricing logic placeholder.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Pricing+Matrix',
    tags: ['pricing', 'saas', 'conversion'],
    category: 'Landing',
    difficulty: 'beginner',
    stats: { views: 5400, bookmarks: 110 }
  },
  {
    id: 'auth-flow',
    title: 'Authentication Flow UI',
    description: 'Sign in/up forms, password reset, social providers placeholder.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Auth+Flow',
    tags: ['auth', 'forms', 'security'],
    category: 'System',
    difficulty: 'advanced',
    stats: { views: 20100, bookmarks: 780 }
  },
  {
    id: 'docs-layout',
    title: 'Documentation Layout',
    description: 'Sidebar nav, content area, table of contents anchor scaffold.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Docs+Layout',
    tags: ['docs', 'content', 'navigation'],
    category: 'Content',
    difficulty: 'intermediate',
    stats: { views: 13400, bookmarks: 390 }
  },
  {
    id: 'chat-interface',
    title: 'Chat Interface',
    description: 'Message bubbles, typing indicator, scrollback virtual list placeholder.',
    thumbnail: 'https://via.placeholder.com/400x230.png?text=Chat+Interface',
    tags: ['chat', 'realtime', 'ui'],
    category: 'System',
    difficulty: 'advanced',
    stats: { views: 25700, bookmarks: 940 }
  }
];

export function getCategories() {
  return Array.from(new Set(templates.map(t => t.category))).sort();
}

export function getAllTags() {
  return Array.from(new Set(templates.flatMap(t => t.tags || []))).sort();
}
