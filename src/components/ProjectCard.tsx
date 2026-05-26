import { Link } from 'react-router-dom'
import Sticker from './Sticker'
import MASKING_TAPE from '../assets/doodles-stickers/masking-tape.png'
import PINK_NOTE_PAPER from '../assets/backgrounds/pink-note-paper.png'
import YELLOW_NOTE_PAPER from '../assets/backgrounds/yellow-note-paper.png'
import GREEN_NOTE_PAPER from '../assets/backgrounds/green-note-paper.png'
import PURPLE_NOTE_PAPER from '../assets/backgrounds/purple-note-paper.png'


interface ProjectCardProps {
    title: string
    description: string
    slug: string
    screenshot?: string
    rotate?: string
    index: number
}

export default function ProjectCard({
    title,
    description,
    slug,
    screenshot,
    index
}: ProjectCardProps) {
    const bgs = [PINK_NOTE_PAPER, YELLOW_NOTE_PAPER, GREEN_NOTE_PAPER, PURPLE_NOTE_PAPER]
    const bg = bgs[index % bgs.length]

    return (
        <div className="flex flex-col w-75">
            <Link
                to={slug}
                key={title}
                className="project-card relative pt-8 drop-shadow-lg"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div
                    className="overflow-hidden"
                >
                    {/* Tape */}
                    <Sticker
                        imageSrc={MASKING_TAPE}
                        customClasses="absolute -top-4 left-1/2 -translate-x-1/2 w-30 z-10 pointer-events-none"
                    />

                    {/* Screenshot */}
                    <div
                        className="overflow-hidden flex justify-center"
                    >
                        {screenshot
                            ? <img src={screenshot} alt={title} className="w-[80%] h-full object-cover object-top" />
                            : <div className="w-full h-full flex items-center justify-center">
                                <span className="font-display text-2xl text-ink/30">{title}</span>
                            </div>
                        }
                    </div>

                    {/* Title */}
                    <h3 className="font-mono text-lg font-bold text-ink px-4 my-2">
                        {title}
                    </h3>
                </div>
            </Link>

            {/* Description and Link */}
            <div className="mt-2 px-4 flex flex-col items-start gap-2">
                <p className="text-medium text-ink/80 mb-2">{description}</p>
                <Link
                    to={slug}
                    className="text-medium font-handwrite text-(--pink) text- font-bold tracking-wider hand-underline hand-underline-yellow hand-underline-link"
                >
                    view project →
                </Link>
            </div>
        </div>
    )
}
