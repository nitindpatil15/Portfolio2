import React from "react";
import "./index.css";
import HTML from "./img/HTML.png";
import CSS from "./img/CSS.png";
import react from "./img/react.png";
import js from "./img/javascript.png";
import njs from "./img/nodejs.png";
import mdb from "./img/mongodb.png";
import ex from "./img/express.png";
import vstudio from "./img/visualstudio.png";
import github from "./img/github.png";
import py from "./img/python.png";

const Skills = () => {
  return (
    <>
      <div className="container-fluid bg-secondary">
        <h1 className="text-white text-center">My Skills</h1>
        <div className="skill container col-md-9">
          <img className="logo" src={py} alt="" />
          <img className="logo" src={js} alt="" />
          <img className="logo" src={HTML} alt="" />
          <img className="logo" src={CSS} alt="" />
          <img className="logo" src={mdb} alt="" />
          <img className="logo" src={react} alt="" />
          <img className="logo" src={ex} alt="" />
          <img className="logo" src={njs} alt="" />
          <img className="logo" src={vstudio} alt="" />
          <img className="logo" src={github} alt="" />
        </div>
        <h1 className="leave my-2"></h1>
      </div>
    </>
  );
};

export default Skills;
