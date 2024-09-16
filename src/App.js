import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Home from "./component/Home";
import FullStack from "./component/FullStack";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<FullStack/>} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/project/full-stack" element={<FullStack />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
