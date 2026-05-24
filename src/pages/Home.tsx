import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'
import PhotoSection from '../components/PhotoSection'
import AboutSection from '../components/AboutSection'
import StickerSection from '../components/StickerSection'
import PINK_WASHI_LONG from '../assets/doodles-stickers/pink-washi-long.png'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <main className="">

      {/* ── About Section ─────────────────────────────────── */}
      <section id="about" className="flex flex-col lg:flex-row">
        <div className="flex-1 xl:flex-1 flex justify-center items-center">
          <PhotoSection />
        </div>
        <div className="flex-1 xl:flex-2"><AboutSection skills={skills} /></div>
        <div className="hidden xl:flex-1 xl:inline-flex relative">
          <StickerSection />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PINK_WASHI_LONG}
        alt=""
        aria-hidden="true"
        className="w-8/12 rotate-[-0.5deg] my-12 mx-auto drop-shadow-lg"
      />


      {/* ── Featured Work ──────────────────────────────────── */}
      <section id="work">
        <div className="text-center">
          <h2 className="header-highlight header-highlight-pink tracking-wider hand-underline hand-underline-yellow text-3xl mb-6 rotate-2">featured work</h2>
        </div>

        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center my-4">
          <Button label="view all projects →" onClick={() => alert('This will link to the full projects page!')} />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}

      {/* ── Fun (YT) Section ────────────────────────────────── */}


    </main>
  )
}
