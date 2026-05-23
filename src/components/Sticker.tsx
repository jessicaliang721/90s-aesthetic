type StickerProps = {
    imageSrc: string;
    altText?: string;
    customClasses?: string;
    animationDelay?: number;
    float?: boolean; // if true, won't apply floating animation
};

const Sticker = ({
    imageSrc,
    altText = "",
    customClasses,
    animationDelay = 1,
    float = false
}: StickerProps) => {
    return (
        <img
            aria-hidden="true"
            src={imageSrc}
            alt={altText}
            className={`drop-shadow-lg ${float ? 'sticker-float' : ''} ${customClasses}`}
            style={
                animationDelay !== undefined
                    ? { animationDelay: `${animationDelay}s` }
                    : undefined
            }
        />
    )
}

export default Sticker;