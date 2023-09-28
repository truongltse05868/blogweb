import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', color: '#333', padding: '20px', marginLeft: '160px', marginRight: '160px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
            <li style={{ marginRight: '20px' }}><a href="#">Dribble</a></li>
            <li style={{ marginRight: '20px' }}><a href="#">Behance</a></li>
            <li style={{ marginRight: '20px' }}><a href="#">Linkedin</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div>
          <a href="mailto:example@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>minhhieu.ux@gmail.com</a>
        </div>
      </div>
      <hr style={{ border: '1px solid #333' }} /> {/* Đường kẻ ngang */}
      <div>
        <p>&copy; {new Date().getFullYear()} NgoMinhHieu. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
