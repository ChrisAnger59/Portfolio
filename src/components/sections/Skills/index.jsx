import SkillCat from '../../molecules/SkillCat'
import skills from '../../../data/skills'
import content from '../../../data/content'
import './Skills.css'

function Skills() {
    return (
        <section id="skills">
            <h2>{content.skills.title.fr}</h2>
            <div className='skills-cards'>
                {skills.map((skill) => 
                    <SkillCat 
                        key={skill.id}
                        title={skill.title}
                        items={skill.items}
                    />
                )}
            </div>
        </section>
    )
}

export default Skills