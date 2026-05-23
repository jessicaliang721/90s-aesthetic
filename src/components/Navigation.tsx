import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MobileNav from './MobileNav'
// import Navbar from './Navbar'
import LOGO from '../assets/jess-dev-logo.png'
import Sticker from './Sticker'
import GREEN_SMILEY from '../assets/green-smiley-sticker.png'
import GREEN_STAR_STICKER from '../assets/green-star-sticker.png'

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false)
    useEffect(() => {
        if (mobileOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        // Clean up on unmount
        return () => document.body.classList.remove('overflow-hidden')
    }, [mobileOpen])

    return (
        <>
            {/* Mobile nav block */}
            <div className={`lg:hidden pt-7 pb-7 ${mobileOpen ? 'fixed top-0 left-0 right-0' : 'relative'} z-50`}>
                <div className="relative flex items-center justify-between">
                    {/* Mobile hamburger button */}
                    <button
                        className="z-50 font-handwrite text-4xl text-ink pl-3"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? '✕' : '☰'}
                    </button>
                    <Link to="/"
                        className="absolute left-1/2 -translate-x-1/2 z-50 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        onClick={() => setMobileOpen(false)}
                    >
                        <img src={LOGO} alt="Jessica Liang logo" className="w-s drop-shadow-lg" />
                    </Link>
                    <Sticker imageSrc={GREEN_STAR_STICKER} float={false} customClasses="rotate-[-10deg] drop-shadow-lg w-15 z-50 pr-3"/>
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