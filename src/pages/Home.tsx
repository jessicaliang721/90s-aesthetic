import { Link } from 'react-router-dom'
// import Polaroid from '../components/Polaroid'
// import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'
import PhotoSection from '../components/PhotoSection'
import AboutSection from '../components/AboutSection'
import StickerSection from '../components/StickerSection'

import PHOTO_URL from '../assets/IMG_5201.jpg'
import GREEN_SMILEY from '../assets/green-smiley-sticker.png'
import PINK_HEART from '../assets/pink-heart-sticker.png'
import HEADPHONES_STICKER from '../assets/headphones.png'
import PHONE_STICKER from '../assets/pink-cellphone.png'
import CASSETTE_STICKER from '../assets/purple-mixtape.png'
import GREEN_STAR_STICKER from '../assets/green-star-sticker.png'

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
        <div className="hidden xl:flex-1 xl:inline-flex">
          <StickerSection sticker1={HEADPHONES_STICKER} sticker2={PHONE_STICKER} sticker3={CASSETTE_STICKER} sticker4={GREEN_STAR_STICKER} />
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
