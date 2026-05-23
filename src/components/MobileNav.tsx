import { navItems } from "../data/navigation"
import { NoteNavItem } from "./NoteNavItem"

export default function MobileNav({ onClose }: { onClose: () => void }) {
    return (
        <nav
            className="h-full w-full flex flex-col items-center justify-center -space-y-4 text-2xl font-bold mobile-nav"
        >
            {navItems.map((item) => (
                <NoteNavItem key={item.label} item={item} onClick={onClose} />
            ))}
        </nav>
    )
}