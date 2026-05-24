import { Link } from 'react-router-dom'
import Sticker from './Sticker';

interface NoteNavItemProps {
    item: {
        label: string;
        bg: string;
        leftIcon: string;
        rightIcon: string;
        rotate: string;
        underlineColor: string;
        href: string;
        customClassesLeft?: string;
        customClassesRight?: string;
        tape?: string;
    };
    onClick: () => void;
}

export const NoteNavItem = ({ item, onClick }: NoteNavItemProps) => {
    const {
        label,
        bg,
        leftIcon,
        rightIcon,
        rotate,
        underlineColor,
        href,
        customClassesLeft,
        customClassesRight,
        tape
    } = item;

    return (
        <Link
            to={href}
            key={label}
            className="flex items-center justify-center min-h-20 transition-transform hover:scale-[1.02] active:scale-[0.98] note-item drop-shadow-lg"
            style={{
                backgroundImage: `url(${bg})`,
                transform: `rotate(${rotate})`
            }}
            onClick={onClick}
        >

             {/* Tape — layered on top, positioned top right */}
            {tape && (
                <Sticker
                    imageSrc={tape}
                    customClasses="absolute top-4 left-4 w-26 rotate-[-20deg] z-10 pointer-events-none"
                    />
            )}

            <Sticker imageSrc={leftIcon} float={false} customClasses={customClassesLeft} />

            {/* Label with underline */}
            <span className={`font-display tracking-widest text-3xl text-ink relative hand-underline hand-underline-${underlineColor}`}>
                {label}
            </span>

            <Sticker imageSrc={rightIcon} float={false} customClasses={customClassesRight} />
        </Link>
    )
}