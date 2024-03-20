import React, { useRef } from "react";
import Nitin from "./Nitin.jpg";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import { useNavigate, Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "./index.css";
import Contact from "./Contact";
import resume from './NitinPatilResume.pdf'

const Home = () => {
  const navigate = useNavigate();
  const componentRef = useRef();

  const handleproject = () => {
    navigate("/project");
  };
  const openResume = () => {
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write('<iframe width="100%" height="100%" src="' + resume + '" frameBorder="0" allowFullScreen></iframe>');
  }

  return (
    <>
      <div className="mb-3 mx-2 Top-Section">
        <div
          className="mt-2 mx-1"
          style={{ fontSize: "1.9rem" }}
          ref={componentRef}
        >
          <div className="word_home">
          <b> Hello,</b><br />
            <b>I am </b>
            {"  "}
            <b>
              <span>
                <ReactTyped
                  className="text-primary"
                  strings={[
                    " Web Developer",
                    " Full Stack Developer",
                    " Front End Developer",
                    " MERN Stack Developer",
                    " Web Developer",
                    " Full Stack Developer",
                    " Front End Developer",
                    " MERN Stack Developer",
                    " Web Developer",
                    " Full Stack Developer",
                    " Front End Developer",
                    " MERN Stack Developer",
                    " Web Developer",
                    " Full Stack Developer",
                    " Front End Developer",
                    " MERN Stack Developer",
                  ]}
                  typeSpeed={100}
                />
              </span>
            </b>
          </div>
          <div className="my-4 title_home">
            Welcome to my portfolio! I am a software developer with a passion
            for creating innovative web solutions. My GitHub repository is a
            treasure trove of creative projects that showcase my skills and
            expertise.
          </div>
          <div className="container resume">
            <button className="btn-primary mx-2 res_pro" onClick={openResume}>Resume</button>
            <button
              type="button"
              className="btn-success mx-2 res_pro"
              onClick={handleproject}
            >
              Project
            </button>
          </div>
        </div>
        <div className="container text-center ">
          <Link to="">
            <img
              className="port"
              src={Nitin}
              alt="Nitin_Img"
            />
          </Link>
        </div>
      </div>
      <About />
      <Project />
      <Skills/>
      <Contact/>
    </>
  );
};

export default Home;
