// src/CoursesCarousel.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoursesCarousel = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center">Courses</h1>
            <p className="text-center">Learn What Matters: Job-Ready Courses from SS Mentor</p>

            <div id="courseCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            src="https://res.cloudinary.com/dsssueldg/image/upload/v1729476467/WhatsApp_Image_2024-10-20_at_8.14.57_PM_1_zfzpql.jpg" 
                            className="d-block w-100" 
                            alt="Web Development"
                            style={{ height: '400px', objectFit: 'cover' }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Web Development</h5>
                            <p>We build responsive and scalable websites tailored to your business needs.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://res.cloudinary.com/dsssueldg/image/upload/v1729476267/WhatsApp_Image_2024-10-20_at_8.14.57_PM_xspiu6.jpg" 
                            className="d-block w-100" 
                            alt="App Development"
                            style={{ height: '400px', objectFit: 'cover' }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>App Development</h5>
                            <p>Our team creates powerful mobile apps for Android and IOS that work seamlessly across platforms.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://res.cloudinary.com/dsssueldg/image/upload/v1729475511/WhatsApp_Image_2024-10-20_at_8.21.09_PM_qooe4b.jpg" 
                            className="d-block w-100" 
                            alt="Cloud Computing"
                            style={{ height: '400px', objectFit: 'cover' }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cloud Computing</h5>
                            <p>Boost your online presence and reach more customers with our expert services.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#courseCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#courseCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default CoursesCarousel;
