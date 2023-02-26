// Component of Navigation bar
import React from "react";
import { FaBars, FaUserCircle, FaSearch } from "react-icons/fa";
import "./css/Navigation.css";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* logo container */}
          <div className="logo-container">
            <div id="logo"></div>
            <span id="name">WASSERSTOFF</span>
          </div>
          {/* Search Bar */}
          <div className="search-container">
            <input type="text" placeholder="" className="search-input" />
            <FaSearch className="search-icon" />
          </div>
          {/* .........Create Menu Content here................ */}
          <div className="menu-container">
            <ul className="menu">
              <li>Statistics</li>
              <li>Overview</li>
              <li>Dashboard</li>
              <li>Analytics</li>
            </ul>
          </div>
          {/* For Diffrent option hamburger symbol */}
          <div className="option-container">
            <FaUserCircle className="profile-icon" />
            <FaBars className="menu-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
}
