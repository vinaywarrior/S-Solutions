import React, { useState } from "react";
import '../Styling/Courses.css'; // Import CSS for styling

export default function Courses() {
  const courses = [
    {
      title: "Web Development",
      description: "We build responsive and scalable websites tailored to your business needs.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729476467/WhatsApp_Image_2024-10-20_at_8.14.57_PM_1_zfzpql.jpg",
    },
    {
      title: "App Development",
      description: "Our team creates powerful mobile apps for Android and IOS that work seamlessly across platforms.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729476267/WhatsApp_Image_2024-10-20_at_8.14.57_PM_xspiu6.jpg",
    },
    {
      title: "Cloud Computing",
      description: "Boost your online presence and reach more customers with our expert services.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729475511/WhatsApp_Image_2024-10-20_at_8.21.09_PM_qooe4b.jpg",
    },
    {
      title: "Cyber Security",
      description: "cybersecurity services protect your digital assets from evolving threats.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729476467/WhatsApp_Image_2024-10-20_at_8.14.57_PM_1_zfzpql.jpg",
    },
    {
      title: "AI & Machine Learning",
      description: "We offer AI and machine learning solutions that automate processes, enhance decision-making.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729476267/WhatsApp_Image_2024-10-20_at_8.14.57_PM_xspiu6.jpg",
    },
    {
      title: "Data Science",
      description: "data science services empower businesses to analyze data effectively.",
      imageUrl: "https://res.cloudinary.com/dsssueldg/image/upload/v1729475511/WhatsApp_Image_2024-10-20_at_8.21.09_PM_qooe4b.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = courses.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return prev === totalSlides - 1 ? 0 : prev + 1; 
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return prev === 0 ? totalSlides - 1 : prev - 1;
    });
  };

  return (
    <section id="course-section">
      <div className="courses-container">
        <h1>Courses</h1>
        <p>Learn What Matters: Job-Ready Courses from SS Mentor</p>

        <div className="courses-slider">
          <div 
            className="courses-slider-content" 
            style={{ 
              transform: `translateX(-${currentSlide * 15}%)`, // Change to 100% for full slide transition
              transition: 'transform 0.5s ease-in-out',
              display: 'flex',
            }}
          >
            {courses.map((course, index) => (
              <div className="courses-service-card" key={index}>
                <img src={course.imageUrl} alt={course.title} className="courses-service-image" />
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <button className="courses-button">Course</button>
                <button className="courses-button">Internship</button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button className="courses-nav-button prev" onClick={prevSlide}>❮</button>
        <button className="courses-nav-button next" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
}
