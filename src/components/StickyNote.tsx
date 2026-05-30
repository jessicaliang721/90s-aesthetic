import { Link } from 'react-router-dom'
import Sticker from './Sticker'
import MASKING_TAPE from '../assets/doodles-stickers/masking-tape.png'

interface StickyNoteProps {
    children: React.ReactNode
    link?: string
    bgUrl: string
    classNames?: string
}

export const StickyNote = ({ children, bgUrl, link, classNames }: StickyNoteProps) => {
  const sharedProps = {
    className: `project-card relative pt-8 drop-shadow-lg ${classNames ?? ''}`,
    style: { backgroundImage: `url(${bgUrl})` },
  }

  const inner = (
    <div className="overflow-hidden">
      {/* Tape */}
      <Sticker
        imageSrc={MASKING_TAPE}
        customClasses="absolute -top-4 left-1/2 -translate-x-1/2 w-30 z-10 pointer-events-none"
      />
      {children}
    </div>
  )

  return link
    ? <Link to={link} {...sharedProps}>{inner}</Link>
    : <div {...sharedProps}>{inner}</div>
}