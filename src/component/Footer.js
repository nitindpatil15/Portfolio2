import React from "react";
import { Link } from "react-router-dom";
import Github from "../Assets/img/github.png";
import LinkedIn from "../Assets/img/317750_linkedin_icon.png";
import Instagram from "../Assets/img/instagram.png";
import Twitter from "../Assets/img/twitter.avif";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 bg-gray-600">
        <div className="container hidden flex-row justify-center md:flex p-2">
          <Link className="text-white mx-5" style={{fontSize:"1.5rem"}} aria-current="page" to="/">
            <b>Home</b>
          </Link>
          <Link className="text-white mx-5" style={{fontSize:"1.5rem"}} to="/project">
            <b>Project</b>
          </Link>
          <Link className="text-white mx-5" style={{fontSize:"1.5rem"}} to="/about">
            <b>About</b>
          </Link>
          <Link className="text-white mx-5" style={{fontSize:"1.5rem"}} to="/contact">
            <b>Contact</b>
          </Link>
        </div>

        <div className="container flex flex-row justify-center">
          <Link className="mr-5 w-12 rounded-full" to="https://github.com/nitindpatil15">
          <img
              className="my-2 text-white m-1"
              src={LinkedIn}
              alt="LinkedIn"
            />
          </Link>
          <Link
            className="mx-5 w-12 rounded-full"
            to="https://www.linkedin.com/in/nitin-patil-50249623b/"
          >
            <img
              className=" text-white m-1 my-2 "
              src={Github}
              alt="Github"
            />
          </Link>
          <Link
            className="mx-5 w-12 rounded-full"
            to="https://www.instagram.com/nitin_rajput_15/"
          >
            <img
              className=" text-white my-2 m-1"
              src={Instagram}
              alt="Instagram"
            />
          </Link>
          <Link className="mx-5 w-12 rounded-full" to="https://twitter.com/NitinPa42701682">
            <img
              className=" text-white my-2  m-1"
              src={Twitter}
              alt="Twitter"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
