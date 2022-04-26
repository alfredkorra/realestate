import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebookF className="icon" />
        <BsInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaPinterest className="icon" />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          
        </div>
        <div className="col">
          <h3>Company</h3>
          
        </div>
        <div className="col">
          <h3>Legal</h3>
          
        </div>
        <div className="col">
          <h3>Information</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
