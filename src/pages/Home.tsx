import { Link } from 'react-router-dom'
import Polaroid from '../components/Polaroid'
import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/content'

// Placeholder image — swap with your actual photo
const PHOTO_URL = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80'

export default function Home() {
  return (
    <main className="grid max-w-5xl 2xl:max-w-2xl mx-auto px-6 py-12 space-y-24">

      {/* ── About Section ─────────────────────────────────── */}
      <section id="about" className="grid md:grid-cols-2 gap-10 relative">

          <div className="pt-8">
            <div className="md:grid md:grid-cols-2 md:items-start md:gap-6">
              {/* Left column: photo + stickers */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <Polaroid
                    src={PHOTO_URL}
                    alt="Jess smiling at the beach"
                    caption="hi, i'm jess! ☺"
                    rotate={-3}
                  />
                  {/* Floating smiley sticker */}
                  <span
                    className="absolute -bottom-4 -right-4 text-3xl sticker-float"
                    style={{ '--r': '-5deg' } as React.CSSProperties}
                  >
                    😊
                  </span>
                </div>

                <div className="hidden md:flex flex-col items-center gap-6 pt-4 opacity-80">
                  <span className="text-4xl sticker-float" style={{ '--r': '8deg' } as React.CSSProperties}>🎧</span>
                  <span className="text-4xl sticker-float" style={{ '--r': '-6deg', animationDelay: '0.5s' } as React.CSSProperties}>📱</span>
                  <span className="text-3xl sticker-float" style={{ '--r': '4deg', animationDelay: '1s' } as React.CSSProperties}>📼</span>
                </div>
              </div>

              {/* Right column: bio */}
              <div className="space-y-4 pt-4 md:pt-0">
                <p className="font-body text-ink/80 leading-relaxed">
                  I'm a front end developer who loves building clean, cute, and
                  user-friendly websites.
                </p>
                <p className="font-body text-ink/80 leading-relaxed">
                  I'm passionate about turning ideas into interactive experiences on the web.
                  When I'm not coding, you can find me listening to{' '}
                  <span className="squiggle font-semibold text-neon-pink">
                    90's R&B
                  </span>
                  , curating playlists, or at the beach.
                </p>

                {/* Skills list */}
                <ul className="space-y-1 pt-2">
                  {skills.map((skill) => (
                    <li key={skill} className="font-handwrite text-base star-bullet text-ink/80">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>

      {/* ── Featured Work ──────────────────────────────────── */}
      <section id="work">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-3xl text-ink">
            featured work
          </h2>
          {/* Squiggly underline decoration */}
          <span className="text-neon-yellow text-2xl">✦</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/work"
            className="font-handwrite text-lg font-bold px-8 py-3 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            view all projects →
          </Link>
        </div>
      </section>

      {/* ── Doodle divider ─────────────────────────────────── */}
      <div className="flex items-center gap-3 opacity-40 select-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="text-neon-pink text-xs">
            {i % 3 === 0 ? '★' : i % 3 === 1 ? '♡' : '✦'}
          </span>
        ))}
      </div>
    </main>
  )
}
