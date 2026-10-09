import skillsIcon from "../assets/icons/skills_icon.png";
import Draggable from "react-draggable";
import { useState, useRef } from "react";
import textIcon from "../assets/icons/text_icon.ico"; {/* Change here */}

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
        <img src={textIcon} alt="skills_icon" className="folder-icon" />
        <h2>skills.txt</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -210, right: 970, bottom: 60 }}
          defaultPosition={{ x: 950, y: 50 }}
          handle=".drag-topbar"
        >
          <div ref={nodeRef} className="drag-div about-drag">
            <div className="drag-topbar">
              <h4>skills.txt</h4>
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
              <div className="skills-container">
                <div className="skills-header">
                  <h2>My Skills</h2>
                </div>
                <div className="skills">
                  <div className="skill-group">
                    <h3>Frontend Development</h3>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="skill-group">
                    <h3>Backend Development</h3>
                    <ul>
                      <li>Python</li>
                      <li>C#</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                  <div className="skill-group">
                    <h3>Tools & Workflow</h3>
                    <ul>
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>VS Code</li>
                      <li>Figma</li>
                      <li>Canva</li>
                    </ul>
                  </div>
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
