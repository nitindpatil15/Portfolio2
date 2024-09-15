import React from "react";
import { Link } from "react-router-dom";
import Github from "../Assets/img/github.png";
import LinkedIn from "../Assets/img/317750_linkedin_icon.png";
import Instagram from "../Assets/img/instagram.png";
import Twitter from "../Assets/img/twitter.avif";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 bg-slate-800 p-2 flex items-center justify-center">
        <div className="md:text-2xl text-base text-red-600 font-bold mx-2 md:mx-5">@Nitin D Patil</div>
        <div className="flex flex-row">
          <Link className="mx-2 w-5 md:w-8 rounded-full" to="https://github.com/nitindpatil15">
          <img
              className="my-2 text-white m-1"
              src={LinkedIn}
              alt="LinkedIn"
            />
          </Link>
          <Link
            className="mx-2 w-5 md:w-8 rounded-full"
            to="https://www.linkedin.com/in/nitin-patil-50249623b/"
          >
            <img
              className=" text-white m-1 my-2 "
              src={Github}
              alt="Github"
            />
          </Link>
          <Link
            className="mx-2 w-5 md:w-8 rounded-full"
            to="https://www.instagram.com/nitin_rajput_15/"
          >
            <img
              className=" text-white my-2 m-1"
              src={Instagram}
              alt="Instagram"
            />
          </Link>
          <Link className="mx-2 w-5 md:w-8 rounded-full" to="https://twitter.com/NitinPa42701682">
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
