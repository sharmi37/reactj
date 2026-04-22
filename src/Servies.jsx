import React from "react";
import "./Servies.css";
import serviesv from "./imagess/serviesv1.mp4";

const SERVICE_CARDS = [
  { icon: "🔧", name: "Full Service & Maintenance", desc: "Comprehensive maintenance from oil changes to engine overhaul. Certified mechanics, genuine parts, 1-year warranty." },
  { icon: "🎨", name: "Paint & Body Work", desc: "Paint correction, ceramic coating, dent removal, and full body restoration. Showroom finish guaranteed." },
  { icon: "⚡", name: "Electrical & Diagnostics", desc: "Advanced diagnostics, ECU tuning, wiring repairs, and EV battery servicing with state-of-the-art equipment." },
  { icon: "🛞", name: "Tyres & Alignment", desc: "All major tyre brands, wheel alignment, balancing, and nitrogen inflation. On-site emergency repairs." },
  { icon: "🧊", name: "AC & Climate Systems", desc: "AC regas, compressor replacement, cabin filter cleaning, and full climate control calibration." },
  { icon: "🛡️", name: "Insurance & Warranty", desc: "Insurance claims assistance, extended warranty packages, and roadside assistance coverage." },
];

const PRICING = [
  { service: "Basic Oil Change",         time: "30 min",   price: "₹799" },
  { service: "Full Service (Petrol)",    time: "2–3 hrs",  price: "₹3,499" },
  { service: "Full Service (Diesel)",    time: "2–3 hrs",  price: "₹4,199" },
  { service: "AC Service & Regas",       time: "1–2 hrs",  price: "₹1,999" },
  { service: "Wheel Alignment & Balancing", time: "1 hr", price: "₹699" },
  { service: "Ceramic Coating",          time: "1 day",    price: "₹12,999" },
  { service: "Dent Removal (per panel)", time: "4–6 hrs",  price: "₹2,499" },
  { service: "Full Electrical Diagnostic", time: "1 hr",  price: "₹999" },
];

function Services() {
  return (
    <div className="main">

      {/* Page title */}
      <h1 className="title">OUR SERVICES</h1>
      <p className="title-sub">Certified care for every vehicle</p>

      {/* Video + Form — unchanged structure */}
      <div className="services-container">

        <div className="services1">
          <video width="100%" autoPlay muted loop controls>
            <source src={serviesv} type="video/mp4"/>
          </video>
        </div>

        <div className="services2">
          <form className="service-form">
            <h2>Book a Service</h2>

            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea placeholder="Your message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

      {/* ── Service Cards ── */}
      <p className="services-cards-title">What We Offer</p>
      <h2 className="services-cards-heading">Service <span>Packages</span></h2>

      <div className="services-cards-grid">
        {SERVICE_CARDS.map(c => (
          <div className="service-card" key={c.name}>
            <div className="service-card-icon">{c.icon}</div>
            <div className="service-card-name">{c.name}</div>
            <div className="service-card-desc">{c.desc}</div>
          </div>
        ))}
      </div>

      {/* ── Pricing Table ── */}
      <h2 className="pricing-title">Service <span>Pricing</span></h2>
      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Estimated Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {PRICING.map((row, i) => (
              <tr key={row.service}>
                <td>{i + 1}</td>
                <td>{row.service}</td>
                <td>{row.time}</td>
                <td className="price-col">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Services;
