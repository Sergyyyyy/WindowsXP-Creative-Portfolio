import experienceIcon from "../assets/icons/work_exp_icon.png";
import Draggable from "react-draggable";
import { useState, useRef } from "react";
import textIcon from "../assets/icons/text_icon.ico"; {/* Change here */}

const Experience = () => {
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
        <img src={textIcon} alt="work_exp_icon" className="folder-icon" /> {/* Change here */}
        <h2>Experience</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -140, right: 970, bottom: 120 }}
          defaultPosition={{ x: 900, y: 0 }}
          handle=".drag-topbar"
        >
          <div ref={nodeRef} className="drag-div about-drag">
            <div className="drag-topbar">
              <h4>experience.txt</h4> {/* Change here */}
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
              <div className="experience-header">
                <h2>My Experiences</h2>
              </div>

              <div className="experiences"> 
                <div className="experience">
                  <h3>Web Development Apprentice</h3>

                  <h4>Ad Astra | Web Development Team</h4>

                  <p>2026 - 6 months</p>

                  <ul>
                    <li>Collaborated with a six-member team to develop and maintain web-based projects.</li>
                    <li>Worked on frontend implementation using HTML, CSS, JavaScript, and Bootstrap.</li>
                    <li>Translated Figma designs into responsive, functional web interfaces.</li>
                    <li>Implemented interactive features using JavaScript and SweetAlert2.</li>
                    <li>Gained hands-on experience with debugging, browser compatibility, and collaborative development workflows.</li>
                  </ul>

                  <h3><b className="bold-text">Focus</b>: Frontend Development · UI Implementation · Team Collaboration</h3>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Experience;
