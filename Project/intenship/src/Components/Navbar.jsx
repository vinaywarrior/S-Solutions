import React, { useEffect, useState } from 'react';
import Clogo from '../Assets/Company-logo.png';
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section id="home-section">
      <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
        <div className="logo-container">
          <img className="logo-img" src={Clogo} alt="Company Logo" />
          <div className="text-content">
            <h1>S Solutions Pvt Ltd.</h1>
            <p>Your Skill, Success & Journey</p>
          </div>
        </div>
        <div className="menu">
          <a href="#home-section">Home</a>
          <a href="#services-section">Services</a>
          <a href="#course-section">Course</a>
          
          <Link to="/gallery">Gallery</Link>
          <Link to="/products">Products</Link>
          <a href="#about-section">About</a>
          <a href="#connectwithus-section">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
