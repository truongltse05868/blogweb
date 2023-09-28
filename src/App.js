import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Work from "./pages/Work";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Introduction from "./Introduction";
function App() {
  // Tạo một đối tượng kiểu CSS để định dạng các mục menu
  const menuItemStyle = {
    backgroundColor: "white", // Đặt màu nền thành trắng
    fontFamily: "DM Mono", // Đặt kiểu chữ thành DM Mono
  };
  // Tạo một đối tượng kiểu CSS để đặt màu nền của toàn bộ trang web
  const pageStyle = {
    backgroundColor: "white", // Đặt màu nền thành trắng
  };

  return (
    <Router>
      <div className="container mt-5" style={pageStyle}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Ngo Minh Hieu</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/work" style={menuItemStyle}>
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    style={menuItemStyle}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={menuItemStyle}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume" style={menuItemStyle}>
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Introduction />
      </div>
    </Router>
   
  );
}

export default App;
