import PINK_NOTE_PAPER from '../assets/backgrounds/pink-note-paper.png'
import YELLOW_NOTE_PAPER from '../assets/backgrounds/yellow-note-paper.png'
import GREEN_NOTE_PAPER from '../assets/backgrounds/green-note-paper.png'
import PLACEHOLDER_SCREENSHOT from '../assets/placeholder-ss.png'

export const projects = [
  {
    id: 1,
    title: 'good energy club',
    description: 'E-commerce landing page for a lifestyle brand. More details about this project go here. This is just placeholder text to show how the description will look when it’s a bit longer.',
    tags: ['React', 'Tailwind', 'Stripe'],
    bgColor: '#FFB3D9',
    accentColor: '#FF2D9B',
    href: '#',
    bg: PINK_NOTE_PAPER,
    screenshot: PLACEHOLDER_SCREENSHOT,
  },
  {
    id: 2,
    title: 'sunset hotel',
    description: 'Responsive website for a boutique hotel.',
    tags: ['Next.js', 'Framer Motion', 'Sanity'],
    bgColor: '#FFD4B3',
    accentColor: '#FF6B35',
    href: '#',
    bg: YELLOW_NOTE_PAPER,
    screenshot: PLACEHOLDER_SCREENSHOT,
  },
  {
    id: 3,
    title: 'plan it. adding a longer name to see how it looks. how long can it be?',
    description: 'Task management app built with React.',
    tags: ['React', 'TypeScript', 'Zustand'],
    bgColor: '#D4FFE0',
    accentColor: '#00C853',
    href: '#',
    bg: GREEN_NOTE_PAPER,
    screenshot: PLACEHOLDER_SCREENSHOT,
  },
]

export const skills = [
  'JavaScript (ES6+), React, TypeScript',
  'Figma, Storybook, Tailwind CSS',
  'Jest, React Testing Library',
]

export const socials = [
  { label: 'instagram', icon: '📸', href: 'https://instagram.com' },
  { label: 'github', icon: '🐙', href: 'https://github.com' },
  { label: 'linkedin', icon: '💼', href: 'https://linkedin.com' },
  { label: 'twitter', icon: '🐦', href: 'https://twitter.com' },
  { label: 'email', icon: '✉️', href: 'mailto:jess@jess.dev' },
]

export const navLinks = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'work', href: '/work' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' },
]
