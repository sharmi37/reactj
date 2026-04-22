import React from "react";
import Top from './Top';
import Home from './Home';
import Bottum from './Bottum';
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Servies from "./Servies";
import Usedcar from "./UsedCar";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Top />
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servies" element={<Servies />} />
            <Route path="/usedcar" element={<Usedcar />} />
          </Routes>
        </div>

        <Bottum />
      </div>
    </BrowserRouter>
  );
}

export default App;
