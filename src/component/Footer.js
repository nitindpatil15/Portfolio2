import React from 'react'
import { Link } from 'react-router-dom';
import Github from './img/github.png'
import LinkedIn from './img/317750_linkedin_icon.png'
import Instagram from './img/instagram.png'
import './index.css'

const Footer = () => {
  return (
    <>
      <footer className='footer foot d-flex mt-5 mx-2 mb-1'>
      <nav className="navbar navbar-light footer-nav">
          <div className="navbar container-fluid">
              <ul className="nav navigation">
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" aria-current="page" to="/">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item mx-1 ">
                  <Link className="nav-link text-secondary" to="/project">
                    <b>Projects</b>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" to="/about">
                    <b>About</b>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link text-secondary" to="/contact">
                    <b>Contact</b>
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
        <div className="container img_container footer-contact">
        <Link className='fo_imgage ' to="https://github.com/nitindpatil15"><img className='bg-light m-1 fo_img my-2 ' src={Github} alt="Github" /></Link>
        <Link className='fo_imgage ' to="https://www.linkedin.com/in/nitin-patil-50249623b/"><img className=' my-2 bg-light m-1 fo_img' src={LinkedIn} alt="LinkedIn" /></Link>
        <Link className='fo_imgage ' to="https://www.instagram.com/nitin_rajput_15/"><img className='bg-light my-2  m-1 fo_img' src={Instagram} alt="Instagram" /></Link>
        </div>
      </footer>
    </>
  )
}

export default Footer;
