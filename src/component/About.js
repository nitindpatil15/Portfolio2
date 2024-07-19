import React from "react";
import Nitin1 from "../Assets/img/Nitin1.jpg";

const About = () => {
  return (
    <>
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
            <h1 className="text-gray-600 text-5xl my-2">
              Brief <span className="text-indigo-600">Introduction</span>
            </h1>
            <div className="text-[1.2rem] md:text-[1.4rem] text-gray-500">
            I am pursuing a degree in Computer Engineering in third year at Godavari College of Engineering, Jalgaon, Maharashtra.</div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-gray-500">
              Web developer with a strong passion for creating innovative and
              visually appealing web solutions.
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-gray-500">
              I am proficient in HTML, CSS, Javascript and React and skilled in
              responsive interfaces, performance optimization, and user-centered
              design. I plan to learn Next.js in the near future.
            </div>
            <div className="text-[1.2rem] md:text-[1.4rem] text-gray-500">Also, I love coffee🍵</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
