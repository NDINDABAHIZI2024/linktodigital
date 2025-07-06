// src/components/TestimonialsSection.js
import React from "react";

const TestimonialsSection = () => {
  return (
    <section style={{ padding: "4rem 1rem", textAlign: "center", background: "#f9f9f9" }}>
      <h2 style={{ color: "#ff9900", fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 700 }}>
        TESTIMONIALS
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "3rem" }}>
        Subscribe Easy Tutorials YouTube channel to watch more videos.
      </p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
        {/* Testimonial 1 */}
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
          <img
            src="https://i.ibb.co/QXg4YvZ/user1.jpg"
            alt="User 1"
            style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "1rem" }}>
            “Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.”
          </p>
          <h4 style={{ color: "#21bf73", marginBottom: "0.2rem", fontWeight: 600 }}>Avinash Kr</h4>
          <small style={{ color: "#888" }}>Co-Founder at xyz</small>
        </div>

        {/* Testimonial 2 */}
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
          <img
            src="https://i.ibb.co/QXg4YvZ/user2.jpg"
            alt="User 2"
            style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "1rem" }}>
            “Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.”
          </p>
          <h4 style={{ color: "#007bff", marginBottom: "0.2rem", fontWeight: 600 }}>Bharat Kunal</h4>
          <small style={{ color: "#888" }}>Manager at xyz</small>
        </div>

        {/* Testimonial 3 */}
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
          <img
            src="https://i.ibb.co/QXg4YvZ/user3.jpg"
            alt="User 3"
            style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "1rem" }}>
            “Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.”
          </p>
          <h4 style={{ color: "#21bf73", marginBottom: "0.2rem", fontWeight: 600 }}>Prabhakar D</h4>
          <small style={{ color: "#888" }}>Founder / CEO at xyz</small>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
