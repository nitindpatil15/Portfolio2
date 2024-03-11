import React from "react";
import "./index.css";
import HTML from './img/HTML.png'
import CSS from './img/CSS.png'
import react from './img/react.png'
import js from './img/javascript.png'
import njs from './img/nodejs.png'
import mdb from './img/mongodb.png'
import ex from './img/express.png'
import vstudio from './img/visualstudio.png'
import github from './img/github.png'
import py from './img/python.png'
import c from './img/c.png'
import cpp from './img/cpp.png'

const Skills = () => {
  return (
    <>
    <h1 className="text-secondary text-center"> Skills</h1>
      <div className="skill col-md-10">
        <img className="logo" src={c} alt="" />
        <img className="logo" src={cpp} alt="" />
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
    </>
  );
};

export default Skills;
