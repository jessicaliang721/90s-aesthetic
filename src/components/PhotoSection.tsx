import TAPE_SRC from '../assets/pink-tape-small.png'
import BG_IMG from '../assets/yellow-scrap-paper.png'

type PhotoSectionProps = {
    profPic: string,
    stickerTop: string,
    stickerBottom: string
}

export default function PhotoSection({ profPic, stickerTop, stickerBottom }: PhotoSectionProps) {
    return (
        <div className="relative w-fit py-8">
            {/* Yellow paper — rendered first so it sits behind everything */}
            <div className="absolute top-5 -left-5 w-75 h-110 bg-yellow-200 rotate-[-5deg] -z-10 shadow-xl shadow-black/20" style={{ backgroundImage: `url(${BG_IMG})` }} />

            {/* Tape */}
            <img
                src={TAPE_SRC}
                alt=""
                aria-hidden="true"
                className="absolute top-2 left-1/2 -translate-x-3/4 z-10 w-35 h-20 -rotate-25 object-cover"
            />

            <div className="relative inline-block">
                {/* Polaroid frame */}
                <div className="bg-white p-3 pb-10 shadow-polaroid rotate-[-10deg] shadow-xl shadow-black/10">
                    <img
                        src={profPic}
                        alt="hi, I'm jessica!"
                        className="w-64 h-80 object-cover object-top"
                    />
                    {/* Caption inside polaroid */}
                    <p className="font-handwrite text-center text-ink mt-2 text-2xl font-semibold tracking-wider">
                        hi, I'm jessica!
                    </p>
                </div>


                <span className="absolute top-4 -right-8 rotate-[-10deg]">
                    <img src={stickerTop} alt="" className="w-24 h-24 object-cover drop-shadow-lg" />
                </span>

                <span className="absolute -bottom-10 -left-8">
                    <img src={stickerBottom} alt="" className="w-30 h-30 object-cover drop-shadow-lg" />
                </span>
            </div>
        </div>
    )
}
