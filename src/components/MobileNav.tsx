export default function MobileNav({ onClose }: { onClose: () => void }) {
    return (
        <nav className="bg-retro-pink h-full w-full flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-white">
            <a href="#about" onClick={onClose}>About</a>
            <a href="#work" onClick={onClose}>Work</a>
            <a href="#fun" onClick={onClose}>Fun</a>
        </nav>
    )
}