import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Imperial Grand Hotel" />
      </div>

      <ul className="navbar-menu">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/service">SERVICE</Link>
        </li>

        <li
          className="nav-item with-border dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-title">PAGES ▾</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/room">Room</Link></li>
              <li><Link to="/single-room">Single Room</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/single-blog">Single Blog</Link></li>
              <li><Link to="/404">404 Page</Link></li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
