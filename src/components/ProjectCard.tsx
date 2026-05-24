import { Link } from 'react-router-dom'
import Sticker from './Sticker'
import MASKING_TAPE from '../assets/doodles-stickers/masking-tape.png'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    bgColor: string
    accentColor: string
    href: string
    screenshot?: string
    bg?: string
    rotate?: string
}

export default function ProjectCard({
    title,
    description,
    accentColor,
    href,
    screenshot,
    bg
}: ProjectCardProps) {
    return (
        <Link
            to={href}
            key={title}
            className="project-card relative pt-8"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div
                className="overflow-hidden"
            >
                <Sticker
                    imageSrc={MASKING_TAPE}
                    customClasses="absolute -top-4 left-1/2 -translate-x-1/2 w-40 md:w-30 z-10 pointer-events-none"
                />

                {/* Screenshot */}
                <div
                    className="overflow-hidden flex justify-center"
                >
                    {screenshot
                        ? <img src={screenshot} alt={title} className="w-[80%] h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center">
                            <span className="font-display text-2xl text-ink/30">{title}</span>
                        </div>
                    }
                </div>


                {/* Info */}
                <div className="pl-5 pr-5 pt-3">
                    <p className="font-handwrite text-sm font-semibold text-ink mb-1">
                        {title}
                    </p>
                    <a
                        href={href}
                        className="font-handwrite text-sm font-semibold hover:underline"
                        style={{ color: accentColor }}
                    >
                        view project →
                    </a>
                </div>
            </div>
        </Link>
    )
}
