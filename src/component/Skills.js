import React from "react";
import HTML from "../Assets/img/HTML.png";
import CSS from "../Assets/img/CSS.png";
import react from "../Assets/img/react.png";
import js from "../Assets/img/javascript.png";
import njs from "../Assets/img/nodejs.png";
import mdb from "../Assets/img/mongodb.png";
import ex from "../Assets/img/express.png";
import vstudio from "../Assets/img/visualstudio.png";
import github from "../Assets/img/github.png";
import py from "../Assets/img/python.png";

const Skills = () => {
  return (
    <>
      <h1 className="text-black text-center text-4xl font-bold my-3">
        My Skills
      </h1>
      <div className=" bg-white py-2">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={py}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">Python</h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={js}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">
              JavaScript
            </h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={HTML}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">HTML</h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={CSS}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">CSS</h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={mdb}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">
              MongoDB
            </h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={react}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">React</h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={ex}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">
              Express Js
            </h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={njs}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">
              Node Js
            </h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={vstudio}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">
              VS Studio
            </h4>
          </div>
          <div className="my-2 mx-5">
            <img
              className="border p-1 w-24 h-24 rounded-3xl md:w-32 md:h-32 mt-4 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
              src={github}
              alt=""
            />
            <h4 className="text-black text-center text-xl font-bold">GitHub</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
