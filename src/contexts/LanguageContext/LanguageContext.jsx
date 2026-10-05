import { useState, useEffect, createContext, useContext } from 'react'


const STORAGE_KEY = "language"
const SUPPORTED = ["fr", "en"]

const LanguageContext = createContext()

function getInitialLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (SUPPORTED.includes(saved)) {
            return saved
        }
    } catch {

    }

    return navigator.language.startsWith('en') ? 'en' : 'fr'
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(getInitialLanguage)

    useEffect(() => {
        document.documentElement.lang = language

        try {
            localStorage.setItem(STORAGE_KEY, language)
        } catch {

        }
    }, [language])

    function toggleLanguage() {
        setLanguage((previous) => (previous === "en" ? "fr" : "en"))
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage doit être utilisé dans un languageProvider')
    }

    return context
}