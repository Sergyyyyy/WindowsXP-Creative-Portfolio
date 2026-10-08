import skillsIcon from "../assets/icons/skills_icon.png";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

const Skills = () => {
  const [toggle, setToggle] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <div
        className="icon-container"
        title="View my experiences"
        onDoubleClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <img src={skillsIcon} alt="skills_icon" />
        <h2>Skills</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -70, right: 970, bottom: 200 }}
          defaultPosition={{ x: 600, y: 100 }}
          handle=".drag-topbar"
        >
          <div ref={nodeRef} className="drag-div about-drag">
            <div className="drag-topbar">
              <h4>about.txt</h4>
              <button
                className="exit-btn"
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              >
                x
              </button>
            </div>

            <div className="scroll">
              <div className="about-top">
                <div className="about-hero">
                  <h1 className="bold-text">GIO - PEÑALOSA</h1>
                </div>
              </div>
              <div className="about-description">
                <h4>
                  I'm a third-year Information Systems student with a growing
                  interest in web development and technology. I enjoy building
                  things from scratch, experimenting with different tools and
                  frameworks, and turning ideas into projects that are both
                  useful and creative. Most of what I learn comes from actually
                  making things, breaking them, figuring out why they broke, and
                  trying again. <br />
                  <br /> I'm interested in both the technical and creative sides
                  of development, especially how design, functionality, and
                  technology come together to create a good experience. I'm
                  always looking for something new to learn or build, whether
                  it's a personal project, a new concept I'm exploring, or an
                  idea that randomly comes to mind. Outside of technology, I
                  enjoy football, running, music, movies, exploring new places,
                  and building random things whenever inspiration hits.
                </h4>
              </div>

              <div className="about-cta">
                <p className="about-cta-message">
                  Have a project in mind, want to collaborate, or just want to
                  say hi? Feel free to reach out through any of my links below.
                </p>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/sergio-bono-pe%C3%B1alosa-955472340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/Sergyyyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Skills;
