// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/Imageslider';
import Services from './Components/Services';
import Courses from './Components/Courses';
import About from './Components/About';
import Footer from './Components/Footer';
import ConnectWithUs from './Components/ConnectWithUs';
import Gallery from './Components/Gallery';
import Products from './Components/Products';

function App() {
  const images = [
    'https://img.freepik.com/free-photo/using-laptop-group-people-business-conference-modern-classroom-daytime_146671-16285.jpg?w=996&t=st=1728971562~exp=1728972162~hmac=f237fde1add93d4939e11cc74ffc06a57d74a49c9052f871958d68ae88664e2d',
    'https://img.freepik.com/free-photo/concentrated-job-business-people-manager-working-their-new-project-classroom_146671-16300.jpg?w=996&t=st=1728972119~exp=1728972719~hmac=adaa2d266a5286a0a2ffe70762d2754e87b91c7261f61376c31b57380b366ddf',
  ];

  return (
    <Router>
     
      <Routes>
        <Route
          path="/"
          element={
            <>
             <Navbar />
              <ImageSlider images={images} />
              <Services />
              <Courses />
              <About />
              <ConnectWithUs />
              <Footer />
            </>
          }
        />

        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
