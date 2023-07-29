// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import './NavBar.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button className={`menu-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <svg
            className="menu-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25C21 6.49264 19.9926 7.5 18.75 7.5H5.25C4.00736 7.5 3 6.49264 3 5.25ZM3 11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25C21 12.4926 19.9926 13.5 18.75 13.5H5.25C4.00736 13.5 3 12.4926 3 11.25ZM3 17.25C3 16.0074 4.00736 15 5.25 15H18.75C19.9926 15 21 16.0074 21 17.25C21 18.4926 19.9926 19.5 18.75 19.5H5.25C4.00736 19.5 3 18.4926 3 17.25Z"
            />
          </svg>
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/home" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link">
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/service" className="menu-link">
                Service
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/gallery" className="menu-link">
                Gallery
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/faq" className="menu-link">
                FAQ
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
