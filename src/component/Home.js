import React from "react";
import Nitin from './Nitin.jpg'
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="container d-flex my-5">
        <div className="container text-center" style={{fontSize:"4rem"}}>
        Hey , I am <span class="text-primary">Nitin Patil</span>
                <div>And I am Passionate </div>
                {/* <span id="element" class="text-primary">
                    <Typed>String{["Web devloper","MERN Stack Develo[er"]} typeSpeed={50}</Typed>
                </span> */}
        </div>
        <div className="container text-center">
           <img src={Nitin} alt="Nitin_Img" style={{width:"50%", borderRadius:"50%",boxShadow:"10px 10px 2px black"}}/>
        </div>
      </div>
      <About/>
    </>
  );
};

export default Home;
