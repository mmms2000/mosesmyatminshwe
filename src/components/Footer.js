import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";

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
          <h4> Who I Am</h4>
          <p>
            {" "}
            I'm Moses, a passionate frontend developer, constantly learning and
            growing through new challenges every day.
          </p>
          <div className="social"> 
            <FaFacebook size={30}
            style={{color:"#fff", marginRight:"1rem"}}
            />
            <FaInstagram size={30}
            style={{color:"#fff", marginRight:"1rem"}}
            />
             <FaLinkedin size={30}
            style={{color:"#fff", marginRight:"1rem"}}
            />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
