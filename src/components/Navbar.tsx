import { Link } from 'react-router-dom'
import { navItems } from "../data/navigation"
import Logo from './Logo'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-6 py-3">
      <nav className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo customClasses="w-xs" />

        {/* Nav links */}
        <ul className="flex items-center gap-4 font-handwrite text-2xl font-bold tracking-wider">
          {navItems.map((item, i) => (
            <li key={item.label} className="flex items-center gap-4">
              {i > 0 && (
                <span className="text-retro-green text-s select-none">★</span>
              )}
              <Link
                to={item.href}
                className={`nav-link hand-underline hand-underline-yellow hand-underline-link`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
