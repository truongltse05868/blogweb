// import React from "react";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "./App.css";
// import Work from "./pages/Work";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Introduction from "./Introduction";
// function App() {
//   // Tạo một đối tượng kiểu CSS để định dạng các mục menu
//   const menuItemStyle = {

//     fontFamily: "DM Mono", // Đặt kiểu chữ thành DM Mono
//     marginRight: '48px',
//   };
//   const navbarStyle = {
//     marginLeft: "160px", // Đặt khoảng cách lề trái cho chữ "Ngo Minh Hieu"
//   };

//   const menuStyle = {
//     marginRight: "160px", // Đặt khoảng cách lề phải cho các mục menu
//     backgroundColor: 'while',
//   };

//   return (
//     <Router>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-between align-items-center">
//           <h1 style={navbarStyle}>Ngo Minh Hieu</h1>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav" style={menuStyle}>
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/work" style={menuItemStyle}>
//                     Work
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/gallery"
//                     style={menuItemStyle}
//                   >
//                     Gallery
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about" style={menuItemStyle}>
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/resume" style={menuItemStyle}>
//                     Resume
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <Routes>
//           <Route path="/work" element={<Work />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//         </Routes>
//         <Introduction />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Navbar, Nav, NavItem, NavLink, Container } from "react-bootstrap";
  const fontstyle = {
    fontFamily: 'DM Mono',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '58px',
  };
  const fontstyle2 = {
    fontFamily: 'DM Mono',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '58px',
  };

const App = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        style={{ paddingLeft: 160, paddingTop: 24, paddingBottom: 24 }}
      >
        <Container>
          <Navbar.Brand href="#">Ngo Minh Hieu</Navbar.Brand>
          <Nav>
            <NavItem style={{ marginRight: 48 }}>
              <NavLink href="#">Word</NavLink>
            </NavItem>
            <NavItem style={{ marginRight: 48 }}>
              <NavLink href="#">Gallery</NavLink>
            </NavItem>
            <NavItem style={{ marginRight: 48 }}>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: 160 }}>
              <NavLink href="#">Resume</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-content">
        <section
          id="about"
          style={{
            paddingLeft: 160,
            paddingTop: 160,
            paddingBottom: 160,
            paddingRight: 160,
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',  // Căn giữa theo chiều ngang
            justifyContent: "center", // Căn giữa theo chiều dọc
            textAlign: "center", // Căn giữa văn bản theo chiều ngang
          }}
        >
          <img
            src="Emojiwelcome.png"
            alt="anh o day"
            style={{ width: "300px", height: "300px" }}
          />
          <h2 style={fontstyle}>Xin chào, I'm Hiếu</h2>
          <p style={fontstyle2}>
            I am a <strong>Product Design</strong> . Optimal and user-friendly
            interface is always my top priority!
          </p>
        </section>
        <section id="body">
          <h1>Body</h1>
          <p>This is the main content section of the website.</p>
        </section>
      </div>
      <footer>
        <p>Copyright &copy; 2023 My Blog</p>
      </footer>
    </div>
  );
};

export default App;
