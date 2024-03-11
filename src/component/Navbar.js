import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

export class NavBar extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-light">
          <div className="navbar container-fluid">
            <Link className="text-secondary mx-2" to="/"><span className="text-primary" style={{fontSize:"1.5rem"}}> <b>Nitin_Patil</b> </span>{" "}
            </Link>
              <ul className="nav navigation">
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" aria-current="page" to="/">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item mx-1 ">
                  <Link className="nav-link text-secondary" to="/project">
                    <b>Projects</b>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" to="/about">
                    <b>About</b>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" to="/contact">
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