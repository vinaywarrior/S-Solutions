import React from 'react';
import '../Styling/Products.css'; // Add a separate CSS file for styling
import productsData from '../Data/productsData';

export default function Products() {
  

  return (
    <section id="services-section">
    {/* Course container */}
    <div className="courses-container">
      <h1>Products</h1>
      <p>
        Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.
      </p>
    </div>

    {/* Loop through the servicesData array to render each section dynamically */}
    {productsData.map((service, index) => (
      <div className="course-layout" key={index}>
        {/* If index is even, render image on left and text on right */}
        {index % 2 === 0 ? (
          <>
            <div className="left-section">
              <img
                src={service.imageUrl}
                alt={service.altText}
                className="service-image"
              />
            </div>
            <div className="right-section">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </>
        ) : (
          /* If index is odd, render text on left and image on right */
          <>
            <div className="left-section">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="right-section">
              <img
                src={service.imageUrl}
                alt={service.altText}
                className="service-image"
              />
            </div>
          </>
        )}
      </div>
    ))}
  </section>
   
  );
}
