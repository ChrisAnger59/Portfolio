import content from '../../../data/content'
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Presentation.css'

function Presentation() {

    const { language } = useLanguage()

    return (
        <section id="presentation">
            <h2>{content.about.title[language]}</h2>
            <p>{content.about.paragraph[language]}</p>
        </section>
    )
}

export default Presentation