import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false); // New state for disabling submit button

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim whitespace from all form inputs
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      telephone: formData.telephone.trim(),
      message: formData.message.trim(),
    };

    // Optional: simple client-side validation for empty required fields
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }

    setStatus("Sending...");
    setIsSending(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trimmedData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus(
          "✅ Thank you for reaching out! We're thrilled that you're interested in LinkToDigital. Our team will review your message and get back to you as soon as possible."
        );
        setFormData({ name: "", email: "", telephone: "", message: "" });
      } else {
        setStatus("❌ Something went wrong: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("❌ Network error: " + error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSending}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSending}
          />
          <label htmlFor="telephone">Your telephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Your telephone"
            value={formData.telephone}
            onChange={handleChange}
            pattern="[0-9\-\+\s()]{7,20}"
            disabled={isSending}
          />
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSending}
          />
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
        </form>
        {status && <p className="contact-status">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
