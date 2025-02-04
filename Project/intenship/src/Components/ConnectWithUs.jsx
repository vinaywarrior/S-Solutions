import React, { useState } from 'react';
import '../Styling/ConnectWithUs.css';

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Our team will contact you soon with the details stay Motivated... ');
       
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        }); 
      } else {
        console.error('Failed to send data to the server');
        setSubmissionStatus('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id='connectwithus-section'>
      <div className="connect-container">
        <div className="left-section">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.938841253.1728959236&semt=ais_hybrid"
            alt="Connect with Us"
            className="connect-image"
          />
        </div>
        <div className="right-section">
          <h2>Connect with Us!!!</h2>
          <form className="connect-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="form-field" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-row">
              <input 
                type="text" 
                name="phone"
                placeholder="Phone" 
                className="form-field" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="form-field" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Message" 
                className="form-field" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="send-btn">Send</button>
          </form>
          {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
        </div>
      </div>
    </section>
  );
}
