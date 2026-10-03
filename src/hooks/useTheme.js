import { useState, useEffect } from 'react'

const STORAGE_KEY = "theme"

function getInitalTheme() {

    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === "light" || stored === "dark") {
            return stored
        }
    } catch {

    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? "dark"
        : "light"
}

function useTheme() {
    const [theme, setTheme] = useState(getInitalTheme)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)

        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch {

        }
    }, [theme])

    function toggleTheme() {
        setTheme((previous) => (previous === "dark" ? "light" : "dark"))
    }

    return { theme, toggleTheme }

}

export default useTheme