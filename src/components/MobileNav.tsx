import { navItems } from "../data/navigation"
import { NoteNavItem } from "./NoteNavItem"
import './MobileNav.css' // Import the CSS file for MobileNav

export default function MobileNav({ onClose }: { onClose: () => void }) {
    return (
        <nav
            className="h-full w-full flex flex-col items-center justify-center -space-y-4 text-2xl font-bold mobile-nav"
        >
            {/* {navItems.map(({ label, bg, icon, deco, rotate, tape, ruled, clip }) => (
                <a key={label} href={`#${label.toLowerCase()}`} onClick={onClose}>
                    {icon} {label}
                </a>
            ))} */}

            {navItems.map((item) => (
                <NoteNavItem key={item.label} item={item} onClick={onClose} />
            ))}
        </nav>
    )
}