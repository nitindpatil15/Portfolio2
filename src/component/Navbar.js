import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="text-secondary mx-2" to="/">
              <span className="text-primary Nav-head">
                {" "}
                <b>Nitin_Patil</b>{" "}
              </span>{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-secondary"
                    aria-current="page"
                    to="/"
                  >
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item mx-3 ">
                  <Link className="nav-link text-secondary" to="/project">
                    <b>Projects</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-secondary" to="/about">
                    <b>About</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-secondary" to="/contact">
                    <b>Contact</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default NavBar;
