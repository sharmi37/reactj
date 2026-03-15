import React from "react";
import "./Usedcar.css";

import heroImg from "./imagess/usedcar4.jpeg";
import maruti from "./imagess/Maruti Suzuki Logo.jpg";
import hyundai from "./imagess/Hyundai.jpg";
import honda from "./imagess/HONDA.jpg";
import lada from "./imagess/1966 Lada.jpg";
import kia from "./imagess/Kia.jpg";
import bmw from "./imagess/2020 BMW M850 Gran Coupe.jpg";

function UsedCar() {

  const brands = [
    { name: "Maruti Suzuki", img: maruti },
    { name: "Hyundai", img: hyundai },
    { name: "Honda", img: honda },
    { name: "Lada", img: lada },
    { name: "Kia", img: kia },
    { name: "BMW", img: bmw },
  ];

  return (
    <div className="used-container">

      {/* Hero Section */}
      <section className="used-hero">
        <div className="hero-left">
          <h1>
            Your Dream Car <br />
            Just One Click <br />
            Away!
          </h1>

          <p>
            Find the right car from our extensive collection
          </p>

          <button className="hero-btn">Buy Used Cars</button>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Used Car" />
        </div>
      </section>


      {/* Brand Section */}
      <section className="brand-section">
        <h2>Used Cars by Brand</h2>

        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.img} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default UsedCar;