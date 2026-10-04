import content from '../../../data/content'
import './Presentation.css'

function Presentation() {
    return (
        <section id="presentation">
            <h2>{content.about.title.fr}</h2>
            <p>{content.about.paragraph.fr}</p>
        </section>
    )
}

export default Presentation