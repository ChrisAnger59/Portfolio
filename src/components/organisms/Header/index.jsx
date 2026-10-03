import ProfilePicture from "../../../assets/photoProfil_CV_Linkedin.png"
import ThemeToggle from "../../molecules/ThemeToggle"
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
                    <li><a href="#presentation">Présentation</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="header-buttons">
                <button type="button" aria-label="Passer en anglais">FR / EN</button>
                
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header