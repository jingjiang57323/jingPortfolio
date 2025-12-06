import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Me from "./pages/Me";
import Photography from "./pages/Photography";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="main-content">
          <nav style={{ padding: "10px", background: "#f5f5f5ff" }}>
            <ul className="nav_links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/me" >Me</Link></li>
              <li><Link to="/projects" >Project</Link></li>
              <li><Link to="/photography" >Photography</Link></li>
              <li><Link to="/resume" >Resume</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/me" element={<Me />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Sidebar />
        <Footer />
      </div>
    </HashRouter>
    

  );
}

export default App;
