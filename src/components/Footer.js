import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> +82 10-7502-5846</p>
            </div>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p> moseskmcmmms@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4> About This Site</h4>
          <p>
            {" "}
            This portfolio is a reflection of my journey as a developer always
            evolving, just like the projects I build.
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/moses.kmc/">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
            <Link to="https://github.com/mmms2000">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
