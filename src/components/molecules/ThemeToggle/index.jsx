import useTheme from '../../../hooks/useTheme'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <button 
            type="button"
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={isDark ? "Activer le theme clair" : "Activer le theme sombre"}
        >
            {isDark ? (
                <img src="/sun-icon.png" alt="logo de soleil" />
            ) : (
                <img src="/moon-icon.png" alt="logo de lune" />
            )}
        </button>
    )
}

export default ThemeToggle