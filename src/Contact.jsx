import React from 'react';
import "./Contact.css";
import contact1 from "./imagess/contact 2.jpg";

function Contact() {
  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <p className="contact-subtitle">Get in touch with us</p>

      {/* Info strip */}
      <div className="contact-info-strip">
        <div className="contact-info-item">
          <span className="icon">📍</span>
          <span>No.42 Car Street, Anna Nagar, Trichy – 620018</span>
        </div>
        <div className="contact-info-item">
          <span className="icon">📞</span>
          <span>+91 98765 43210</span>
        </div>
        <div className="contact-info-item">
          <span className="icon">🕐</span>
          <span>Mon – Sat &nbsp;|&nbsp; 9 AM – 7 PM</span>
        </div>
        <div className="contact-info-item">
          <span className="icon">✉️</span>
          <span>saran@carssite.com</span>
        </div>
      </div>

      <div className='row'>

        <div className='space1'>
          <img src={contact1} alt="contact" />
        </div>

        <div className='space2'>
          <form className="contactForm">

            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone" />

            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact;
