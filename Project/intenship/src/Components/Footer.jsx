import React from "react";
import '../Styling/Footer.css'; // Import CSS for the footer styling
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>S Solutions Pvt Ltd.</h3>
          <p>
            We are a leading provider of web development, app development, and cloud computing services. Our goal is to deliver innovative solutions that help businesses succeed online.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#services-section">Service</a></li>
            <li><a href="#course-section">Course</a></li>
            <li><a href="#about-section">About Us</a></li>
            <li><a href="#connectwithus-section">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> Tumkur</p>
          <p><strong>Email:</strong> ssolution@gmail.com</p>
          <p><strong>Phone:</strong> +91-9342992321</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 S Solutions Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
