import { useState, useRef } from "react";
import aboutIcon from "../assets/icons/about_me_icon.png";
import aboutPic from "../assets/images/newpfp.jpg";
import Draggable from "react-draggable";

const About = () => {
  const [toggle, setToggle] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <div
        className="icon-container"
        title="Learn about me!"
        onDoubleClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <img src={aboutIcon} alt="about_me_icon" />
        <h2>About Me</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -70, right: 1120, bottom: 270 }}
          defaultPosition={{ x: 600, y: 100 }}
        >
          <div ref={nodeRef} className="drag-div about-drag">
            <div className="drag-topbar">
              <h4>About.txt</h4>
              <button
                className="exit-btn"
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              >
                x
              </button>
            </div>
            <div className="about-top">
              <div className="about-hero">
                <h3>Call me Gio!</h3>
                <h4>Based in the Philippines!</h4>
              </div>
              <div className="about-picture">
                <img src={aboutPic} alt="about_pic" className="aboutPic" />
              </div>
            </div>
            <div className="about-description">
              <h4>
                A third-year Information Systems student who
                enjoys building things with technology. I'm interested in web
                development and constantly learning new tools, frameworks, and
                ways to turn ideas into useful and creative projects. I enjoy
                experimenting with different technologies, working on personal
                projects, and improving my skills through hands-on experience.
              </h4>
            </div>

            <div className="about-cta">
              <p className="about-cta-message">Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach out through any of my links below.</p>
              <a href="https://www.linkedin.com/in/sergio-bono-pe%C3%B1alosa-955472340/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="https://github.com/Sergyyyyy" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default About;
