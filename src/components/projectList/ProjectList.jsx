import "./projectList.css";
import Project from "../project/Project";
import {products} from "../../data.js";

const ProjectList = () => {
    return (
        <section id="projects" className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    My Portfolio Projects
                </h1>
                <p className="pl-desc">
                    This portfolio contains projects that showcase my coding
                    skills and creativity.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} title={item.title} para={item.para} skills={item.skills} />
                ))}
                
                
            </div>
            
        </section>
    );
};

export default ProjectList
