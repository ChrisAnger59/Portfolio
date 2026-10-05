import content from "../../../data/content"
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Contact.css'

function Contact() {

    const { language } = useLanguage()

    return (
        <section id="contact">
            <h2>{content.contact.title[language]}</h2>
            <div className='contact-info'>
                <p>{content.contact.paragraph[language]}</p>
                <a href="mailto:christophe.anger.pro@gmail.com">christophe.anger.pro@gmail.com</a>
                <a href="https://github.com/ChrisAnger59/">{content.contact.github[language]}</a>
                <a href="https://www.linkedin.com/in/christophe-anger/">{content.contact.linkedin[language]}</a>
            </div>
        </section>
    )
}

export default Contact