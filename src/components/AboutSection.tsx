import Bio from "./Bio"
import PhotoSection from "./PhotoSection"
import StickerSection from "./StickerSection"

interface AboutSectionProps {
    bulletList?: React.ReactNode,
    bioText: React.ReactNode
}

export const AboutSection = ({ bulletList, bioText }: AboutSectionProps) => {
    return (
        <section id="about" className="flex flex-col lg:flex-row">
            <div className="flex-1 xl:flex-1 flex justify-center items-center">
                <PhotoSection />
            </div>
            <div className="flex-1 xl:flex-2">
                <Bio bulletList={bulletList} bioText={bioText} />
                </div>
            <div className="hidden xl:flex-1 xl:inline-flex relative">
                <StickerSection />
            </div>
        </section>
    )
}