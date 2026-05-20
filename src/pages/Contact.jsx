import React, { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully ✅");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="page">

      <div className="hero-banner">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out for support,
          recruitment, or business inquiries.
        </p>
      </div>

      <div className="contact-wrapper">

        <div className="contact-info">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="contact"
            className="contact-image"
          />

          <div className="info-box">

            <h2>Get In Touch</h2>

            <p>
              📍 Hyderabad, India
            </p>

            <p>
              📧 hrportal@gmail.com
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ⏰ Mon - Fri : 9AM - 6PM
            </p>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}