import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Exprinece from "./Pages/Exprinece/Exprinece";
import Project from "./Pages/Project/Project";
import Techstack from "./Pages/TechStack/Techstack";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
     <Layout />
    <About />
    <Techstack />
    <Project />
    <Exprinece />
    <Education />
    <Contact /> 
  
    <div className="footer">
        
      <h4 className="text-center">
        Made With🤩 M Shayan Shakeel &Copy; 2023  
      </h4>
      
    </div>
    <ScrollToTop smooth color="#1E1E2C"
style={{backgroundColor : "#C27F52" , borderRadius : "50px" , borderColor : "white"}}
    />
   
    </>
  );
}

export default App;
