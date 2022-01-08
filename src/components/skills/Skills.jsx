import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";


const Skills = () => {
    return (
        
        <section id="skills" className="skills">
            <div className="s-content">
                <h1 className="s-title">Skills</h1>
                <h3 className="s-sub-title">Developer Skills</h3>
                <div className="language-wrapper">
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faHtml5} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faCss3Alt} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faJsSquare} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faReact} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faGitAlt} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={faGithubSquare} /></p>
                                    
                
                </div>
                <h3 className="s-sub-title">Currently Learning</h3>
                <div className="coming-soon">
                     <p class="skill"><FontAwesomeIcon className="s-icon" icon={faWordpress} /></p>
                    <p class="skill"><FontAwesomeIcon className="s-icon" icon={ faGem} /></p>
                </div>
                <h3 className="s-sub-title">Tech Stack</h3>
                <div className="tool-wrapper">
                     <p class="tool">Chrome DevTools</p>
                     <p class="tool">GitHub Pages</p>
                     <p class="tool">Adobe Creative Suite</p>
                      <p class="tool">Visual Studio Code</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
