type BioProps = {
    skills: string[]
}

const Bio = ({ skills }: BioProps) => {
    const bulletColors = ['bullet-pink', 'bullet-yellow', 'bullet-green'];

    return (
        <div className="space-y-4 p-4 lg:pl-0 xl:pl-8 text-xl">
            <h2 className="header-highlight header-highlight-green tracking-wider hand-underline hand-underline-pink text-3xl mb-6 -rotate-3">about me ♡</h2>
            <p className="font-mono text-ink leading-relaxed">
                Hi! I'm <span className="highlight-yellow">Jessica</span> - a frontend developer who loves building clean, thoughtful, and functional user experiences with a touch of personality. As a proud 90's kid, I’m drawn to cozy nostalgia and enjoy sprinkling my own creative flavor into the things I make (this website included 😉).
            </p>
            <p className="font-mono text-ink leading-relaxed">
                Outside of coding, I’m a mama to three tiny humans who keep life wonderfully chaotic. When I manage to sneak in some time alone, I’m usually <span className="squiggle font-semibold text-neon-pink squiggle-pink">reading</span>, <span className="squiggle font-semibold text-retro-lilac squiggle-lilac">journaling</span>, <span className="squiggle font-semibold text-retro-green squiggle-green">crafting</span>, or finding new hobbies to keep my creative juices flowing.
            </p>

            {/* Skills list */}
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
        </div>
    );
};

export default Bio;
