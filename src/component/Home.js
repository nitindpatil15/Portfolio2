import React, { useRef } from "react";
import Nitin from "../Assets/img/Nitin.jpg";
import About from "./About";
import Project from "./Project";
import { useNavigate, Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import resume from '../Assets/Resume/NITIN_DAGADU_PATIL.pdf'

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
      <div className="flex items-center justify-center flex-col-reverse md:flex-row md:ml-20 mt-4">
        <div
          className="mt-2 mx-4 md:mr-16"
          ref={componentRef}
        >
          <div className="md:text-4xl text-3xl text-center">
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
          <div className="my-4 text-justify text-2xl md:text-3xl">
            Welcome to my <span className="text-indigo-500 font-bold">Portfolio</span>! I am a software developer with a passion
            for creating innovative web solutions. My <Link className="hover:no-underline hover:text-red-700" to='https://github.com/nitindpatil15/'>GitHub</Link> repository is a
            treasure trove of creative projects that showcase my skills and
            expertise.
          </div>
          <div className="flex flex-row justify-center md:justify-start">
            <button className="bg-blue-500 mx-2 p-2 text-2xl rounded-3xl hover:text-white hover:bg-gray-500 hover:border-4 hover:border-indigo-600 px-4" onClick={openResume}>Resume</button>
            <button
              type="button"
              className="bg-green-500 mx-2 p-2 text-2xl rounded-3xl hover:text-white hover:bg-gray-500 hover:border-4 hover:border-green-600 px-4"
              onClick={handleproject}
            >
              Project
            </button>
          </div>
        </div>
        <div className="md:container mx-20">
          <Link to="" className="">
            <img
              className="w-36 mt-12 md:w-72 rounded-full"
              src={Nitin}
              alt="Nitin_Img"
            />
          </Link>
        </div>
      </div>
      <About />
      <Project />
    </>
  );
};

export default Home;
