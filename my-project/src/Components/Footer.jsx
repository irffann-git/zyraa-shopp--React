import React from "react";
import {
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
     
        <div className="footer-col">
          <h4>SUPPORT</h4>
          <ul>
            <li>Contact us</li>
            <li>Promotions & Sale</li>
            <li>Track Order</li>
            <li>Shoe Care</li>
            <li>Tech Glossary</li>
            <li>Initiate Return / Exchange</li>
            <li>Sneakers</li>
            <li>Nitro</li>
            <li>Sitemap</li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>GO WILD</li>
            <li>Company</li>
            <li>Corporate News</li>
            <li>Press Center</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Store Locator</li>
            <li>Zyraa Articles</li>
          </ul>
        </div>

  
        <div className="footer-col">
          <h4>STAY UP TO DATE</h4>
          <div className="social-icons">
            <FaYoutube />
            <FaXTwitter />
            <FaPinterest />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        <div className="footer-col">
          <h4>EXPLORE</h4>
          <div className="explore-btns">
            <button>Zyraa APP</button>
            <button>Zyraa TRAC</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="payment-icons">
          <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
          <img
            src="https://img.icons8.com/color/48/mastercard.png"
            alt="mastercard"
          />
          <img src="https://img.icons8.com/color/48/amex.png" alt="amex" />
          <img src="https://img.icons8.com/color/48/rupay.png" alt="rupay" />
        </div>

        <div className="country">
          <span>
            <img
              style={{ width: "50px", borderRadius: "1cm", height: "20px" }}
              src="7053.jpg"
              alt="n"
            />{" "}
            INDIA
          </span>
        </div>

        <div className="copy">
          © ZYRAA INDIA LTD, 2025. ALL RIGHTS RESERVED.
          <a href="#">IMPRINT AND LEGAL DATA</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
