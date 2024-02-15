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
          className="container text-center mt-5"
          style={{ fontSize: "3.6rem", minWidth: "300px" }}
        >
          Hey , I am <span class="text-primary">Nitin Patil</span>
          <div>And I am Passionate </div>
          <span>
            <ReactTyped
              className="text-primary"
              strings={["Web Developer", "MERN Stack Developer"]}
              typeSpeed={50}
            />
          </span>
        </div>
        <div className="container text-center">
          <img
            src={Nitin}
            alt="Nitin_Img"
            style={{
              width: "50%",
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
