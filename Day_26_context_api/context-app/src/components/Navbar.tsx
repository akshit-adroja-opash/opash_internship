import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className={`navbar ${theme}`}>
            <h1>Context API Demo</h1>   
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </nav>
    );
};

export default Navbar;