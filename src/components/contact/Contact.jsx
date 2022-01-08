import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_c0oza1b', 'template_murc6c6', formRef.current, 'user_9oKkeF0bo3hozR2spgomA')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact" className="c">
            <div className="c-bg"></div>  
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Let's discuss your project </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <FontAwesomeIcon className="c-icon" icon={faPhone} />
                            +1 334-540-5122
                        </div>
                        <div className="c-info-item">
                            <a href="mailto:flo.1244@gmail.com">
                            <FontAwesomeIcon className="c-icon" icon={faEnvelope} /></a>
                           hello@florence
                        </div>
                        <div className="c-info-item"><a href="https://twitter.com/techcodeflo" target="_blank" rel="noreferrer"><FontAwesomeIcon className="c-icon" icon={faTwitter} /></a> Twitter</div>
                        <div className="c-info-item"><a href="https://github.com/flo1244" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="c-icon" icon={faGithub} /></a>GitHub </div>
                        <div className="c-info-item"><a href="https://www.linkedin.com/in/florence-hollowell-963a16115/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="c-icon" icon={faLinkedin} /></a> LinkedIn</div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>What's your story?</b> Get in touch. Always freelancing if the right project comes along. </p>
                     
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you ..."}
                    </form>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact
