import { useState } from 'react'
import MobileNav from './MobileNav'
// import Navbar from './Navbar'
import LOGO from '../assets/jess-dev-logo.png'

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div>
            <img src={LOGO} alt="Logo" className="mx-auto block w-xs" />

            {/* Mobile hamburger button */}
            <button
                className="fixed top-4 left-20 z-50 lg:hidden font-handwrite text-3xl"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? '✕' : '☰'}
            </button>

            {/* Mobile nav — hidden on md and up */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <MobileNav onClose={() => setMobileOpen(false)} />
                </div>
            )}

            {/* Desktop navbar — hidden below md */}
            {/* <div className="hidden md:block">
                <Navbar />
            </div> */}
        </div>
    )
}