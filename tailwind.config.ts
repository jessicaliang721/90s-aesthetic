import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF2D9B',
          yellow: '#FFE600',
          green: '#39FF14',
          cyan: '#00F5FF',
        },
        retro: {
          pink: '#FFB3D9',
          lilac: '#D4B3FF',
          mint: '#B3FFE0',
          peach: '#FFD4B3',
          sky: '#B3E0FF',
        },
        ink: '#1a1a2e',
        paper: '#FEFAF0',
        ruled: '#E8E0D0',
      },
      fontFamily: {
        display: ['"Permanent Marker"', 'cursive'],
        handwrite: ['"Caveat"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"VT323"', 'monospace'],
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
      },
      boxShadow: {
        polaroid: '0 4px 6px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
        sticker: '2px 3px 0px rgba(0,0,0,0.2)',
        tape: '0 2px 4px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'ruled-paper': `repeating-linear-gradient(
          transparent,
          transparent 27px,
          #c8d8e8 27px,
          #c8d8e8 28px
        )`,
      },
    },
  },
  plugins: [],
} satisfies Config
