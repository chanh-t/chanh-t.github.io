import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="logo">
        {/* You can put an <img> tag here with your logo */}
        <span>Underconstruction</span>
      </div>
      <div className="nav-links">
        <a href="/about-us">About Me</a>
        <a href="/work">Interests</a>
        {/* Add more <a> tags for additional links as needed */}
      </div>
    </nav>
  );
}


export default NavBar;
