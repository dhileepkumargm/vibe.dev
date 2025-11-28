// Challenge data & helpers
// This is mock data to drive the Challenge page UI scaffolding.

export const challenges = [
  {
    id: 'c1',
    title: 'Build an Accessible Dashboard',
    prizePool: 1000,
    sponsor: 'DesignHub',
    type: 'featured-type-1',
    status: 'open',
    spots: 25,
    taken: 12,
    steps: ['Submit Draft', 'Review', 'Finalize', 'Publish', 'Voting'],
    currentStep: 1,
    description: 'Create a responsive, accessible dashboard with dark mode and keyboard navigation.',
    cover: null,
    hostedBy: '@alex',
    tags: ['accessibility', 'dashboard', 'a11y']
  },
  {
    id: 'c2',
    title: 'Animation Micro‑Interactions',
    prizePool: 500,
    sponsor: 'MotionLab',
    type: 'featured-type-2',
    status: 'open',
    spots: 40,
    taken: 5,
    steps: ['Submit Concept', 'Prototype', 'Refine', 'Handoff', 'Voting'],
    currentStep: 0,
    description: 'Design delightful micro‑interaction animations for buttons and toggles.',
    cover: null,
    hostedBy: '@motiondev',
    tags: ['animation', 'micro', 'interaction']
  },
  {
    id: 'c3',
    title: 'AI Prompt UI Kit',
    prizePool: 750,
    sponsor: 'Promptly',
    type: 'regular',
    status: 'open',
    spots: 50,
    taken: 33,
    steps: ['Ideate', 'Submit Base', 'Refine', 'Polish', 'Voting'],
    currentStep: 2,
    description: 'Build a modular UI kit for AI prompt building workflows.',
    cover: null,
    hostedBy: '@uiwizard',
    tags: ['ai', 'ui-kit', 'forms']
  }
];

export function getOpenChallenges() {
  return challenges.filter(c => c.status === 'open');
}

export function getFeatured(type) {
  return challenges.filter(c => c.type === type);
}

export function getChallenge(id) {
  return challenges.find(c => c.id === id) || null;
}

// Previous (closed / ended) challenges pulled from provided markup snapshot
// Keeping only essential fields for now.
export const previousChallenges = [
  {
    id: 'uiverse-ticket',
    title: 'Uiverse Ticket',
    tagline: 'Design a digital entrance ticket for a Uiverse dev conference',
    description: 'Imagine Uiverse hosting the tech event of the year and you’re designing the tickets! Your mission is to create a digital entrance ticket including event name, date, seat number, maybe even a QR code.',
    date: 'Aug 14, 2025',
    participants: 46,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/02963b76-afbc-4db0-0d76-a3188b649300/challenge'
  },
  {
    id: 'button-mastery-10',
    title: 'Button Mastery 10',
    tagline: 'Recreate this button using CSS or Tailwind',
    description: "Recreate Camden's sophisticated, carbon-fiber textured button. Make it glow, pulse, or add any other special effect that enhances the button's neo-futuristic vibe.",
    date: 'Jul 21, 2025',
    participants: 62,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/908becc1-065d-48ab-d550-2292deb66900/challenge'
  },
  {
    id: 'pixel-art-button',
    title: 'Pixel Art Button',
    tagline: 'Design a pixel art style button using CSS or Tailwind',
    description: 'Dive into the pixel world of retro games and come back with your own pixel art–inspired button. Use CSS or Tailwind and add nostalgic interactions.',
    date: 'Jun 30, 2025',
    participants: 60,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/2ec990c2-1de1-4062-5aa5-c818855c8e00/challenge'
  },
  {
    id: 'button-mastery-9',
    title: 'Button Mastery 9',
    tagline: 'Recreate this button using code',
    description: 'Bring Camden’s soft green button to life using CSS or Tailwind. Add unique micro-interactions to make it special.',
    date: 'Jun 9, 2025',
    participants: 77,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/a5264a5f-b065-44fd-99b5-f39a5e6d1900/challenge'
  },
  {
    id: 'button-mastery-8',
    title: 'Button Mastery 8',
    tagline: 'Replicate this button using code',
    description: "Replicate Talha's futuristic button using CSS or Tailwind. Add your own twist with interactions and effects.",
    date: 'May 18, 2025',
    participants: 87,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/f03e4162-f89c-4684-2b49-789edc7dad00/challenge'
  },
  {
    id: 'battery-widget-replica',
    title: 'Battery Widget Replica',
    tagline: 'Recreate this widget using code',
    description: "Replicate Maxim's futuristic battery widget using CSS or Tailwind. Add sleek interactions or animations.",
    date: 'Apr 27, 2025',
    participants: 56,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/28ff1b7f-846f-4594-b795-8ffe06793800/public'
  },
  {
    id: 'button-mastery-7',
    title: 'Button Mastery 7',
    tagline: 'Replicate this button as close as you can',
    description: 'Replicate this glowing lightbulb button designed by Camden with thoughtful interactions.',
    date: 'Apr 7, 2025',
    participants: 67,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/af762e58-7712-416b-a9cd-c9d054961b00/public'
  },
  {
    id: 'ai-input',
    title: 'AI Input',
    tagline: 'Design an input field for an AI system using CSS or Tailwind.',
    description: 'Design a sleek interactive AI input field that feels like it belongs in an AI-powered interface.',
    date: 'Mar 16, 2025',
    participants: 76,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/9d542844-aba9-4969-6dc5-465bc54bd900/public'
  },
  {
    id: 'button-mastery-6',
    title: 'Button Mastery 6',
    tagline: "Replicate Voicu's button with CSS or Tailwind",
    description: 'Replicate Voicu’s sleek, dark, skeuomorphic button. Elevate with subtle animations and lighting.',
    date: 'Feb 23, 2025',
    participants: 52,
    cover: 'https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/fca61e86-960a-4b60-9615-d7ed7cd49a00/public'
  }
  // (Truncated: Additional previous items from snapshot can be appended similarly.)
];

export function getPreviousChallenges(limit) {
  const list = [...previousChallenges];
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}
