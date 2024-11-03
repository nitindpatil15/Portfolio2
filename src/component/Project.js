import React from "react";
import { Link} from "react-router-dom";
import SocialMedia from "../Assets/img/SocialMedia.png";
import TextPro from "../Assets/img/TextEditor.jpg";
import Movieimg from "../Assets/img/MovieTicket.png";

const Project = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-xl md:text-3xl">
          <ul className="bg-black py-2 text-gray-300">
            <li className="flex flex-row justify-start">
              <Link
                to="/project"
                className="mx-3 md:mx-10 text-green-500 hover:no-underline hover:text-indigo-600"
              >
                <b>PROJECT</b>
              </Link>
              <Link
                to="/project/full-stack"
                className="ml-3 md:ml-5 hover:no-underline hover:text-indigo-600"
              >
                All Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="flex flex-wrap justify-center">
            <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
              <Link to="https://connect-us-psi.vercel.app/">
                <img
                  src={SocialMedia}
                  alt="Connect-Us Application"
                  style={{ height: "16rem", border: "0.1rem solid black" }}
                  className="object-cover"
                />
              </Link>
              <div className="card-body">
                <h5 className="font-bold uppercase text-xl">
                  PROJECT:{" "}
                  <span className="text-indigo-700 font-bold">Connect-Us</span>
                </h5>
                <h5>
                  <span className="font-bold">DESCRIPTION: </span>
                  <span>
                    Developed a MERN stack{" "}
                    <span className="font-bold">SocialMedia</span> app with
                    features like user registration, login, content posting with
                    images, likes, and comments, along with profile integration,
                    similar to Instagram. Data is retrieved from an API.
                  </span>
                </h5>
                <h5 className="font-bold">
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/Connect-us"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
                <h5 className="font-bold">
                  Live App:{" "}
                  <Link
                    to="https://connect-us-psi.vercel.app/"
                    className="text-red-500"
                  >
                    Link
                  </Link>
                </h5>
              </div>
            </div>

            <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
              <Link to="https://text-editor-inky-ten.vercel.app/">
                <img
                  src={TextPro}
                  alt="TextEditor Application"
                  style={{ height: "13rem", border: "0.1rem solid black" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="font-bold uppercase text-xl">
                  PROJECT:{" "}
                  <span className="text-indigo-400 uppercase">TextEditor</span>
                </h5>
                <h5>
                  <span className="font-bold">DESCRIPTION: </span>
                  <span>
                    Enabled text transformation, extra space removal, and
                    uppercase/lowercase conversions.
                  </span>
                </h5>
                <h5 className="font-bold">
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/TextEditor"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
                <h5 className="font-bold">
                  Live App:{" "}
                  <Link
                    to="https://text-editor-inky-ten.vercel.app/"
                    className="text-red-500"
                  >
                    Link
                  </Link>
                </h5>
              </div>
            </div>

            <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
              <Link to="https://movie-ticket-booking-one.vercel.app/">
                <img
                  src={Movieimg}
                  alt="Movie Ticket Booking"
                  style={{ height: "13rem", border: "0.1rem solid black" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="font-bold uppercase text-xl">
                  PROJECT:{" "}
                  <span className="text-indigo-700 font-bold">
                    Movie Ticket Booking
                  </span>
                </h5>
                <h5>
                  <span className="font-bold">DESCRIPTION: </span>
                  <span>
                    Developed a MERN stack{" "}
                    <span className="font-bold uppercase">
                      Movie Ticket Booking
                    </span>{" "}
                    app with role-based access control, allowing users to book
                    tickets while admins and super admins manage and control all
                    access.{" "}
                  </span>
                </h5>
                <h5 className="font-bold">
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/movie-Ticket-Bokking"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
                <h5 className="font-bold">
                  Live App:{" "}
                  <Link
                    to="https://movie-ticket-booking-one.vercel.app/"
                    className="text-red-500"
                  >
                    Link
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
