interface SocialIconProps {
  icon: string
  label?: string
  href?: string
  highlightColor?: string
  width?: number
  height?: number
}

export const SocialIcon = ({ icon, label, href, highlightColor, width = 10, height = 10 }: SocialIconProps) => {
  if (href) {
    return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center transition-transform hover:scale-[1.1] active:scale-[0.95]"
    >
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
        <img
          src={icon}
          alt={label}
          className="max-w-full max-h-full object-contain drop-shadow-lg"
        />
      </div>

      {label && (
        <span className={`hidden lg:inline-block relative highlight-${highlightColor || 'yellow'} tracking-wider text-sm lg:text-lg text-ink/70 font-handwrite font-bold mt-4`}>
          {label}
        </span>
      )}
    </a>
  )
  }
  return (
    <>
      <div className={`flex items-center justify-center w-${width} h-${height} md:w-${(width + 2) || 12} md:h-${height + 2}`}>
        <img
          src={icon}
          alt={label}
          className="max-w-full max-h-full object-contain drop-shadow-lg"
        />
      </div>

      {label && (
        <span className={`hidden lg:inline-block relative highlight-${highlightColor || 'yellow'} tracking-wider text-sm lg:text-lg text-ink/70 font-handwrite font-bold mt-4`}>
          {label}
        </span>
      )}
    </>
  )
}