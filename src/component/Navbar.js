import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

export class NavBar extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nitin" style={{fontSize:"1.5rem"}}>
          <div className="container-fluid d-flex">
            <Link className="navbar-brand text-secondary mx-5" to="/"><span className="text-primary" style={{fontSize:"2rem"}}> <b>Nitin_Patil</b> </span>{" "}
            </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" aria-current="page" to="/">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item mx-3 ">
                  <Link className="nav-a nav-link" to="/projects">
                    <b>Projects</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" to="/about">
                    <b>About</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" to="/contact">
                    <b>Contact</b>
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar