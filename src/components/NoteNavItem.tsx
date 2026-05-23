import "./NoteNavItem.css"

interface NoteNavItemProps {
    item: {
        label: string;
        bg: string;
        leftIcon: string;
        rightIcon: string;
        deco: string;
        rotate: string;
        tape?: boolean;
        ruled?: boolean;
        clip?: boolean;
        underlineColor: string;
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
        underlineColor 
    } = item;
    return (
        <div
            key={label}
            className="relative flex items-center justify-center min-h-20 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] note-item drop-shadow-lg"
            style={{
                backgroundImage: `url(${bg})`,
                transform: `rotate(${rotate})`
            }}
            onClick={onClick}
        >
            <span className="text-3xl mr-3">{leftIcon}</span>

            {/* Label with underline */}
            <span className={`font-display tracking-widest text-3xl text-ink relative hand-underline hand-underline-${underlineColor}`}>
                {label}
            </span>

            <span className="text-3xl ml-3">{rightIcon}</span>
        </div>
    )
}