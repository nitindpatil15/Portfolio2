import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Home/>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
