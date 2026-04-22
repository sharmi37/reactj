import React from "react";
import "./Usedcar.css";

import heroImg from "./imagess/usedcar4.jpeg";
import maruti from "./imagess/Maruti Suzuki Logo.jpg";
import hyundai from "./imagess/Hyundai.jpg";
import honda from "./imagess/HONDA.jpg";
import lada from "./imagess/1966 Lada.jpg";
import kia from "./imagess/Kia.jpg";
import bmw from "./imagess/2020 BMW M850 Gran Coupe.jpg";

const CAR_LISTINGS = [
  { name: "Maruti Swift VXI",       year: 2020, km: "28,000",  fuel: "Petrol", price: "₹5.80 L",  status: "Available" },
  { name: "Hyundai i20 Asta",       year: 2021, km: "18,500",  fuel: "Petrol", price: "₹7.20 L",  status: "Available" },
  { name: "Honda City ZX CVT",      year: 2019, km: "42,000",  fuel: "Petrol", price: "₹9.50 L",  status: "Sold" },
  { name: "Kia Seltos HTX",         year: 2022, km: "12,000",  fuel: "Diesel", price: "₹13.75 L", status: "Available" },
  { name: "BMW 3 Series 320d",      year: 2018, km: "55,000",  fuel: "Diesel", price: "₹24.00 L", status: "Available" },
  { name: "Hyundai Creta SX(O)",    year: 2021, km: "22,000",  fuel: "Petrol", price: "₹14.50 L", status: "Available" },
  { name: "Maruti Dzire AMT ZDI",   year: 2020, km: "31,000",  fuel: "Diesel", price: "₹7.90 L",  status: "Sold" },
  { name: "Honda Amaze S MT",       year: 2022, km: "9,000",   fuel: "Petrol", price: "₹8.25 L",  status: "Available" },
];

function UsedCar() {

  const brands = [
    { name: "Maruti Suzuki", img: maruti },
    { name: "Hyundai",       img: hyundai },
    { name: "Honda",         img: honda },
    { name: "Lada",          img: lada },
    { name: "Kia",           img: kia },
    { name: "BMW",           img: bmw },
  ];

  return (
    <div className="used-container">

      {/* ── Hero Section — unchanged ── */}
      <section className="used-hero">
        <div className="hero-left">
          <h1>
            Your Dream Car <br />
            Just <span>One Click</span> <br />
            Away!
          </h1>
          <p>Find the right car from our extensive certified pre-owned collection.</p>
          <button className="hero-btn">Browse Used Cars</button>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Used Car" />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="used-stats">
        {[["500+","Cars Sold"],["150+","In Stock"],["6","Top Brands"],["4.8★","Customer Rating"]].map(([n,l]) => (
          <div className="used-stat" key={l}>
            <div className="used-stat-num">{n}</div>
            <div className="used-stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* ── Brand Section — unchanged structure ── */}
      <p className="used-section-label">Filter by Brand</p>
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

      {/* ── Car Listings Table ── */}
      <p className="used-section-label">Browse Inventory</p>
      <h2 className="used-section-title">Current <span>Listings</span></h2>

      <div className="cars-table-wrap">
        <table className="cars-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Car Model</th>
              <th>Year</th>
              <th>KM Driven</th>
              <th>Fuel</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {CAR_LISTINGS.map((car, i) => (
              <tr key={car.name}>
                <td>{i + 1}</td>
                <td>{car.name}</td>
                <td>{car.year}</td>
                <td>{car.km} km</td>
                <td>{car.fuel}</td>
                <td className="price-col">{car.price}</td>
                <td>
                  <span className={`badge${car.status === "Available" ? " green" : ""}`}>
                    {car.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default UsedCar;
