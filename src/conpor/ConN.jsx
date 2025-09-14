import React from "react";
import "./ConN.css";
import "./Card.css";

const SkillsSection = ({setPage}) => {
  return (
    <div className="skills-container">
      <h3>ทักษะและความสามารถ</h3>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="skill-image"
            />
          </div>
          <div className="skill-info">
            <h3>JavaScript</h3>
            <p>Frontend & Backend Development</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="skill-image"
            />
          </div>
          <div className="skill-info">
            <h3>React</h3>
            <p>Modern Web Applications</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="skill-image"
            />
          </div>
          <div className="skill-info">
            <h3>HTML5</h3>
            <p>Web Structure & Semantics</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="skill-image"
            />
          </div>
          <div className="skill-info">
            <h3>CSS3</h3>
            <p>Styling & Animations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

