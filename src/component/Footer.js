import React from "react";
import { Link } from "react-router-dom";
import Github from "../Assets/img/github.png";
import LinkedIn from "../Assets/img/317750_linkedin_icon.png";
import Instagram from "../Assets/img/instagram.png";
import Twitter from "../Assets/img/twitter.avif";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/nitindpatil15",
    color: "hover:bg-gray-700"
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/nitin-patil-50249623b/",
    color: "hover:bg-blue-700"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/nitin_rajput_15/",
    color: "hover:bg-pink-700"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/NitinPa42701682",
    color: "hover:bg-blue-500"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Nitin D Patil
            </h3>
            <p className="text-gray-400">
              A passionate Full Stack Developer dedicated to creating innovative web solutions
              and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nitin D Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
