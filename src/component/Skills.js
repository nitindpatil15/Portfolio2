import React from "react";
import "./index.css";
import HTML from './HTML.png'
import CSS from './CSS.png'
import react from './react.png'
import js from './javascript.png'
import njs from './node-js.png'
import mdb from './mongodb.png'
import ex from './express.png'
import vstudio from './visualstudio.png'
import github from './github.png'
import py from './python.png'
import c from './c.png'
import cpp from './cpp.png'

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
