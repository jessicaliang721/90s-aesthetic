import { useState } from 'react'
import MobileNav from './MobileNav'
// import Navbar from './Navbar'
import LOGO from '../assets/jess-dev-logo.png'
import Sticker from './Sticker'
import GREEN_SMILEY from '../assets/green-smiley-sticker.png'

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <>
            {/* Mobile nav block */}
            <div className="lg:hidden pt-7 pb-7">
                <div className="relative flex items-center justify-between">
                    {/* Mobile hamburger button */}
                    <button
                        className="z-50 font-handwrite text-4xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? '✕' : '☰'}
                    </button>
                    <img src={LOGO} alt="Jessica Liang logo" className="absolute left-1/2 -translate-x-1/2 w-xs z-50" />
                </div>

                {/* Mobile nav — hidden on md and up */}
                {mobileOpen && (
                    <div className="fixed inset-0 z-40">
                        <MobileNav onClose={() => setMobileOpen(false)} />
                    </div>
                )}
            </div>

            {/* Desktop navbar — hidden below md */}
            {/* <div className="hidden md:block">
                <Navbar />
            </div> */}
        </>
    )
}