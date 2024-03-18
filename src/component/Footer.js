import React from "react";
import { Link } from "react-router-dom";
import Github from "./img/github.png";
import LinkedIn from "./img/317750_linkedin_icon.png";
import Instagram from "./img/instagram.png";
import Twitter from "./img/twitter.avif";
import "./index.css";

const Footer = () => {
  return (
    <>
      <footer className="footer foot mt-5 mx-2 mb-1">
        <div className="container footer-contact">
          <Link className="text-secondary mb-2 ml-3" style={{fontSize:"1.5rem"}} aria-current="page" to="/">
            <b>Home</b>
          </Link>
          <Link className="text-secondary mb-2 ml-3" style={{fontSize:"1.5rem"}} to="/project">
            <b>Project</b>
          </Link>
          <Link className="text-secondary mb-2 ml-3" style={{fontSize:"1.5rem"}} to="/about">
            <b>About</b>
          </Link>
          <Link className="text-secondary mb-2 ml-3" style={{fontSize:"1.5rem"}} to="/contact">
            <b>Contact</b>
          </Link>
        </div>
        <div className="container footer-contact">
          <Link className="fo_im_foo " to="https://github.com/nitindpatil15">
            <img
              className="bg-light m-1 fo_img my-2 "
              src={Github}
              alt="Github"
            />
          </Link>
          <Link
            className="fo_im_foo "
            to="https://www.linkedin.com/in/nitin-patil-50249623b/"
          >
            <img
              className=" my-2 bg-light m-1 fo_img"
              src={LinkedIn}
              alt="LinkedIn"
            />
          </Link>
          <Link
            className="fo_im_foo"
            to="https://www.instagram.com/nitin_rajput_15/"
          >
            <img
              className="bg-light my-2  m-1 fo_img"
              src={Instagram}
              alt="Instagram"
            />
          </Link>
          <Link className="fo_im_foo" to="https://twitter.com/NitinPa42701682">
            <img
              className="bg-light my-2  m-1 fo_img"
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
