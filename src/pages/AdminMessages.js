// src/pages/AdminMessages.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("adminToken"); // Your token key from login

      if (!token) {
        // No token - redirect to login
        navigate("/admin/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/admin/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401 || response.status === 403) {
          // Token invalid or expired
          setError("Unauthorized. Please login again.");
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || "Failed to fetch messages");
          return;
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError("Network error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (messages.length === 0) return <p>No messages found.</p>;

  return (
    <div>
      <h2>Admin Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} style={{ marginBottom: "1em" }}>
            <strong>Name:</strong> {msg.name} <br />
            <strong>Email:</strong> {msg.email} <br />
            <strong>Telephone:</strong> {msg.telephone || "N/A"} <br />
            <strong>Message:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMessages;
