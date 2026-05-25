import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'
import { socials } from '../data/social'
import PhotoSection from '../components/PhotoSection'
import Bio from '../components/Bio'
import StickerSection from '../components/StickerSection'
import { Button } from '../components/Button'
import { SocialIcon } from '../components/SocialIcon'
import Sticker from '../components/Sticker'

import PINK_WASHI_LONG from '../assets/doodles-stickers/pink-washi-long.png'
import PURPLE_WASHI from '../assets/doodles-stickers/purple-washi-tape.png'
import DARK_PINK_PAPER from '../assets/backgrounds/dark-pink-paper.png'
import TAMAGOTCHI_STICKER from '../assets/doodles-stickers/tamagotchi.png'
import TAPE from '../assets/doodles-stickers/masking-tape.png'

export default function Home() {
  return (
    <main className="">

      {/* ── About Section ─────────────────────────────────── */}
      <section id="about" className="flex flex-col lg:flex-row">
        <div className="flex-1 xl:flex-1 flex justify-center items-center">
          <PhotoSection />
        </div>
        <div className="flex-1 xl:flex-2"><Bio skills={skills} /></div>
        <div className="hidden xl:flex-1 xl:inline-flex relative">
          <StickerSection />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PINK_WASHI_LONG}
        alt=""
        aria-hidden="true"
        className="lg:w-8/12 rotate-[-0.5deg] my-12 mx-auto drop-shadow-lg"
      />

      {/* ── Featured Work ──────────────────────────────────── */}
      <section id="work">
        <div className="text-center">
          <h2 className="header-highlight header-highlight-pink tracking-wider hand-underline hand-underline-yellow text-3xl mb-6 rotate-2">featured work</h2>
        </div>

        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-3 gap-8 max-w-6xl mx-auto pt-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center my-4">
          <Button label="view all projects" onClick={() => alert('This will link to the full projects page!')} />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PURPLE_WASHI}
        alt=""
        aria-hidden="true"
        className="lg:w-10/12 rotate-[0.5deg] my-12 mx-auto drop-shadow-lg"
      />

      {/* ── Socials Section ────────────────────────────────── */}
      <section id="socials" className="mb-12 max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="header-highlight header-highlight-green tracking-wider hand-underline hand-underline-lilac text-3xl mb-6 -rotate-1">let's connect!</h2>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="hidden md:flex-1 md:inline-flex justify-center items-center drop-shadow-lg m-10 -rotate-10"
            style={{
              backgroundImage: `url(${DARK_PINK_PAPER})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              aspectRatio: '1 / 1',
              maxWidth: '225px',
            }}
          >
            <Sticker
              imageSrc={TAPE}
              customClasses="absolute -top-4 left-1/2 -translate-x-1/2 w-26 rotate-[-4deg] z-10 pointer-events-none"
            />
            <p className="text-ink text-sm lg:text-lg font-handwrite text-center font-bold tracking-wider p-6">
              Thanks for stopping by! Let's build something cool together. ✿
            </p>
          </div>
          <div className="flex md:flex-2 justify-center gap-12 sm:gap-6 xl:gap-8">
            {socials.map((item) => {
              const { label, icon, href, highlightColor } = item
              return (
                <SocialIcon key={label} icon={icon} label={label} href={href} highlightColor={highlightColor} />
              )
            })}
          </div>
          <div className="hidden md:flex-1 md:inline-flex justify-center">
            <Sticker imageSrc={TAMAGOTCHI_STICKER} float={true} customClasses="w-30 md:w-35 lg:w-40" />
          </div>
        </div>
      </section>
    </main>
  )
}
