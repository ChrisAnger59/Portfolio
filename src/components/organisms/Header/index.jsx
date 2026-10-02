import ProfilePicture from "../../../assets/photoProfil_CV_Linkedin.png"

function Header() {
    return (
        <header>
            <div>
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
        
            <button type="button" aria-label="Passer en anglais">FR / EN</button>
        
            <button type="button" aria-label="activer le thème sombre">logoLune</button>
        </header>
    )
}

export default Header