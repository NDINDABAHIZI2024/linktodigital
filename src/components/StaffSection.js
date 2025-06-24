import React from "react";

const staff = [
  {
    name: "Ruhorimbere Dieuddonne",
    title: "Lead Developer",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
    socials: {
      youtube: "https://youtube.com/",
      linkedin: "https://linkedin.com/",
      x: "https://x.com/",
    },
  },
  {
    name: "NDINDABAHIZI Claude",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
    socials: {
      youtube: "https://youtube.com/",
      linkedin: "https://linkedin.com/",
      x: "https://x.com/",
    },
  },
  {
    name: "Sophia Lee",
    title: "Project Manager",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
    socials: {
      youtube: "https://youtube.com/",
      linkedin: "https://linkedin.com/",
      x: "https://x.com/",
    },
  },
];

const iconStyle = {
  width: 26,
  height: 26,
  margin: "0 0.3rem",
  verticalAlign: "middle",
  color: "#007bff",
  transition: "color 0.2s",
};

const icons = {
  youtube: (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  linkedin: (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
    </svg>
  ),
  x: (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.162 0h-4.327l-5.835 8.228-5.835-8.228h-4.327l8.228 11.627-8.228 11.627h4.327l5.835-8.228 5.835 8.228h4.327l-8.228-11.627z" />
    </svg>
  ),
};

const StaffSection = () => (
  <section
    style={{
      marginTop: "3rem",
      padding: "2rem 0",
      background: "#f4f8fb",
      borderRadius: "18px",
      boxShadow: "0 2px 12px rgba(33,191,115,0.07)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "#007bff",
        fontSize: "2rem",
        marginBottom: "2rem",
      }}
    >
      Our Staff
    </h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        flexWrap: "wrap",
      }}
    >
      {staff.map((person, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            padding: "1.5rem 1.2rem",
            width: 220,
            transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector("img").style.transform = "scale(1.12)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector("img").style.transform = "scale(1)")
          }
        >
          <img
            src={person.image}
            alt={person.name}
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "3px solid #21bf73",
              transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
            }}
          />
          <h3
            style={{
              fontSize: "1.15rem",
              color: "#21bf73",
              margin: 0,
            }}
          >
            {person.name}
          </h3>
          <p
            style={{
              fontSize: "0.98rem",
              color: "#555",
              margin: 0,
              marginTop: 4,
            }}
          >
            {person.title}
          </p>
          <div style={{ marginTop: 12 }}>
            {Object.entries(person.socials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
              >
                {icons[key]}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StaffSection;
