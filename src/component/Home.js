import React, { useRef } from "react";
import Nitin from "./Nitin.jpg";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import { useNavigate, Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { usePDF } from "react-to-pdf";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();
  const componentRef = useRef();

  const { toPdf, savePdf } = usePDF({
    content: componentRef,
  });

  const handleDownloadPdf = () => {
    toPdf();
    savePdf("NitinPatilResume.pdf");
  };
  const handleproject = () => {
    navigate("/project");
  };
  return (
    <>
      <div className="my-3 mx-3 Top-Section">
        <div
          className="mt-5 ml-5"
          style={{ fontSize: "1.9rem" }}
          ref={componentRef}
        >
          <b> Hello,</b>
          <div>
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
            <button
              type="button"
              className="btn btn-primary mx-2 res_pro"
              onClick={handleDownloadPdf}
            >
              Resume
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2 res_pro"
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
              style={{
                marginTop: "10%",
                width: "60%",
                borderRadius: "40%",
                boxShadow: "10px 10px 2px black",
              }}
            />
          </Link>
        </div>
      </div>
      <About />
      <Project />
      <Skills />
    </>
  );
};

export default Home;
