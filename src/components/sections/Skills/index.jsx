import SkillCat from '../../molecules/SkillCat'
import skills from '../../../data/skills'

function Skills() {
    return (
        <section id="skills">
            <h2>Mes Compétences</h2>
            <div>
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