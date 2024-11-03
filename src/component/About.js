import React from "react";
import Nitin1 from "../Assets/img/Nitin1.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="text-4xl border p-2 text-center font-bold my-4 text-white bg-black">
        About Me
      </div>
      <div className="flex justify-between items-center">
        <div className="m-5 hidden md:block">
          <img
            src={Nitin1}
            alt="Nitin_Img"
            className="w-40 md:w-[35rem] lg:w-[25rem] rounded-3xl"
          />
        </div>
        <div className="m-4">
          <div className="">
            <h1 className="text-gray-600 md:text-5xl text-3xl my-2 flex">
              <img
                src={Nitin1}
                alt="Nitin Patil"
                className="md:hidden w-10 rounded-full mx-2"
              />{" "}
              <div className="bg-gray-400 p-2 rounded-br-xl rounded-tl-xl">
                Brief <span className="text-indigo-600 mx-2">Introduction</span>
              </div>
            </h1>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              Hello! I'm a passionate web developer in my final year of Computer
              Engineering at Godavari College of Engineering, Jalgaon,
              Maharashtra. I love creating innovative and visually compelling
              web applications, aiming for seamless user experiences through
              optimized, responsive interfaces.
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              With proficiency in HTML, CSS, JavaScript, and React, I bring
              hands-on experience in developing user-centered designs and
              enhancing web performance. I’ve also dived deep into full-stack
              development with the MERN stack, building practical projects and
              honing my skills through a 6-week internship.
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              As I continue to grow in the field, I'm excited to expand my
              expertise with Next.js to further refine my development toolkit.
              I’m always exploring new technologies to push the boundaries of
              what I can create.
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default About;
