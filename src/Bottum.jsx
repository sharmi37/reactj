import React from 'react';
import './Bottum.css';

function Bottum() {
  return (
    <div className='bottum1'>

      {/* ── Main footer columns ── */}
      <div className="bottum-main">

        {/* Brand + about */}
        <div>
          <div className="bottum-brand">Saran Cars</div>
          <p className="bottum-about">
            Trichy's most trusted car dealership since 2010. New, used, and serviced vehicles under one roof.
          </p>
        </div>

        {/* Quick links */}
        <div className="bottum-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Used Cars</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="bottum-col">
          <h4>Services</h4>
          <ul>
            <li>Oil Change</li>
            <li>AC Service</li>
            <li>Tyre & Alignment</li>
            <li>Paint & Body</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bottum-col">
          <h4>Contact</h4>
          <ul>
            <li>📍 Trichy, Tamil Nadu</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ saran@carssite.com</li>
            <li>🕐 Mon–Sat, 9AM–7PM</li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="bottum-bottom">
        <p className="bottum-copy">© 2025 Saran Cars. All rights reserved.</p>
        <div className="bottum-socials">
          <div className="social-icon">📘</div>
          <div className="social-icon">📸</div>
          <div className="social-icon">🐦</div>
          <div className="social-icon">▶️</div>
        </div>
      </div>

    </div>
  );
}

export default Bottum;
