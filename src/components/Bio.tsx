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
            {/* {list && skills.length > 0 && (
                <div className="w-fit border-4 border-retro-pink rounded-lg p-4 border-dashed">
                    <h3 className="text-center text-xl tracking-wider hand-underline hand-underline-lilac mb-6">Top Skills</h3>
                    <ul className="space-y-1">
                        {skills.map((skill, index) => (
                            <li
                                key={skill}
                                className={`font-handwrite star-bullet text-ink tracking-wider ${bulletColors[index % bulletColors.length]}`}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
            {bulletList && (
                bulletList
            )}
        </div>
    );
};

export default Bio;
