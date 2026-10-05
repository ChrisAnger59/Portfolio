import SkillCat from '../../molecules/SkillCat'
import skills from '../../../data/skills'
import content from '../../../data/content'
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Skills.css'

function Skills() {

    const { language } = useLanguage()

    return (
        <section id="skills">
            <h2>{content.skills.title[language]}</h2>
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