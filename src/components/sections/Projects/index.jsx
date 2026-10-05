import { useState } from 'react'
import projects from "../../../data/projects"
import ProjectCard from '../../organisms/ProjectCard'
import content from '../../../data/content'
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Projects.css'

function Projects() {

    const { language } = useLanguage()

    const [activeFilter, setActiveFilter] = useState("tous")

    const filters = [
        { id: "tous", label: content.projects.filterAll[language]},
        { id: "react", label: content.projects.filterReact[language]},
        { id: "php", label: content.projects.filterPhp[language]},
        { id: "cadrage", label: content.projects.filterScoping[language]}
    ]

    const visibleProjects = 
        activeFilter === "tous"
            ? projects
            : projects.filter((project) => project.categories.includes(activeFilter))

    return (
        <section id="projects">
            <div className='projects-header'>
                <h2>{content.projects.title[language]}</h2>
                <div className='projects-sort-buttons'>
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
            </div>

            <div className='projects-cards'>
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description[language]}
                        tech={project.tech}
                        link={project.link}
                        linkLabel={project.linkLabel[language]}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects