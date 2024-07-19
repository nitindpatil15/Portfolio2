import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Frontend from "./component/Frontend"
import FullStack from "./component/FullStack"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/project/full-stack" element={<FullStack/>} />
          <Route exact path="/project/front-end" element={<Frontend/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
