import React from "react";
import { Link } from "react-router-dom";
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

      <div className=" my-5">
        <div className="text-2xl font-bold text-white text-center p-2 mb-5 bg-black">
          FullStack Projects
        </div>
        <div className="row">
          <div className="flex flex-wrap justify-center">
            <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
              <Link to="https://github.com/nitindpatil15/videotube-frontend">
                <img
                  src={VideoTube}
                  alt="VideoTube Application"
                  style={{ height: "13rem", border: "0.1rem solid black" }}
                  className="object-fill"
                />
              </Link>
              <div className="card-body">
                <h5 className="font-bold uppercase text-xl">
                  PROJECT: <span className="text-indigo-700">VideoTube</span>
                </h5>
                <h5>
                  <span className="font-bold">DESCRIPTION: </span>
                  <span>
                    Working on a{" "}
                    <span className="font-bold uppercase">YouTube clone</span>{" "}
                    using the MERN stack, implementing features such as video
                    CRUD operations, comment management, community posts,
                    like/dislike toggling, and subscription functionality.
                  </span>{" "}
                </h5>
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
            <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
              <Link to="https://inotebook-reactapp.netlify.app/">
                <img
                  src={NoteBook}
                  alt="News Application"
                  style={{ height: "13rem", border: "0.1rem solid black" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="font-bold uppercase text-xl">
                  PROJECT:{" "}
                  <span className="text-indigo-700 font-bold">NoteBook</span>
                </h5>
                <h5>
                  <span className="font-bold">DESCRIPTION: </span>
                  <span>
                    Developed a MERN stack{" "}
                    <span className="font-bold uppercase">iNoteBook</span> app
                    with user registration, login, and Notes data retrieval from
                    an API.
                  </span>
                </h5>
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

            {/* FrontEnd Projects  */}

            <div className="my-5">
              <div className="text-2xl font-bold text-white text-center p-2 mb-5 bg-black">
                FrontEnd Projects
              </div>
              <div className="row">
                <div className="flex flex-wrap justify-center">
                  <div className="card mx-3 my-2 md:w-[30rem] bg-white p-2 border-8 border-slate-900">
                    <Link to="https://text-editor-inky-ten.vercel.app/">
                      <img
                        src={TextPro}
                        alt="TextEditor Application"
                        style={{
                          height: "13rem",
                          border: "0.1rem solid black",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="font-bold uppercase text-xl">
                        PROJECT:{" "}
                        <span className="text-indigo-400 uppercase">
                          TextEditor
                        </span>
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
                    <Link to="https://github.com/nitindpatil15/NewsNP">
                      <img
                        src={NewsApi}
                        alt="News Application"
                        style={{
                          height: "13rem",
                          border: "0.1rem solid black",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="font-bold uppercase text-xl">
                        PROJECT:{" "}
                        <span className="text-indigo-400 uppercase">
                          NewsApi
                        </span>
                      </h5>
                      <h5>
                        <span className="font-bold">DESCRIPTION: </span>
                        <span>
                          Implemented React components to display and organize
                          the fetched news data.
                        </span>
                      </h5>
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
