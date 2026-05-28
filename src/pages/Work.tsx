import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FilterBar } from '../components/FilterBar'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { CTASection } from '../components/CTASection'
import { Button } from '../components/Button'
import Sticker from "../components/Sticker";

import GRID_PAPER from '../assets/backgrounds/grid-paper.png'
import PINK_HEART_DOODLE from '../assets/doodles-stickers/pink-heart-doodle-unfilled.png'
import GREEN_STAR_DOODLE from '../assets/doodles-stickers/green-star-doodle.png'
import { useProjects } from '../hooks/useProjects'


export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { projects, loading, error } = useProjects();

  const navigate = useNavigate()

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category.includes(activeFilter))

  return (
    <main className="">
      <div className="mb-2 md:mb-4 text-center max-w-6xl mx-auto">
        <h2 className="header-highlight header-highlight-lilac tracking-wider hand-underline hand-underline-pink text-3xl mb-8 -rotate-3">my work</h2>
        <p className="font-mono leading-relaxed text-lg px-2">Here’s a sample of the work I’ve created over the years — both professionally and personally. I love creating web experiences that balance function and aesthetics: things that <span className="squiggle font-semibold text-retro-green squiggle-green">work well</span>, <span className="squiggle font-semibold text-neon-pink squiggle-pink">look good</span>, and <span className="squiggle font-semibold text-retro-lilac squiggle-lilac">feel enjoyable</span> to use. I’m also not above creating a tool for myself whenever I spot a problem that needs solving!</p>
      </div>

      <FilterBar active={activeFilter} onChange={setActiveFilter} />

      <ProjectsGrid projects={filtered} loading={loading} error={error} />

      {filtered.length === 0 && (
        <p className="font-handwrite text-center text-ink/50 mt-12 text-lg">
          no projects here yet~ ✿
        </p>
      )}

      <CTASection
        note="have a project in mind or want to collaborate? ꕤ"
        customClasses="p-10"
        middle={
          <>
            <p className='text-center font-display text-lg tracking-wider'>Think I’d be the perfect fit for an open role on your team?</p>
            <Button label="let's chat!" onClick={() => navigate('/contact')} />
          </>
        }
        sectionBg={GRID_PAPER}
        sticker={
          <>
            <Sticker imageSrc={GREEN_STAR_DOODLE} customClasses="md:w-12 lg:w-16 absolute -left-2 -top-18" />
            <Sticker imageSrc={PINK_HEART_DOODLE} customClasses="md:w-14 lg:w-18 absolute left-[30%] lg:left-[55%]" />

          </>

        }
      />
    </main>
  )
}
