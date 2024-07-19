import React from "react";
import { Link } from "react-router-dom";
import TextPro from "../Assets/img/TextEditor.jpg";
import NoteBook from "../Assets/img/notebook.png";
import NewsApi from "../Assets/img/NewsApi.png";

const Project = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-xl md:text-3xl">
          <ul className="bg-black py-2 text-gray-300">
            <li className="flex flex-row justify-start">
              <Link
                to="/project"
                className="mx-2 md:mx-10 hover:no-underline hover:text-indigo-600"
              >
                <b>PROJECT</b>
              </Link>
              <Link
                to="/project/front-end"
                className=" hover:no-underline hover:text-indigo-600"
              >
                FrontEnd
              </Link>
              <Link
                to="/project/full-stack"
                className="ml-2 md:ml-5 hover:no-underline hover:text-indigo-600"
              >
                Full Stack
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="flex flex-wrap justify-center">
            <div
              className="card mx-3 my-2 md:w-96"
            >
              <img
                src={TextPro}
                alt="TextEditor Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT: <span className="text-indigo-400">TextEditor</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Enabled text transformation, extra space removal, and
                  uppercase/lowercase conversions.
                </span>
                <h5>
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/TextEditor"
                    className="text-red-500"
                  >
                    link
                  </Link>
                </h5>
              </div>
            </div>

            <div
              className="card mx-3 my-2 md:w-96"
            >
              <img
                src={NewsApi}
                alt="News Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT: <span className="text-indigo-400">NewsApi</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Implemented React components to display and organize the
                  fetched news data.
                </span>
                <h5>
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/NewsNP"
                    className="text-red-500"
                  >
                    link
                  </Link>
                </h5>
              </div>
            </div>

            <div
              className="card mx-3 my-2 md:w-96"
            >
              <img
                src={NoteBook}
                alt="News Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT: <span className="text-indigo-400">NoteBook</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                Developed a MERN stack iNoteBook app with user registration, login, and Notes data retrieval from an API.
                </span>
                <h5>
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/Notebook"
                    className="text-red-500"
                  >
                    link
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
