type AboutSectionProps = {
    skills: string[]
}

const AboutSection = ({skills}: AboutSectionProps) => {
    return (
        <div className="space-y-4 pt-4">
            <h2>About Me</h2>
            <p className="font-mono text-ink leading-relaxed">
                I'm a front end developer who loves building clean, cute, and
                user-friendly websites.
            </p>
            <p className="font-mono text-ink leading-relaxed">
                I'm passionate about turning ideas into interactive experiences on the web.
                When I'm not coding, you can find me listening to{' '}
                <span className="squiggle font-semibold text-neon-pink">
                    90's R&B
                </span>
                , curating playlists, or at the beach.
            </p>

            {/* Skills list */}
            <ul className="space-y-1 pt-2">
                {skills.map((skill) => (
                    <li key={skill} className="font-handwrite text-base star-bullet text-ink">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutSection;
