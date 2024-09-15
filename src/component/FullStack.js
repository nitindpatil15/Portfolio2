import React from "react";
import { Link } from "react-router-dom";
import NoteBook from "../Assets/img/notebook.png";
import Movieimg from "../Assets/img/MovieTicket.png";
import VideoTube from "../Assets/img/VideoTube.png";
import TextPro from "../Assets/img/TextEditor.jpg";
import NewsApi from "../Assets/img/NewsApi.png";

const Full_Stack = () => {
  return (
    <>
      <div className="container my-5">
      <div className="text-2xl font-bold text-white text-center p-2 mb-5 bg-black">FullStack Projects</div>
        <div className="row">
          <div className="flex flex-wrap justify-center">
            <div className="card mx-3 my-2 md:w-96">
              <img
                src={VideoTube}
                alt="VideoTube Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT:{" "}
                  <span className="text-indigo-700 font-bold">VideoTube</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Working on a <span className="font-bold">YouTube clone</span> using the MERN stack, implementing
                  features such as video CRUD operations, comment management,
                  community posts, like/dislike toggling, and subscription
                  functionality.
                </span>
                <h5 className="font-bold">
                  Source:{" Client-Site "}
                  <Link
                    to="https://github.com/nitindpatil15/videotube-frontend"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
                <h5 className="font-bold">
                  Source:{" Backend "}
                  <Link
                    to="https://github.com/nitindpatil15/videoTube-nitin"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card mx-3 my-2 md:w-96">
              <img
                src={Movieimg}
                alt="Movie Ticket Booking"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT:{" "}
                  <span className="text-indigo-700 font-bold">
                    Movie Ticket Booking
                  </span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Developed a MERN stack{" "}
                  <span className="font-bold">Movie Ticket Booking</span> app
                  with role-based access control, allowing users to book tickets
                  while admins and super admins manage and control all access.{" "}
                </span>
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
            <div className="card mx-3 my-2 md:w-96">
              <img
                src={NoteBook}
                alt="News Application"
                style={{ height: "12rem", border: "0.1rem solid black" }}
              />
              <div className="card-body">
                <h5>
                  PROJECT: <span className="text-indigo-700 font-bold">NoteBook</span>
                </h5>
                <h5>DESCRIPTION: </h5>
                <span>
                  Developed a MERN stack <span className="font-bold">iNoteBook</span> app with user registration,
                  login, and Notes data retrieval from an API.
                </span>
                <h5 className="font-bold">
                  Source:{" "}
                  <Link
                    to="https://github.com/nitindpatil15/Notebook"
                    className="text-red-500"
                  >
                    GitHub
                  </Link>
                </h5>
                <h5 className="font-bold">
                  Live App:{" "}
                  <Link
                    to="https://inotebook-reactapp.netlify.app/"
                    className="text-red-500"
                  >
                    Link
                  </Link>
                </h5>
              </div>
            </div>
            <div className="container my-5">
              <div className="text-2xl font-bold text-white text-center p-2 mb-5 bg-black">FrontEnd Projects</div>
              <div className="row">
                <div className="flex flex-wrap justify-center">
                  <div className="card mx-3 my-2 md:w-96">
                    <img
                      src={TextPro}
                      alt="TextEditor Application"
                      style={{ height: "12rem", border: "0.1rem solid black" }}
                    />
                    <div className="card-body">
                      <h5>
                        PROJECT:{" "}
                        <span className="text-indigo-400">TextEditor</span>
                      </h5>
                      <h5>DESCRIPTION: </h5>
                      <span>
                        Enabled text transformation, extra space removal, and
                        uppercase/lowercase conversions.
                      </span>
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

                  <div className="card mx-3 my-2 md:w-96">
                    <img
                      src={NewsApi}
                      alt="News Application"
                      style={{ height: "12rem", border: "0.1rem solid black" }}
                    />
                    <div className="card-body">
                      <h5>
                        PROJECT:{" "}
                        <span className="text-indigo-400">NewsApi</span>
                      </h5>
                      <h5>DESCRIPTION: </h5>
                      <span>
                        Implemented React components to display and organize the
                        fetched news data.
                      </span>
                      <h5 className="font-bold">
                        Source:{" "}
                        <Link
                          to="https://github.com/nitindpatil15/NewsNP"
                          className="text-red-500"
                        >
                          GitHub
                        </Link>
                      </h5>
                    </div>
                  </div>
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
