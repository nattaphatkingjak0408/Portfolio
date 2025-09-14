import React from "react";
import "./ConN.css";
import "./Card.css";

const ProjectsSection = ({setPage}) => {
  return (
    <div className="projects-container">
      <h3 className="h3">โปรเจคที่ผ่านมา</h3>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://via.placeholder.com/300x200?text=Portfolio+Website"
              alt="Portfolio Website"
              className="project-img"
            />
          </div>
          <div className="project-info">
            <h3>Portfolio Website</h3>
            <p>เว็บไซต์แนะนำตัวส่วนตัวที่สร้างด้วย React</p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://via.placeholder.com/300x200?text=To-Do+App"
              alt="To-Do Application"
              className="project-img"
            />
          </div>
          <div className="project-info">
            <h3>To-Do Application</h3>
            <p>แอปพลิเคชันจัดการรายการงานที่ต้องทำ</p>
            <div className="project-tech">
              <span>React</span>
              <span>LocalStorage</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://via.placeholder.com/300x200?text=Weather+App"
              alt="Weather App"
              className="project-img"
            />
          </div>
          <div className="project-info">
            <h3>Weather App</h3>
            <p>แอปพยากรณ์อากาศที่ใช้ API</p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>API</span>
              <span>CSS3</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://via.placeholder.com/300x200?text=Calculator+App"
              alt="Calculator"
              className="project-img"
            />
          </div>
          <div className="project-info">
            <h3>Calculator App</h3>
            <p>เครื่องคิดเลขที่สร้างด้วย JavaScript</p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

