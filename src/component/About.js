import React from "react";
import Nitin1 from "../Assets/img/Nitin1.jpg";

const About = () => {
  return (
    <>
      <div className="text-4xl border p-2 text-center font-bold my-4 text-white bg-black">About Me</div>
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
             <img src={Nitin1} alt="Nitin Patil" className="md:hidden w-10 rounded-full mx-2"/> <div className="bg-gray-400 p-2 rounded-br-xl rounded-tl-xl">Brief <span className="text-indigo-600 mx-2">Introduction</span></div>
            </h1>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              I am currently in my final year of pursuing a degree in Computer
              Engineering at Godavari College of Engineering, Jalgaon,
              Maharashtra .
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              As a web developer, I am passionate about creating innovative and
              visually appealing web solutions. I am proficient in HTML, CSS,
              JavaScript, and React, with hands-on experience in building
              responsive interfaces, optimizing performance, and focusing on
              user-centered design.
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-black text-justify">
              I have gained valuable experience in the MERN stack through
              various personal projects and a 6-week internship, where I honed
              my skills in full-stack development. I also plan to learn Next.js
              in the near future to further enhance my expertise.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
