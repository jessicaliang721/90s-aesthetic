interface ContentCardProps {
  title?: string
  children: React.ReactNode
  bg?: string        // image url
  bgColor?: string   // hex or css color
  classNames?: string
}

export const ContentCard = ({ title, children, bg, bgColor, classNames }: ContentCardProps) => {
  const backgroundStyle = bg
    ? {
      backgroundImage: `url(${bg})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }
    : {
      backgroundColor: bgColor ?? '#ffffff',
    }

  return (
    <div
      className={`px-8 py-8 rounded-lg drop-shadow-md mb-10 ${classNames}`}
      style={backgroundStyle}
    >
      {title && (
        <h2 className="font-display text-3xl text-ink mb-6 flex items-center gap-3">
          {title}
        </h2>
      )}

      <div className="font-body text-sm text-ink/80 leading-relaxed">
        {children}
      </div>
    </div>
  )
}