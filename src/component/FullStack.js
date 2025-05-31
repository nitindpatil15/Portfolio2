import React from "react";
import NoteBook from "../Assets/img/notebook.png";
import Movieimg from "../Assets/img/MovieTicket.png";
import VideoTube from "../Assets/img/VideoTube.png";
import TextPro from "../Assets/img/TextEditor.jpg";
import NewsApi from "../Assets/img/NewsApi.png";
import SocialMedia from "../Assets/img/SocialMedia.png";

const Full_Stack = () => {
  return (
    <>
      {/* FullStack Projects  */}

      <div className=" my-5 pt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
          Full Stack Projects
        </h2>
        <p className="text-center text-gray-500 mb-6 text-base">
          MERN stack applications with robust backend and frontend integration.
        </p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VideoTube Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
              <a
                href="https://github.com/nitindpatil15/videotube-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={VideoTube}
                  alt="VideoTube Application"
                  className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h5 className="font-bold uppercase text-xl mb-2 text-indigo-700">
                  VideoTube
                </h5>
                <p className="mb-4 text-gray-700 text-sm">
                  <span className="font-bold">DESCRIPTION: </span> Working on a{" "}
                  <span className="font-bold uppercase">YouTube clone</span> using
                  the MERN stack, implementing features such as video CRUD
                  operations, comment management, community posts, like/dislike
                  toggling, and subscription functionality.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/nitindpatil15/videotube-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold mr-4 hover:underline"
                  >
                    Client GitHub
                  </a>
                  <a
                    href="https://github.com/nitindpatil15/videoTube-nitin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Backend GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Movie Ticket Booking Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
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
                  <span className="font-bold">DESCRIPTION: </span> Developed a
                  MERN stack{" "}
                  <span className="font-bold uppercase">Movie Ticket Booking</span>
                  {" "}app with role-based access control, allowing users to book
                  tickets while admins and super admins manage and control all
                  access.
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
            {/* NoteBook Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
              <a
                href="https://inotebook-reactapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={NoteBook}
                  alt="NoteBook Application"
                  className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h5 className="font-bold uppercase text-xl mb-2 text-indigo-700">
                  NoteBook
                </h5>
                <p className="mb-4 text-gray-700 text-sm">
                  <span className="font-bold">DESCRIPTION: </span> Developed a
                  MERN stack{" "}
                  <span className="font-bold uppercase">iNoteBook</span> app with
                  user registration, login, and Notes data retrieval from an API.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/nitindpatil15/Notebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold mr-4 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://inotebook-reactapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Live App
                  </a>
                </div>
              </div>
            </div>
            {/* Connect-Us Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
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
                  <span className="font-bold">DESCRIPTION: </span> Developed a
                  MERN stack{" "}
                  <span className="font-bold">SocialMedia</span> app with features
                  like user registration, login, content posting with images,
                  likes, and comments, along with profile integration, similar to
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
          </div>
        </div>
      </div>

      {/* FrontEnd Projects  */}

      <div className="my-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
          Frontend Projects
        </h2>
        <p className="text-center text-gray-500 mb-6 text-base">
          React-based UI projects focused on user experience and interactivity.
        </p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TextEditor Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
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
                  <span className="font-bold">DESCRIPTION: </span> Enabled text
                  transformation, extra space removal, and uppercase/lowercase
                  conversions.
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
            {/* NewsApi Card */}
            <div className="bg-white rounded-xl shadow-lg border-4 border-slate-900 flex flex-col transition-transform hover:scale-105">
              <a
                href="https://github.com/nitindpatil15/NewsNP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={NewsApi}
                  alt="News Application"
                  className="rounded-t-xl object-cover h-56 w-full border-b border-slate-200"
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h5 className="font-bold uppercase text-xl mb-2 text-indigo-400">
                  NewsApi
                </h5>
                <p className="mb-4 text-gray-700 text-sm">
                  <span className="font-bold">DESCRIPTION: </span> Implemented
                  React components to display and organize the fetched news data.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/nitindpatil15/NewsNP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Full_Stack;
