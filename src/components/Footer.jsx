import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        
        <div className="footer-left">
          <img src={logo} alt="Imperial Logo" className="footer-logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-links">
          <h5 className="footer-heading">USEFUL LINKS</h5>
          <ul className="footer-nav">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#service">SERVICE</a></li>
            <li><a href="#room">ROOM</a></li>
          </ul>
        </div>


        <div className="footer-subscribe">
          <h5 className="footer-heading">SUBSCRIBE</h5>
          <p className="subscribe-text">
            Don’t miss to subscribe our news,<br />kindly fill the form below
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email Here" />
            <button className="subscribe-button">➤</button>
          </div>
        </div>
      </div>

      <div className="footer-lines">
        <hr className="footer-line left-line" />
        <hr className="footer-line right-line" />
      </div>

   
      <div className="footer-social">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaPinterestP />
        <FaDribbble />
      </div>


      <div className="footer-bottom">
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
