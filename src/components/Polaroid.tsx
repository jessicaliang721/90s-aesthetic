interface PolaroidProps {
  src: string
  alt: string
  caption: string
  rotate?: number
}

export default function Polaroid({ src, alt, caption, rotate = -3 }: PolaroidProps) {
  return (
    <div
      className="polaroid inline-block"
      style={{ transform: `rotate(${rotate}deg)`, maxWidth: '220px' }}
    >
      <div className="w-full aspect-3/4 bg-retro-pink overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-handwrite text-ink/70 text-center mt-2 text-sm">
        {caption}
      </p>
    </div>
  )
}
