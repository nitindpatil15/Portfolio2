import React from "react";
import { Link} from "react-router-dom";
import SocialMedia from "../Assets/img/SocialMedia.png";
import TextPro from "../Assets/img/TextEditor.jpg";
import Movieimg from "../Assets/img/MovieTicket.png";

const Project = () => {
  return (
    <>
      <div className=" pb-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-2 tracking-tight">
          Projects
        </h2>
        <p className="text-center text-gray-300 mb-6 text-base">
          Explore some of my featured web applications and solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105 mb-4">
            <a
              href="https://connect-us-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SocialMedia}
                alt="Connect-Us Application"
                className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
              />
            </a>
            <div className="p-5 flex flex-col flex-1">
              <h5 className="font-bold uppercase text-xl mb-2 text-indigo-700">
                Connect-Us
              </h5>
              <p className="mb-4 text-gray-700 text-sm">
                <span className="font-bold">DESCRIPTION: </span>
                Developed a MERN stack{" "}
                <span className="font-bold">SocialMedia</span> app with features
                like user registration, login, content posting with images, likes,
                and comments, along with profile integration, similar to
                Instagram. Data is retrieved from an API.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/nitindpatil15/Connect-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-semibold mr-4 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://connect-us-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="mb-4 bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
            <a
              href="https://text-editor-inky-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={TextPro}
                alt="TextEditor Application"
                className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
              />
            </a>
            <div className="p-5 flex flex-col flex-1">
              <h5 className="font-bold uppercase text-xl mb-2 text-indigo-400">
                TextEditor
              </h5>
              <p className="mb-4 text-gray-700 text-sm">
                <span className="font-bold">DESCRIPTION: </span>
                Enabled text transformation, extra space removal, and
                uppercase/lowercase conversions.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/nitindpatil15/TextEditor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-semibold mr-4 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://text-editor-inky-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="mb-4 bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
            <a
              href="https://movie-ticket-booking-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Movieimg}
                alt="Movie Ticket Booking"
                className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
              />
            </a>
            <div className="p-5 flex flex-col flex-1">
              <h5 className="font-bold uppercase text-xl mb-2 text-indigo-700">
                Movie Ticket Booking
              </h5>
              <p className="mb-4 text-gray-700 text-sm">
                <span className="font-bold">DESCRIPTION: </span>
                Developed a MERN stack{" "}
                <span className="font-bold uppercase">
                  Movie Ticket Booking
                </span>{" "}
                app with role-based access control, allowing users to book tickets
                while admins and super admins manage and control all access.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/nitindpatil15/movie-Ticket-Bokking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-semibold mr-4 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://movie-ticket-booking-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
