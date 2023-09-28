import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Navbar, Nav, NavItem, NavLink, Container } from "react-bootstrap";
import Card from "./cartProduct";
import Footer from "./footer";
const fontstyle = {
  fontFamily: "DM Mono",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "58px",
  paddingTop: 24,
};
const fontstyle2 = {
  fontFamily: "DM Mono",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "44px",
  textAlign: "center",
  width: 1041,
  height: 88,
};
const fontstylemenu = {
  fontFamily: "DM Mono",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "32px",
};
const customStyle = {
  display: "flex",
  width: "784px",
  height: "720px",
  minWidth: "343px",
  maxWidth: "784px",
  minHeight: "320px",
  maxHeight: "720px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  flexShrink: "0",
};
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["DM Mono"],
      },
      active: function () {
        // Font đã tải thành công, bạn có thể cập nhật trạng thái của ứng dụng ở đây nếu cần.
      },
      inactive: function () {
        // Font không tải được, xử lý tại đây nếu cần.
      },
    });
  }, []);
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
            <NavItem style={{ marginRight: 48, fontstylemenu }}>
              <NavLink href="#">Word</NavLink>
            </NavItem>
            <NavItem style={{ marginRight: 48, fontstylemenu }}>
              <NavLink href="#">Gallery</NavLink>
            </NavItem>
            <NavItem style={{ marginRight: 48, fontstylemenu }}>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: 160 }}>
              <NavLink href="#" style={{ fontstylemenu }}>
                Resume
              </NavLink>
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
            alignItems: "center", // Căn giữa theo chiều ngang
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
            I am a <strong>Product Design</strong>. Optimal and user-friendly
            interface is always my top priority!
          </p>
        </section>
        <section id="body" style={{paddingLeft: 160, paddingRight: 160}}>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <Card
                imageUrl="p1.jpeg"
                imageAlt="Mô tả hình ảnh 1"
                title="Card title 1"
                description="Design System Foundation - 2023"
                link="#"
                //buttonText="Go somewhere 1"
              />
            </div>
            <div class="col">
              <Card
                imageUrl="p2.jpeg"
                imageAlt="Mô tả hình ảnh 1"
                title="Card title 1"
                description="S Money - Quản lý tài chính cá nhân"
                link="#"
                buttonText="Go somewhere 1"
              />
            </div>
            <div class="col">
              <Card
                imageUrl="p3.jpeg"
                imageAlt="Mô tả hình ảnh 1"
                title="Card title 1"
                description="S Money - Quản lý tài chính cá nhân"
                link="#"
                buttonText="Go somewhere 1"
              />
            </div>
            <div class="col">
              <Card
                imageUrl="p4.jpeg"
                imageAlt="Mô tả hình ảnh 1"
                title="Card title 1"
                description="S Money - Quản lý tài chính cá nhân"
                link="#"
                buttonText="Go somewhere 1"
              />
            </div>
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
