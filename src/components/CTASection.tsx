import DARK_PINK_PAPER from '../assets/backgrounds/dark-pink-paper.png'
import TAPE from '../assets/doodles-stickers/masking-tape.png'

import Sticker from './Sticker'

interface CTASectionProps {
  note?: string,
  headerHighlightColor?: string
  handUnderlineColor?: string
  middle: React.ReactNode
  title?: string,
  customClasses?: string,
  sectionBg?: string,
  sticker: React.ReactNode
}

export const CTASection = ({
  note,
  headerHighlightColor,
  handUnderlineColor,
  middle,
  title,
  customClasses,
  sectionBg,
  sticker
}: CTASectionProps) => {
  return (
    <section 
    id="CTA" 
    className="max-w-7xl mx-auto cta-bg"
    style={sectionBg ? { backgroundImage: `url(${sectionBg})` } : undefined}
    >
      <div className="flex justify-center items-center">
        {/* Dark pink note */}
        <div
          className="hidden md:flex-1 md:inline-flex justify-center items-center drop-shadow-lg m-10 -rotate-10"
          style={{
            backgroundImage: `url(${DARK_PINK_PAPER})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            aspectRatio: '1 / 1',
            maxWidth: '225px',
          }}
        >
          <Sticker
            imageSrc={TAPE}
            customClasses="absolute -top-4 left-1/2 -translate-x-1/2 w-26 rotate-[-4deg] z-10 pointer-events-none"
          />
          <p className="text-ink text-sm lg:text-lg font-handwrite text-center font-bold tracking-wider p-6 whitespace-pre-line">
            {note}
          </p>
        </div>

        {/* Middle content */}
        <div className={`flex md:flex-2 flex-col justify-center align-middle ${customClasses}`}>
          {title && (
            <div className="text-center mb-5">
              <h2 className={`header-highlight header-highlight-${headerHighlightColor || 'green'} tracking-wider hand-underline hand-underline-${handUnderlineColor || 'lilac'} text-3xl mb-6 -rotate-1`}>{title}</h2>
            </div>
          )}
          {middle}
        </div>

        {/* Tamagotchi Sticker */}
        <div className="hidden md:flex-1 md:inline-flex justify-center relative">
          {sticker}
        </div>
      </div>
    </section>
  )
}