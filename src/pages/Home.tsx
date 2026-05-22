import { Link } from 'react-router-dom'
// import Polaroid from '../components/Polaroid'
// import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'
import PhotoSection from '../components/PhotoSection'
import AboutSection from '../components/AboutSection'
import StickerSection from '../components/StickerSection'

export default function Home() {
  return (
    <main className="">

      {/* ── About Section ─────────────────────────────────── */}
      <section id="about" className="flex flex-col lg:flex-row">
        <div className="flex-1 xl:flex-1 flex justify-center items-center">
          <PhotoSection />
        </div>
        <div className="flex-1 xl:flex-2"><AboutSection skills={skills} /></div>
        <div className="hidden xl:flex-1 xl:inline-flex">
          <StickerSection />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}

      {/* ── Featured Work ──────────────────────────────────── */}
      <section id="work">

      </section>

      {/* ── Washi divider ─────────────────────────────────── */}

      {/* ── Fun (YT) Section ────────────────────────────────── */}


    </main>
  )
}
