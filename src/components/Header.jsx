import { useContext } from "react"
import { MdDarkMode } from "react-icons/md"
import { ThemeContext } from "../contexts/ThemeContext"
import { CiSun } from "react-icons/ci"

const Header = () => {
    const [isDark, setIsDark] = useContext(ThemeContext)

    const handleThemeChange = () => {
        setIsDark(!isDark)
        localStorage.setItem('isDarkMode', !isDark)
    }

    return (
        <header className={`header-container ${isDark ? 'dark' : ''}`}>
            <div className="header-content">
                <h2 className="title">Where in the world?</h2>
                <p onClick={handleThemeChange}>
                   {isDark ?  <MdDarkMode /> : <CiSun />}
                    &nbsp;&nbsp;Dark Mode
                </p>
            </div>
        </header>
    )
}

export default Header
