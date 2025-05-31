import React from "react";
import HTML from "../Assets/img/HTML.png";
import CSS from "../Assets/img/CSS.png";
import react from "../Assets/img/react.png";
import js from "../Assets/img/javascript.png";
import njs from "../Assets/img/nodejs.png";
import mdb from "../Assets/img/mongodb.png";
import ex from "../Assets/img/express.png";
import vstudio from "../Assets/img/visualstudio.png";
import github from "../Assets/img/github.png";
import py from "../Assets/img/python.png";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: py },
  { name: "JavaScript", icon: js },
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "MongoDB", icon: mdb },
  { name: "React", icon: react },
  { name: "Express.js", icon: ex },
  { name: "Node.js", icon: njs },
  { name: "VS Code", icon: vstudio },
  { name: "GitHub", icon: github },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I continuously expand my skill set to stay current with the latest technologies
            and best practices in web development. My expertise in these technologies
            allows me to build robust, scalable, and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
