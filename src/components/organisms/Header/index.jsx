import ProfilePicture from "../../../assets/photoProfil_CV_Linkedin.png"
import ThemeToggle from "../../molecules/ThemeToggle"
import content from '../../../data/content'
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContext"
import './Header.css'

function Header() {

    const check = window.matchMedia('(prefers-color-scheme: dark)').matches
    const { language, toggleLanguage } = useLanguage()
    return (
        <header>
            <div className="header-presentation">
                <img src={ProfilePicture} alt="Christophe Anger" />
                <p>Christophe Anger</p>
            </div>
        
            <nav>
                <ul>
                    <li><a href="#presentation">{content.nav.about[language]}</a></li>
                    <li><a href="#projects">{content.nav.projects[language]}</a></li>
                    <li><a href="#skills">{content.nav.skills[language]}</a></li>
                    <li><a href="#contact">{content.nav.contact[language]}</a></li>
                </ul>
            </nav>

            <div className="header-buttons">
                <button 
                    type="button"
                    onClick={toggleLanguage}
                    aria-label={language === "fr" ? "Switch to English" : "Passer au Français"}
                >
                    {language === "fr" ? "EN" : "FR"}
                </button>
                
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header