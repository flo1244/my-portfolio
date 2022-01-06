import "./about.css";
import Pic from "../img/portfolio.jpg";
import Image from "../img/code.png";


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ Pic } alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                   <em> "First solve the problem. Then, write the code." - John Johnson </em>
                </p>
                <p className="a-desc">
                    My journey into coding started out of curiosity.
                    I love to build things and I can adapt to changes rather freely.
                    Given the freedom &amp; versatility of coding has encouraged me to learn more languages and frameworks.
                    
                </p>
                <h4>Can't wait to work with you!</h4>
                <div className="a-icon">
                    <img src={Image} alt="" className="a-icon-image" />
                    <div className="a-icon-desc">
                        <p><em>"I want to make beautiful things, even if nobody cares,
                            as opposed to ugly things. That's my intent."  - Saul Bass</em></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
