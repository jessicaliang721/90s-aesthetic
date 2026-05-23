import GREEN_PAPER from '../assets/green-paper.png'
import BEIGE_PAPER from '../assets/beige-scrap-paper.png'
import PINK_GRID_PAPER from '../assets/pink-grid-paper.png'
import PURPLE_PAPER from '../assets/purple-paper.png'

export const navItems = [
    {
        label: 'ABOUT',
        href: "/about",
        bg: GREEN_PAPER,
        leftIcon: '🩷',
        rightIcon: '✦',
        deco: '✦',
        rotate: '-1deg',
        underlineColor: 'pink'
    },
    {
        label: 'WORK',
        href: "/work",
        bg: BEIGE_PAPER,
        leftIcon: '⭐',
        rightIcon: '✦',
        deco: '= =',
        rotate: '0.5deg',
        underlineColor: 'green'
    },
    {
        label: 'EXPERIENCE',
        href: "/experience",
        bg: PINK_GRID_PAPER,
        leftIcon: '📎',
        rightIcon: '✦',
        deco: '✦',
        rotate: '-0.5deg',
        underlineColor: 'lilac'
    },
    {
        label: 'CONTACT',
        href: "/contact",
        bg: PURPLE_PAPER,
        leftIcon: '✉️',
        rightIcon: '✦',
        deco: '🩷',
        rotate: '1deg',
        underlineColor: "yellow"
    },
]