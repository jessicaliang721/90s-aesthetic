import { Link } from 'react-router-dom'
// import Polaroid from '../components/Polaroid'
// import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'
import PhotoSection from '../components/PhotoSection'
import PHOTO_URL from '../assets/IMG_5201.jpg'
import GREEN_SMILEY from '../assets/green-smiley-sticker.png'
import PINK_HEART from '../assets/pink-heart-sticker.png'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <main className="">

      {/* ── About Section ─────────────────────────────────── */}
      <section id="about" className="flex flex-col md:flex-row">
        <div className="flex-1 lg:flex-2 flex justify-center">
          <PhotoSection profPic={PHOTO_URL} stickerBottom={PINK_HEART
          } stickerTop={GREEN_SMILEY} />
        </div>
        <div className="flex-1 lg:flex-2"><AboutSection skills={skills} /></div>
        <div className="bg-retro-lilac hidden lg:flex-1 lg:inline-flex">03</div>
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
