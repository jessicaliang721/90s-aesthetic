type StickerSectionProps = {
    sticker1: string,
    sticker2: string,
    sticker3: string,
    sticker4: string
}

export default function StickerSection({ sticker1, sticker2, sticker3, sticker4 }: StickerSectionProps) {
    return (
        <>
            {/* ── Stickers ── absolute positioned, won't affect layout */}
            <img
                src={sticker1}
                alt=""
                aria-hidden="true"
                className="absolute top-6 w-45 rotate-[8deg] sticker-float drop-shadow-lg"
            />
            <img
                src={sticker2}
                alt=""
                aria-hidden="true"
                className="absolute top-1/3 right-15 w-50 -rotate-6 sticker-float drop-shadow-lg"
                style={{ animationDelay: '0.5s' }}
            />
            <img
                src={sticker3}
                alt=""
                aria-hidden="true"
                className="absolute bottom-1 right-25 w-50 rotate-[4deg] sticker-float drop-shadow-lg"
                style={{ animationDelay: '1s' }}
            />
            <img
                src={sticker4}
                alt=""
                aria-hidden="true"
                className="absolute top-2/5 right-60 w-20 rotate-[4deg] drop-shadow-lg sticker-float"
                style={{ animationDelay: '1.5s' }}
            />

            {/* ── Doodle SVGs ── stars, hearts, squiggles */}
            <span className="absolute top-20 right-[5%] text-retro-lilac text-5xl opacity-70 rotate-15">✦</span>
            <span className="absolute text-6xl bottom-36 right-80 text-neon-yellow opacity-60">♡</span>
            <span className="absolute bottom-50 right-15 opacity-60 rotate-[-5deg]">
                {/* hand-drawn star SVG */}
                <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2 L11.5 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8.5 8 Z"
                        stroke="#FF2D9B" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                </svg>
            </span>
        </>
    )
}