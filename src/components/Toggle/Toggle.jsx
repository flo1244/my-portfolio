import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context";


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <FontAwesomeIcon className="t-icon" icon={faSun} />
            <FontAwesomeIcon className="t-icon" icon={faMoon} />
            <div className="toggle-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25}}>
                
            </div>
        </div>
    )
}

export default Toggle
