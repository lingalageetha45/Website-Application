import React from "react";

export default function About() {

  return (
    <div className="page">

      <div className="hero-banner">

        <h1>About Our Company</h1>

        <p>
          Empowering organizations with smart employee management
          and modern HR solutions.
        </p>

      </div>

      <div className="about-image-section">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="office team"
          className="about-image"
        />

      </div>

      <div className="info-box">

        <h2>Who We Are</h2>

        <p>
          We are a modern workforce management company focused on
          helping businesses simplify HR operations through smart
          and scalable web technologies.
        </p>

        <p>
          Our platform enables organizations to manage employees,
          recruitment, payroll, performance tracking, and communication
          efficiently using a clean and user-friendly system.
        </p>

      </div>

      <div className="about-grid">

        <div className="service-card">

          <h2>Our Mission</h2>

          <p>
            To provide innovative and reliable HR solutions that
            improve employee productivity and business growth.
          </p>

        </div>

        <div className="service-card">

          <h2>Our Vision</h2>

          <p>
            To become a leading digital employee management platform
            trusted by companies worldwide.
          </p>

        </div>

      </div>

      <div className="info-box">

        <h2>Why Choose Us?</h2>

        <ul className="about-list">

          <li>✔ Modern React.js based application</li>

          <li>✔ Responsive design for all devices</li>

          <li>✔ Secure employee management system</li>

          <li>✔ Easy CRUD operations and tracking</li>

          <li>✔ User-friendly and clean UI/UX</li>

        </ul>

      </div>

    </div>
  );
}