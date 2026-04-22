import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/usedcar" className="nav-link">Usedcar</Link>
      <Link to="/servies" className="nav-link">Servies</Link>
    </nav>
  );
}

export default Navbar;
