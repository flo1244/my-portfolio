import Intro from "./components/introduction/intro.jsx";
import About from "./components/About.jsx";
import ProjectList from "./components/projectList/ProjectList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Skills from "./components/skills/Skills.jsx";
import Toggle from "./components/Toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";
import { useContext } from "react";
import Nav from "./components/nav/Nav.jsx";





const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    
    <div style={{ backgroundColor: darkMode ? "#393d3f" : "white", color: darkMode && "white" }}>
      <Nav />    
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;