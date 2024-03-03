import React from "react";
import Nitin from "./Nitin.jpg";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import { ReactTyped } from "react-typed";
import './index.css'

const Home = () => {
  return (
    <>
      <div className="container my-5 Top-Section">
        <div
          className="mt-5"
          style={{ fontSize: "1.9rem", minWidth: "300px" }}
        >
         <b> Hello,</b>
          <div><b>I am Passionate </b>{"  "}
          <b><span>
            <ReactTyped
              className="text-primary"
              strings={[" Web Developer", " MERN Stack Developer"]}
              typeSpeed={50}
            />
          </span></b>
          </div>
          <div className="my-4">
          Welcome to my portfolio! I am a software developer with a passion for creating innovative web solutions. My GitHub repository is a treasure trove of creative projects that showcase my skills and expertise.
          </div>
        </div>
        <div className="container text-center">
          <img
            src={Nitin}
            alt="Nitin_Img"
            style={{
              width: "45%",
              borderRadius: "50%",
              boxShadow: "10px 10px 2px black",
              minWidth: "350px",
            }}
          />
        </div>
      </div>
      <About />
      <Project />
      <Skills />
    </>
  );
};

export default Home;
