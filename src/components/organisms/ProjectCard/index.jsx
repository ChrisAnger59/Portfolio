function ProjectCard({ title, description, tech, link, linkLabel, className='' }) {
    return (
        <article className={`project-card ${className}`.trim()}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {tech.map((ptech) => (
                <li key={ptech}>{ptech}</li>
                ))}
            </ul>
            <a href={link}>{linkLabel}</a>
        </article>
    )
}

export default ProjectCard