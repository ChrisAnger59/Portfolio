import content from "../../../data/content"
import './Contact.css'

function Contact() {
    return (
        <section id="contact">
            <h2>{content.contact.title.fr}</h2>
            <div className='contact-info'>
                <p>{content.contact.paragraph.fr}</p>
                <a href="mailto:christophe.anger.pro@gmail.com">christophe.anger.pro@gmail.com</a>
                <a href="https://github.com/ChrisAnger59/">{content.contact.github.fr}</a>
                <a href="https://www.linkedin.com/in/christophe-anger/">{content.contact.linkedin.fr}</a>
            </div>
        </section>
    )
}

export default Contact