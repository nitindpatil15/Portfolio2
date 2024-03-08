import React from 'react'
import { Link } from 'react-router-dom';
import Github from './img/github.png'
import LinkedIn from './img/317750_linkedin_icon.png'
import Instagram from './img/instagram.png'
import './index.css'

const Footer = () => {
  return (
    <>
      <footer className='footer mt-5 ml-5 mb-1 d-flex'>
        <h1 className="text-secondary d-flex ">Nitin_Patil</h1>
        <div className="nav navbar navbar-expand-lg navbar-light bg-light mx-5" style={{fontSize:"1.5rem"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" aria-current="page" to="/">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item mx-3 ">
                  <Link className="nav-a nav-link" to="/project">
                    <b>Projects</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" to="/about">
                    <b>About</b>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-a nav-link" to="/contact">
                    <b>Contact</b>
                  </Link>
                </li>
              </ul>
        </div>
        <div className="container img_container ">
        <Link className='fo_imgage ' to="https://github.com/nitindpatil15"><img className='bg-light m-1 fo_img my-2 ' src={Github} alt="Github" /></Link>
        <Link className='fo_imgage ' to="https://www.linkedin.com/in/nitin-patil-50249623b/"><img className=' my-2 bg-light m-1 fo_img' src={LinkedIn} alt="LinkedIn" /></Link>
        <Link className='fo_imgage ' to="https://www.instagram.com/nitin_rajput_15/"><img className='bg-light my-2  m-1 fo_img' src={Instagram} alt="Instagram" /></Link>
        </div>
      </footer>
    </>
  )
}

export default Footer;
