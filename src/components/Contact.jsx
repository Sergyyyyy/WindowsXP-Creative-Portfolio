import contactIcon from "../assets/icons/contact_icon.png";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

const Contact = () => {
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
        <img src={contactIcon} alt="contact_icon" />
        <h2>contact.txt</h2>
      </div>

      {toggle && (
        <Draggable
          nodeRef={nodeRef}
          bounds={{ left: 0, top: -350, right: 970, bottom: -80 }}
          defaultPosition={{ x: 200, y: -100 }}
          handle=".drag-topbar"
        >
          <div ref={nodeRef} className="drag-div contact-drag">
            <div className="drag-topbar">
              <h4>contact.txt</h4>
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

export default Contact;
