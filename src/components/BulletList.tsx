interface BulletListProps {
    title?: string
    items: string[]
    borderColor?: string
}

const bulletColors = ['bullet-pink', 'bullet-yellow', 'bullet-green']

export const BulletList = ({ title, items, borderColor = '#FF2D9B' }: BulletListProps) => {
    const multiCol = items.length > 4

    return (
        <div
            className="border-2 border-dashed rounded-lg p-4"
            style={{ borderColor }}
        >

            {title && (
                <h3 className="text-xl tracking-wider hand-underline hand-underline-lilac mb-6">
                    {title}
                </h3>
            )}

            <ul className={`grid gap-x-6 gap-y-1 ${multiCol ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={`font-handwrite star-bullet text-ink tracking-wider ${bulletColors[index % bulletColors.length]}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}