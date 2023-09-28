// src/Introduction.js
import React from "react";

function Introduction() {
  const introContainerStyle = {
    marginLeft: "160px", // Khoảng cách bên trái
    marginRight: "160px", // Khoảng cách bên phải
    marginTop: "160px", // Khoảng cách phía trên
    marginBottom: "160px", // Khoảng cách phía dưới
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',  // Căn giữa theo chiều ngang
    justifyContent: "center", // Căn giữa theo chiều dọc
    textAlign: "center", // Căn giữa văn bản theo chiều ngang
  };
  return (
    <div className="container mt-3" style={introContainerStyle}>
      <img
        src="Emojiwelcome.png"
        alt="anh o day"
        style={{ width: "300px", height: "300px" }}
      />

      <h2>Xin chào, I'm Hiếu</h2>
      <p>
        I am a <strong>Product Design</strong> . Optimal and user-friendly
        interface is always my top priority!
      </p>
    </div>
  );
}

export default Introduction;
