import Header from './components/organisms/Header'
import Contact from './components/sections/Contact'
import Curriculum from './components/sections/Curriculum'
import Presentation from './components/sections/Presentation'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/organisms/Footer'

function App() {
    return(
        <>
        <Header />

        <main>
            <Curriculum />
            <Presentation />
            <Projects />
            <Skills />
            <Contact />
        </main>

        <Footer />
        </>
    )
}

export default App