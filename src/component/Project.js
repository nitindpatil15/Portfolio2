import React from "react";
import { Link } from "react-router-dom";
import TextPro from "./TextEditor.jpg";
import Notebook from "./iNoteBook.jpg";

const Project = () => {
  return (
    <>
      <div className="container">
        <h1 className="mb-5 text-primary" style={{fontSize:"4rem"}}>Projects</h1>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="https://text-editor-inky-ten.vercel.app/"><img src={TextPro} className="d-block w-100" alt="..." /></Link>
              <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque itaque repellendus dolorum placeat. Numquam illum cum repellendus fugit deleniti, ab dolorem voluptatum eum, provident optio magnam maxime quis? Veniam, maxime.</p>           </div>
            <div className="carousel-item">
              <Link to=""><img src={Notebook} className="d-block w-100" alt="..." /></Link>
              <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque itaque repellendus dolorum placeat. Numquam illum cum repellendus fugit deleniti, ab dolorem voluptatum eum, provident optio magnam maxime quis? Veniam, maxime.</p>           </div>
            <div className="carousel-item">
              <Link to=""><img src={TextPro} className="d-block w-100" alt="..." /></Link>
              <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque itaque repellendus dolorum placeat. Numquam illum cum repellendus fugit deleniti, ab dolorem voluptatum eum, provident optio magnam maxime quis? Veniam, maxime.</p>           </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
