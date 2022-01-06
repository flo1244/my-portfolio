import "./project.css";

const Project = ({ img, link, title, para, skills }) => {
    return (
        <div className="p">
            <div className="p-wrapper">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                 
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img" />
                </a>
            </div>
            <div className="p-info">
                <h4>{title}</h4>
                <p>{para}</p>
                <p><strong>Skills:</strong> {skills}</p>
            </div>
        </div>   
    );
};

export default Project
