import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Home from "./component/Home";
import FullStack from "./component/FullStack";
import Footer from "./component/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<FullStack />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/project/full-stack" element={<FullStack />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// Wrap the App component with Router
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
