import React from "react";

export default function Career() {

  const jobs = [
    {
      role: "Frontend Developer",
      type: "Full-Time",
      location: "Hyderabad",
      salary: "₹6 LPA - ₹10 LPA",
      desc:
        "Build responsive and modern user interfaces using React.js and modern frontend technologies.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },

    {
      role: "React Developer",
      type: "Remote",
      location: "Work From Home",
      salary: "₹8 LPA - ₹12 LPA",
      desc:
        "Develop scalable web applications and reusable React components for enterprise solutions.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },

    {
      role: "UI/UX Designer",
      type: "Full-Time",
      location: "Bangalore",
      salary: "₹5 LPA - ₹9 LPA",
      desc:
        "Design clean and user-friendly interfaces with strong focus on UI/UX experience.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
    },

    {
      role: "HR Executive",
      type: "On-Site",
      location: "Chennai",
      salary: "₹4 LPA - ₹7 LPA",
      desc:
        "Handle recruitment processes, employee relations, onboarding, and HR operations.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },

    {
      role: "Backend Developer",
      type: "Hybrid",
      location: "Pune",
      salary: "₹7 LPA - ₹11 LPA",
      desc:
        "Develop secure APIs and backend systems using Node.js and database technologies.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    },

    {
      role: "Project Manager",
      type: "Full-Time",
      location: "Mumbai",
      salary: "₹10 LPA - ₹15 LPA",
      desc:
        "Manage project planning, team coordination, and successful software delivery.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  return (
    <div className="page">

      <div className="hero-banner">

        <h1>Career Opportunities</h1>

        <p>
          Join our growing team and build innovative digital solutions
          with modern technologies.
        </p>

      </div>

      <div className="service-grid">

        {jobs.map((job, index) => (

          <div className="career-card" key={index}>

            <img
              src={job.image}
              alt={job.role}
              className="service-image"
            />

            <h2>{job.role}</h2>

            <p>{job.desc}</p>

            <p>
              <strong>Type:</strong> {job.type}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>

            <button className="apply-btn">
              Apply Now
            </button>

          </div>

        ))}

      </div>

      <div className="info-box">

        <h2>Why Work With Us?</h2>

        <ul className="about-list">

          <li>✔ Friendly and innovative work environment</li>

          <li>✔ Career growth opportunities</li>

          <li>✔ Flexible work culture</li>

          <li>✔ Modern technologies and real-world projects</li>

          <li>✔ Competitive salary packages</li>

        </ul>

      </div>

    </div>
  );
}