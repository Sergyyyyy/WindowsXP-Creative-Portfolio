import projectsIcon from "../assets/icons/projects_icon.png";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

const Projects = () => {
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
        <img src={projectsIcon} alt="projects_icon" />
        <h2>projects.txt</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -280, right: 970, bottom: -10 }}
          defaultPosition={{ x: 300, y: -200 }}
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
              <div className="projects-container">
                <div className="projects">
                  <div className="project">
                    <h2>Retrofolio</h2>
                    <p>
                      A personal portfolio inspired by the classic Windows XP
                      desktop. Features a nostalgic interface, desktop icons,
                      draggable windows, and interactive sections that present
                      my work and background in a different way.
                    </p>
                    <ul>
                      <li>React</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                  <div className="project">
                    <h2>OmniLio</h2>
                    <p>
                      A social-links experience designed to bring important
                      profiles and online destinations together in one place.
                      Focuses on a clean interface, glassmorphism, and a modern
                      dark theme with green accents.
                    </p>
                    <ul>
                      <li>React</li>
                      <li>CSS</li>
                      <li>Lucid React</li>
                    </ul>
                  </div>
                  <div className="project">
                    <h2>ItineraryPlanner</h2>
                    <p>
                      A travel-planning project focused on organizing
                      destinations and creating a more convenient way to plan
                      trips. An opportunity to experiment with interface design
                      and features that help turn travel ideas into organized
                      itineraries.
                    </p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
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

export default Projects;
