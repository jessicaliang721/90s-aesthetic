import Sticker from './Sticker'

import TAPE_SRC from '../assets/doodles-stickers/pink-tape-small.png'
import BG_IMG from '../assets/backgrounds/yellow-scrap-paper.png'
import PHOTO_URL from '../assets/prof-pic.jpg'
import GREEN_SMILEY from '../assets/doodles-stickers/green-smiley-sticker.png'
import PINK_HEART from '../assets/doodles-stickers/pink-heart-sticker.png'

export default function PhotoSection() {
    return (
        <div className="relative w-fit py-8">
            {/* Yellow paper — rendered first so it sits behind everything */}
            <div className="absolute top-5 -left-5 w-75 h-110 rotate-[-5deg] -z-10 drop-shadow-lg" style={{ backgroundImage: `url(${BG_IMG})` }} />

            {/* Tape */}
            <Sticker imageSrc={TAPE_SRC} float={false} customClasses="absolute top-2 left-1/2 -translate-x-2/3 z-10 w-55 h-12 -rotate-15 object-cover" />

            <div className="relative inline-block">
                {/* Polaroid frame */}
                <div className="bg-white p-3 pb-10 shadow-polaroid rotate-[-10deg] drop-shadow-lg">
                    <img
                        src={PHOTO_URL}
                        alt="hi, I'm jessica!"
                        className="w-64 h-80 object-cover object-top"
                    />
                    {/* Caption inside polaroid */}
                    <p className="font-handwrite text-center text-ink mt-2 text-2xl font-semibold tracking-wider">
                        hi, I'm jessica!
                    </p>
                </div>

                <Sticker imageSrc={PINK_HEART} float={false} customClasses="absolute top-4 -right-8 rotate-[-10deg] drop-shadow-lg w-24 h-24" />

                <Sticker imageSrc={GREEN_SMILEY} float={false} customClasses="absolute -bottom-10 -left-8 rotate-[-10deg] drop-shadow-lg w-30 h-30" />
            </div>
        </div>
    )
}
