import content from '../../../data/content'
import './Curriculum.css'

function Curriculum() {
    return (
        <section id="curriculum">
            <div className="curriculum-presentation">
                <p>{content.hero.availability.fr}</p>
                <h1>{content.hero.title.fr}</h1>
                <p>{content.hero.intro.fr}</p>
                <a href="/CV_alternance.pdf">{content.hero.cvLink.fr}</a>
            </div>

            <div className="curriculum-details">
                <h2>{content.hero.briefTitle.fr}</h2>
                <div>
                    <h3>{content.hero.degreeLabel.fr}</h3>
                    <p>{content.hero.degreeValue.fr}</p>
                </div>

                <div>
                    <h3>{content.hero.goalLabel.fr}</h3>
                    <p>{content.hero.goalValue.fr}</p>
                </div>

                <div>
                    <h3>{content.hero.paceLabel.fr}</h3>
                    <p>{content.hero.paceValue.fr}</p>
                </div>

                <div>
                    <h3>{content.hero.locationLabel.fr}</h3>
                    <p>{content.hero.locationValue.fr}</p>
                </div>
            </div>
        </section>
    )
}

export default Curriculum