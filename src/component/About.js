import React from "react";
import Nitin1 from "./Nitin1.jpg";
import './index.css'

const About = () => {
  return (
    <>
      <div className="mx-2 about">
        <div className="container ml-5 my-5 img_container">
          <img
            src={Nitin1}
            alt="Nitin_Img"
            className="my-5 Nitin_Img"
          />
        </div>
        <div className="container my-3 intro_about">
          <div className="text-secondary my-5">
            <h1 className="text-secondary">
              Brief <span className="text-primary">Introduction</span>
            </h1>
            <div className="text-secondary mr-2 about_info h4">
            I am pursuing a degree in Computer Engineering in third year at Godavari College of Engineering, Jalgaon, Maharashtra.</div>
            <div className="text-secondary about_info h4">
              Web developer with a strong passion for creating innovative and
              visually appealing web solutions.
            </div>
            <div className="text-secondary about_info h4">
              I am proficient in HTML, CSS, Javascript and React and skilled in
              responsive interfaces, performance optimization, and user-centered
              design. I plan to learn Backend And Next.js in the near future.
            </div>
            <div className="text-secondary about_info h4">Also, I love coffee🍵</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
