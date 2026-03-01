
import Footer from "./Components/Footer";
// import Subscribe from "./Components/Subscribe";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div>
       <Home  />
       <Skills/>
       <Project/>
       <Contact/>
       {/* <Subscribe/> */}
       <Footer/>
      
    </div>
  );
};

export default App;