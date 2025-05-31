import React, { useRef, useEffect } from "react";
import Nitin from "../Assets/img/Nitin.jpg";
import About from "./About";
import Project from "./Project";
import { useNavigate, Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import resume from '../Assets/Resume/NITIN_DAGADU_PATIL.pdf';
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const componentRef = useRef();

  const handleproject = () => {
    navigate("/project");
  };

  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-14">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse my-5 md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8"
            ref={componentRef}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Nitin Patil
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold">
                <ReactTyped
                  className="text-blue-400"
                  strings={[
                    "Web Developer",
                    "Full Stack Developer",
                    "Front End Developer",
                    "MERN Stack Developer",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Welcome to my portfolio! I'm a passionate software developer dedicated to creating
              innovative web solutions. Explore my{" "}
              <Link
                to="https://github.com/nitindpatil15/"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>{" "}
              to discover my projects and technical expertise.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={openResume}
              >
                View Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleproject}
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-gray-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={Nitin}
                alt="Nitin Patil"
                className="w-auto h-64 md:h-80 rounded-xl object-cover border-4 border-gray-700 shadow-2xl hover:border-blue-500 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <About />
      <Project />
    </div>
  );
};

export default Home;
