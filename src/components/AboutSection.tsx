type AboutSectionProps = {
    skills: string[]
}

const AboutSection = ({skills}: AboutSectionProps) => {
    const bulletColors = ['bullet-pink', 'bullet-yellow', 'bullet-green'];

    return (
        <div className="space-y-4 p-4 lg:pl-0 xl:pl-8 text-xl">
            <h2>About Me</h2>
            <p className="font-mono text-ink leading-relaxed">
                Hi! I'm <span className="highlight-pink">Jessica</span> - a frontend developer who loves building clean, thoughtful, and functional user experiences with a touch of personality. As a proud 90s kid, I’m drawn to cozy nostalgia and enjoy sprinkling my own creative flavor into the things I make (this website included 😉).
            </p>
            <p className="font-mono text-ink leading-relaxed">
                Outside of coding, I’m a mama to three tiny humans who keep life wonderfully chaotic. When I manage to sneak in some time alone, I’m usually <span className="squiggle font-semibold text-neon-pink squiggle-pink">reading</span>, <span className="squiggle font-semibold text-retro-lilac squiggle-lilac">journaling</span>, <span className="squiggle font-semibold text-retro-green squiggle-green">crafting</span>, or finding new hobbies to keep my creative juices flowing.            
            </p>

            {/* Skills list */}
            <h3>Top Skills</h3>
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
    );
};

export default AboutSection;
