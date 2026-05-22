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
      <section id="about" className="flex flex-col lg:flex-row">
        <div className="flex-1 xl:flex-1 flex justify-center items-center">
          <PhotoSection profPic={PHOTO_URL} stickerBottom={GREEN_SMILEY
          } stickerTop={PINK_HEART} />
        </div>
        <div className="flex-1 xl:flex-2"><AboutSection skills={skills} /></div>
        <div className="bg-retro-lilac hidden xl:flex-1 xl:inline-flex">03</div>
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
