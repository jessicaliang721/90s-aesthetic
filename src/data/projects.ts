import PLACEHOLDER_SCREENSHOT from '../assets/placeholder-ss.png'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'good energy club',
    slug: 'good-energy-club',
    description: 'E-commerce landing page for a lifestyle brand.',
    category: 'e-commerce',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
      mobile: PLACEHOLDER_SCREENSHOT
    },
    href: 'https://goodenergyclub.com',
    date: 'Oct 2024',
    featured: true,
    longDescription: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec aliquet mi.</p>
      <p>Etiam id tortor et neque venenatis pulvinar. Maecenas tristique pulvinar sagittis.</p>
    `,
    techStack: ["JavaScript", "TypeScript", "CSS", "React"],
    impact: ["lowered cost", "improved customer happiness", "reduced maintenance"]
  },

  {
    id: 2,
    title: 'sunset hotel',
    slug: 'sunset-hotel',
    description: 'Responsive website for a boutique hotel.',
    category: 'landing pages',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Nov 2024',
    featured: true,
  },

  {
    id: 3,
    title: 'plan it.',
    slug: 'plan-it',
    description: 'Task management app built with React.',
    category: 'web apps',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Jan 2024',
    featured: true,
  },

  {
    id: 4,
    title: 'palette studio',
    slug: 'palette-studio',
    description: 'Color palette generator tool for designers.',
    category: 'tools',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Feb 2023',
    featured: false,
  },

  {
    id: 5,
    title: 'journaling co.',
    slug: 'journaling-co',
    description: 'Landing page for a journaling subscription box.',
    category: 'landing pages',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Jun 2022',
    featured: false,
  },

  {
    id: 6,
    title: 'component kitchen',
    slug: 'component-kitchen',
    description: 'A personal UI component library and design system.',
    category: 'ui experiments',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'May 2023',
    featured: false,
  },
]