import ProfilePicture from "../../../assets/photoProfil_CV_Linkedin.png"
import ThemeToggle from "../../molecules/ThemeToggle"
import content from '../../../data/content'
import './Header.css'

function Header() {

    const check = window.matchMedia('(prefers-color-scheme: dark)').matches
    return (
        <header>
            <div className="header-presentation">
                <img src={ProfilePicture} alt="Christophe Anger" />
                <p>Christophe Anger</p>
            </div>
        
            <nav>
                <ul>
                    <li><a href="#presentation">{content.nav.about.fr}</a></li>
                    <li><a href="#projects">{content.nav.projects.fr}</a></li>
                    <li><a href="#skills">{content.nav.skills.fr}</a></li>
                    <li><a href="#contact">{content.nav.contact.fr}</a></li>
                </ul>
            </nav>

            <div className="header-buttons">
                <button type="button" aria-label="Passer en anglais">FR / EN</button>
                
                {/* Switch beetween french and english, incoming */}
                {/* <ThemeToggle /> */}
            </div>
        </header>
    )
}

export default Header