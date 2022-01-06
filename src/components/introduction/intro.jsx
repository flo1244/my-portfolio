import "./index.css";
import Me from "../../img/profile.jpg";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is </h2>
                    <h1 className="i-name">Florence Hollowell </h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Front-End Web Developer</div>
                                <div className="i-title-item">Web Designer</div>
                                <div className="i-title-item">Freelancer</div>
                                <div className="i-title-item">Mother</div>
                                <div className="i-title-item">Coffee Enthusiast</div>
                            </div>
                    </div>
                    <p className="i-desc">
                        I design and develop custom web applications, specializing in creating
                        stylish, modern, and responsive websites.               
                       
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ Me } alt="profile-pic" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
