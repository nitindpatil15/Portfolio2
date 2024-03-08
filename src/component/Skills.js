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
        <img className="btn logo" src={c} alt="" />
        <img className="btn logo" src={cpp} alt="" />
        <img className="btn logo" src={py} alt="" />
        <img className="btn logo" src={js} alt="" />
        <img className="btn logo" src={HTML} alt="" />
        <img className="btn logo" src={CSS} alt="" />
        <img className="btn logo" src={mdb} alt="" />
        <img className="btn logo" src={react} alt="" />
        <img className="btn logo" src={ex} alt="" />
        <img className="btn logo" src={njs} alt="" />
        <img className="btn logo" src={vstudio} alt="" />
        <img className="btn logo" src={github} alt="" />
      </div>
    </>
  );
};

export default Skills;
