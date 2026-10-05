import content from '../../../data/content'
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Curriculum.css'

function Curriculum() {

    const { language } = useLanguage()

    return (
        <section id="curriculum">
            <div className="curriculum-presentation">
                <p>{content.hero.availability[language]}</p>
                <h1>{content.hero.title[language]}</h1>
                <p>{content.hero.intro[language]}</p>
                <a href="/CV_alternance.pdf">{content.hero.cvLink[language]}</a>
            </div>

            <div className="curriculum-details">
                <h2>{content.hero.briefTitle[language]}</h2>
                <div>
                    <h3>{content.hero.degreeLabel[language]}</h3>
                    <p>{content.hero.degreeValue[language]}</p>
                </div>

                <div>
                    <h3>{content.hero.goalLabel[language]}</h3>
                    <p>{content.hero.goalValue[language]}</p>
                </div>

                <div>
                    <h3>{content.hero.paceLabel[language]}</h3>
                    <p>{content.hero.paceValue[language]}</p>
                </div>

                <div>
                    <h3>{content.hero.locationLabel[language]}</h3>
                    <p>{content.hero.locationValue[language]}</p>
                </div>
            </div>
        </section>
    )
}

export default Curriculum