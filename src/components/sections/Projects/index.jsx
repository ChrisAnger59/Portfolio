import { useState } from 'react'
import projects from "../../../data/projects"
import ProjectCard from '../../organisms/ProjectCard'

function Projects() {

    const [activeFilter, setActiveFilter] = useState("tous")

    const filters = [
        { id: "tous", label: "Tous"},
        { id: "react", label: "React"},
        { id: "php", label: "PHP"},
        { id: "cadrage", label: "Cadrage"}
    ]

    const visibleProjects = 
        activeFilter === "tous"
            ? projects
            : projects.filter((project) => project.categories.includes(activeFilter))

    return (
        <section id="projects">
            <h2>Mes Projets</h2>
            <div>
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        aria-pressed={activeFilter === filter.id}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div>
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        link={project.link}
                        linkLabel={project.linkLabel}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects