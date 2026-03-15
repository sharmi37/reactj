import React from "react";
import "./Servies.css";
import serviesv from "./imagess/serviesv1.mp4";
function Services() {
  return (
    <div className="main">
      <h1 className="title">OUR SERVICES</h1>

      <div className="services-container">
        
        <div className="services1">
           <video width="100%" autoPlay muted loop controls>
                    <source src={serviesv} type="video/mp4"/>
                  </video>
        </div>

        <div className="services2">
          <form className="service-form">
            <h2>Book a Service</h2>

            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Your message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Services;
