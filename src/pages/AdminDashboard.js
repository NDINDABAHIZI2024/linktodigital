import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/submissions");
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error("Failed to fetch submissions", err);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="dashboard">
      <h2>Contact Submissions</h2>
      {submissions.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {submissions.map((s, idx) => (
            <li key={idx}>
              <strong>{s.name}</strong> ({s.email})<br />
              Message: {s.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
