import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import '../Styling/Imageslider.css'; // Your custom styles

const ImageSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        interval={4000} 
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        className="custom-carousel"
      >
        <div className="image-slide">
          <img 
            src="https://res.cloudinary.com/dsssueldg/image/upload/v1729527081/freepik-export-2024102116084594dw_h7xf5q.png" 
            alt="Slide 1" 
          />
          <div className="button-container">
            <Link to="services-section" smooth={true} duration={1000}>
              <button className="slide-button">Learn More</button>
            </Link>
            <Link to="course-section" smooth={true} duration={1000}>
              <button className="slide-button">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="image-slide">
          <img 
            src="https://res.cloudinary.com/dsssueldg/image/upload/v1729580351/freepik-export-202410220658542bYu_m5n7lh.png" 
            alt="Slide 2" 
          />
          <div className="button-container">
          <Link to="services-section" smooth={true} duration={1000}>
              <button className="slide-button">Learn More</button>
            </Link>
            <Link to="course-section" smooth={true} duration={1000}>
              <button className="slide-button">Get Started</button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
