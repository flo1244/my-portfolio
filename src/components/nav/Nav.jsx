import "./nav.css";
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
      const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
         
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#home">
                        
                        <FontAwesomeIcon className="logo" icon={faHome} />
                    </a>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a className="link" href="#about">ABOUT</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a className="link" href="#projects">PROJECTS</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a className="link" href="#skills">SKILLS</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a className="link" href="#contact">CONTACT</a>
                    </li>
                    
                </ul>
            </div>
            
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Nav
