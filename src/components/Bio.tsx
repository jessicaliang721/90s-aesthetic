type BioProps = {
    bulletList?: React.ReactNode,
    bioText: React.ReactNode
}

const Bio = ({ bulletList, bioText }: BioProps) => {
    return (
        <div className="space-y-4 p-4 lg:pl-0 xl:pl-8 text-xl">
            <h2 className="header-highlight header-highlight-green tracking-wider hand-underline hand-underline-pink text-3xl mb-6 -rotate-3">about me ♡</h2>

            {/* Bio text */}
            {bioText}

            {/* Bullet list */}
            {bulletList && (
                bulletList
            )}
        </div>
    );
};

export default Bio;
