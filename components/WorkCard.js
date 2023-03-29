import React from 'react';
import "./WorkCardStyles.css";
import pro1 from "../assets/react1.jpg";
import pro2 from "../assets/react2.png";
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-handling">
      <div className="project-container">
       <div className="project-card">
        <img src={pro1} alt="image"/>
        <h2 className="project-title">Login Registration Project</h2>
        <div className="pro-details">
          <p>MERN STACK Project</p>
          <div className="pro-btns">
            <NavLink to="https://prateek96git.github.io/events/" className="btn">View</NavLink>
          </div>
        </div>
       </div>
       <div className="project-card">
        <img src={pro2} alt="image"/>
        <h2 className="project-title">Music Player API Project</h2>
        <div className="pro-details">
          <p>React Project</p>
          <div className="pro-btns">
            <NavLink to="https://prateek96git.github.io/Project1/" className="btn">View</NavLink>
          </div>
        </div>
       </div>
      </div>
      </h1>
    </div>
  )
}

export default WorkCard
