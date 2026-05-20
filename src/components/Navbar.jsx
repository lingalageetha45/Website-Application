import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logoutUser }) {
  return (
    <nav className="navbar">

      <h2>Website</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={logoutUser} className="logout-btn">
          Logout
        </button>
      </div>

    </nav>
  );
}