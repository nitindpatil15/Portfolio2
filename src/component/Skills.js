import React from "react";
import "./index.css";
import HTML from "../Assets/img/HTML.png";
import CSS from "../Assets/img/CSS.png";
import react from "../Assets/img/react.png";
import js from "../Assets/img/javascript.png";
import njs from "../Assets/img/nodejs.png";
import mdb from "../Assets/img/mongodb.png";
import ex from "../Assets/img/express.png";
import vstudio from "../Assets/img/visualstudio.png";
import github from "../Assets/img/github.png";
import py from "../Assets/img/python.png";

const Skills = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="text-dark text-center">My Skills</h1>
        <div className="skill container col-md-9">
          <div className="skill-box my-2">
            <img className="logo" src={py} alt="" />
            <h4 className="text-dark text-center">Python</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={js} alt="" />
            <h4 className="text-dark text-center">JavaScript</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={HTML} alt="" />
            <h4 className="text-dark text-center">HTML</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={CSS} alt="" />
            <h4 className="text-dark text-center">CSS</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={mdb} alt="" />
            <h4 className="text-dark text-center">MongoDB</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={react} alt="" />
            <h4 className="text-dark text-center">React</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={ex} alt="" />
            <h4 className="text-dark text-center">Express Js</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={njs} alt="" />
            <h4 className="text-dark text-center">Node Js</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={vstudio} alt="" />
            <h4 className="text-dark text-center">VS Studio</h4>
          </div>
          <div className="skill-box my-2">
            <img className="logo" src={github} alt="" />
            <h4 className="text-dark text-center">GitHub</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
