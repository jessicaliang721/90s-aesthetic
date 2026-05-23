import GREEN_PAPER from '../assets/backgrounds/green-paper.png'
import BEIGE_PAPER from '../assets/backgrounds/beige-scrap-paper.png'
import PINK_GRID_PAPER from '../assets/backgrounds/pink-grid-paper.png'
import PURPLE_PAPER from '../assets/backgrounds/purple-paper.png'
import PINK_HEART_DOODLE from '../assets/doodles-stickers/pink-heart-doodle.png'
import PINK_STAR_DOODLE from '../assets/doodles-stickers/pink-star-doodle.png'
import GOLD_STAR_STICKER from '../assets/doodles-stickers/gold-star-sticker.png'
import THREE_LINES_DOODLE from '../assets/doodles-stickers/three-lines-doodle.png'
import PURPLE_PAPERCLIP from '../assets/purple-paperclip.png'
import GREEN_STAR_DOODLE from '../assets/doodles-stickers/green-star-doodle.png'
import ENVELOPE_STICKER from '../assets/doodles-stickers/envelope-sticker.png'
import PINK_HEART_DOODLE_UNFILLED from '../assets/doodles-stickers/pink-heart-doodle-unfilled.png'
import MASKING_TAPE from '../assets/doodles-stickers/masking-tape.png'

export const navItems = [
    {
        label: 'About',
        href: "/about",
        bg: GREEN_PAPER,
        leftIcon: PINK_HEART_DOODLE,
        rightIcon: PINK_STAR_DOODLE,
        rotate: '-1deg',
        underlineColor: 'pink',
        customClassesLeft: "w-12 mr-8",
        customClassesRight: 'w-10 ml-10 mt-10',
        tape: MASKING_TAPE
    },
    {
        label: 'Work',
        href: "/work",
        bg: BEIGE_PAPER,
        leftIcon: GOLD_STAR_STICKER,
        rightIcon: THREE_LINES_DOODLE,
        rotate: '0.5deg',
        underlineColor: 'green',
        customClassesLeft: "w-18 mr-8",
        customClassesRight: 'w-6 ml-10'
    },
    {
        label: 'Experience',
        href: "/experience",
        bg: PINK_GRID_PAPER,
        leftIcon: PURPLE_PAPERCLIP,
        rightIcon: GREEN_STAR_DOODLE,
        rotate: '-0.5deg',
        underlineColor: 'lilac',
        customClassesLeft: "w-7 mr-8 -rotate-9",
        customClassesRight: 'w-10 ml-6 mt-8'
    },
    {
        label: 'Contact',
        href: "/contact",
        bg: PURPLE_PAPER,
        leftIcon: ENVELOPE_STICKER,
        rightIcon: PINK_HEART_DOODLE_UNFILLED,
        rotate: '1deg',
        underlineColor: "yellow",
        customClassesLeft: "w-18 mr-6",
        customClassesRight: 'w-8 ml-6'
    },
]