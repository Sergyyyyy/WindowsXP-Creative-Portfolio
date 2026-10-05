import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Taskbar from "./components/Taskbar";

function App() {


  return (
    <>
      <div className="loading-animation">
        <div className="loading-container">
          <h2 className="loading-text">BOOTING COMPUTER...</h2>
          <div className="loading-bar">
            <div className="bit bit1"></div>
            <div className="bit bit2"></div>
            <div className="bit bit3"></div>
            <div className="bit bit4"></div>
            <div className="bit bit5"></div>
            <div className="bit bit6"></div>
            <div className="bit bit7"></div>
            <div className="bit bit8"></div>
            <div className="bit bit9"></div>
            <div className="bit bit10"></div>
          </div>
        </div>

        <div className="app-container">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <Taskbar />
      </div>
    </>
  );
}

export default App;
