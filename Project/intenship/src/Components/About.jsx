import React from "react";
import '../Styling/About.css'; // Import the CSS file for styling

export default function About() {
  return (
    <>
    <section id="about-section">
    <h1 className="about">About Us</h1>
    <div className="about-us-container">
      
      <div className="about-content">
<p>
        Welcome to <strong>S Solutions</strong>—where innovation, creativity, and expertise converge to drive your business forward.
      </p>
      <p>
        At <strong>S Solutions</strong>, we are passionate about helping businesses succeed in the digital world. With years of experience and a diverse team of experts, we offer comprehensive solutions that cater to all your online needs. From stunning website designs to cutting-edge web and app development, we aim to deliver high-quality services that make a lasting impact.
      </p>
      <h2>Our Vision</h2>
      <p>
        Our vision is to create a world where businesses of all sizes can thrive online. We believe in the power of technology and creativity to transform how businesses engage with their customers, grow their brands, and reach new heights.
      </p>
      <h2>Our Mission</h2>
      <p>
        To empower businesses with tailored digital solutions that drive growth, improve efficiency, and enhance customer experiences. We achieve this by understanding your unique goals and delivering solutions that are not only effective but also innovative and future-ready.
      </p>
</div>
<div className="about-img">
      <img
        src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?w=740&t=st=1729491206~exp=1729491806~hmac=896db1587dc9738fa31604160527e26b040ad135b300736235acd837b943d079"
        alt="About Us"
        className="about-us-image"
      />
      </div>
      
     
    </div>
    </section>
    </>
  );
}
