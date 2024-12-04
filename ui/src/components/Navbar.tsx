// src/components/Navbar.tsx
import React from "react";
import "./Navbar.css";
import daCars from '../assets/da-cars-logo.png';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={daCars} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
