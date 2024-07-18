import React from "react";
import { Link } from "react-router-dom";
import NoteBook from "../Assets/img/notebook.png";

const Full_Stack = () => {
  return (
    <>
      <div className="navbar-expand-lg navbar-dark bg-dark my-3">
        <div className="container-fluid">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex">
              <Link
                to="/project"
                className="nav-link mx-5"
                style={{ fontSize: "1.7rem" }}
              >
                <b>PROJECT</b>
              </Link>
              <Link
                to="/project/front-end"
                className="nav-link mt-1 mx-1"
                style={{ fontSize: "1.5rem" }}
              >
                FrontEnd
              </Link>
              <Link
                to="/project/full-stack"
                className="nav-link mt-1 mx-1"
                style={{ fontSize: "1.5rem" }}
              >
                Full Stack
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <div
              className="card mx-3 my-2"
              style={{ width: "21rem", border: "0.1rem solid black" }}
            >
              <img
                src={NoteBook}
                alt="News Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT: <span className="text-secondary">NoteBook</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Developed a MERN stack iNoteBook app with user registration,
                  login, and Notes data retrieval from an API.
                </span>
                <h5>
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/Notebook"
                    className="text-danger"
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

export default Full_Stack;
