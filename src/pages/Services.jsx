import React from "react";

export default function Services() {

  const services = [
    {
      title: "Employee Management",
      desc: "Manage employee records, profiles, attendance, and internal data efficiently.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },

    {
      title: "Payroll System",
      desc: "Automate salary calculations, payment tracking, and employee payroll management.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },

    {
      title: "Performance Tracking",
      desc: "Monitor employee productivity and evaluate performance with smart analytics.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },

    {
      title: "Recruitment Solutions",
      desc: "Simplify hiring and candidate management using modern recruitment tools.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },

    {
      title: "HR Analytics",
      desc: "Get data-driven insights and reports for smarter business decisions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },

    {
      title: "Employee Support",
      desc: "Provide quick employee support, issue handling, and communication systems.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    }
  ];

  return (
    <div className="page">

      <div className="hero-banner">

        <h1>Our Services</h1>

        <p>
          We provide complete HR and workforce management solutions
          for modern organizations.
        </p>

      </div>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <h2>{service.title}</h2>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

      <div className="info-box">

        <h2>Why Our Services?</h2>

        <p>
          Our solutions are designed to help companies improve productivity,
          simplify HR processes, and create a better employee experience.
        </p>

        <p>
          Using modern React.js technologies, we build fast, secure,
          responsive, and scalable applications for businesses of all sizes.
        </p>

      </div>

    </div>
  );
}