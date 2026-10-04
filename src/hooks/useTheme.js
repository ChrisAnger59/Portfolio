import { useState, useEffect } from 'react'

const STORAGE_KEY = "theme"

function useTheme() {
    const [theme, setTheme] = useState("light")

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