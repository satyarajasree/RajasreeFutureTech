import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="d-flex align-items-center">
              <span className="sitename">Rajasree FutureTech</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Hyderabad corporate office, Address Corp Off: Plot number 130, 1st Floor, GSK Arcade, Beside Shilparamam, Bhagayath Phase2, Uppal, Hyderabad, Telangana 500039.</p>
              <p className="mt-3"><strong>Phone:</strong> <span>916262666999</span></p>
              <p><strong>Email:</strong> <span>Info@rajasreetownships.in</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Terms of service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/">Web Design</a></li>
              <li><a href="/">Web Development</a></li>
              <li><a href="/">Product Management</a></li>
              <li><a href="/">Marketing</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links d-flex">
              <a href="/"><FaTwitter /></a>
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span>
          <strong className="px-1 sitename">Rajasree FutureTech</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
