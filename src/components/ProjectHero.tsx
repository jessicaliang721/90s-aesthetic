import { Link } from 'react-router-dom'
import { SocialIcon } from './SocialIcon'
import GITHUB_ICON from '../assets/socials/github-icon.png'
import type { Project } from '../types/project'

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const { title, screenshot, href, mobileScreenshot, githubHref, description } = project

  return (
    <section className="relative px-6 pt-6 pb-12">

      {/* Back link */}
      <Link
        to="/work"
        className="font-handwrite text-sm font-bold text-neon-pink hand-underline hand-underline-pink inline-block mb-8"
      >
        ← back to all projects
      </Link>

      <div className="flex flex-col lg:flex-row items-center gap-8">

        {/* Left — title + description + links */}
        <div className="lg:w-2/5 space-y-6 relative z-10 -rotate-3">

          {/* Title with dashes */}
          <div className="flex items-center justify-center gap-2">
            <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <line x1="10" y1="14" x2="22" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6"  y1="28" x2="22" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="42" x2="22" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <h1 className="text-center font-display text-5xl text-ink leading-tight">
              {title}
            </h1>

            <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <line x1="18" y1="14" x2="6" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="28" x2="6" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="42" x2="6" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Description pill */}
          {description && (
            <div className="flex justify-center">
              <div className="header-highlight header-highlight-pink font-handwrite text-sm font-bold px-4 py-1 rounded-sm relative">
                {description}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            {href && (
            <a  
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-handwrite text-sm font-bold px-4 py-2 border-2 border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
              >
                live site <span className="text-xs">↗</span>
              </a>
            )}
            {githubHref && (
            <a 
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-handwrite text-sm font-bold px-4 py-2 border-2 border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
              >
                <SocialIcon icon={GITHUB_ICON} width={6} height={6} />
                <span>github repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right — device mockups */}
        <div className="lg:w-3/5 relative flex items-end justify-center">

          {/* Desktop mockup */}
          <div className="relative w-full max-w-lg">
            <div className="bg-white rounded-t-lg border-2 border-b-0 border-ink px-3 py-2 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-retro-pink border border-ink/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-neon-yellow border border-ink/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-retro-green border border-ink/20" />
              <div className="flex-1 mx-2 h-4 bg-ruled rounded-full" />
            </div>
            <div className="border-2 border-ink rounded-b-lg overflow-hidden">
              {screenshot
                ? <img
                    src={screenshot}
                    alt={`${title} desktop screenshot`}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: '280px' }}
                  />
                : <div
                    className="w-full flex items-center justify-center bg-retro-pink/20"
                    style={{ height: '280px' }}
                  >
                    <span className="font-display text-2xl text-ink/30">{title}</span>
                  </div>
              }
            </div>
          </div>

          {/* Mobile mockup */}
          {mobileScreenshot && (
            <div className="absolute -bottom-4 -right-2 w-24 border-2 border-ink rounded-xl overflow-hidden bg-white rotate-[3deg] drop-shadow-lg">
              <div className="bg-ink h-3 flex items-center justify-center">
                <div className="w-8 h-1.5 bg-ink/60 rounded-full" />
              </div>
              <img
                src={mobileScreenshot}
                alt={`${title} mobile screenshot`}
                className="w-full object-cover object-top"
                style={{ maxHeight: '160px' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}