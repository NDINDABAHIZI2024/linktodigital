// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "0 1rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  };

  const sectionStyle = {
    marginBottom: "2rem",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#21bf73",
    marginBottom: "1rem",
    borderBottom: "2px solid #21bf73",
    paddingBottom: "0.5rem",
  };

  const listStyle = {
    paddingLeft: "1.2rem",
  };

  const quoteStyle = {
    fontStyle: "italic",
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "1rem",
    borderLeft: "4px solid #21bf73",
    paddingLeft: "1rem",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Background
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          I'm a passionate web developer with a mission to help businesses and
          institutions succeed online. I specialize in building full-stack websites
          for startups, blogs, stock management systems, and schools. With a focus
          on simplicity and performance, I aim to create user-friendly and
          visually engaging websites.
        </motion.p>
      </motion.section>

      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.ul
          style={listStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <li>Frontend: HTML, CSS, JavaScript, React.js</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB (NoSQL), localStorage (simple frontend apps)</li>
          <li>Version Control: Git & GitHub</li>
          <li>Responsive Design, Accessibility, SEO Basics</li>
        </motion.ul>
      </motion.section>

      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Mission & Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          My goal is to be a digital bridge for individuals and organizations by
          transforming ideas into modern, responsive, and scalable web applications.
          Whether you are launching a startup, managing inventory, or running a
          school — I’m here to help you thrive online.
        </motion.p>
      </motion.section>

      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Philosophy
        </motion.h2>
        <motion.p
          style={quoteStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          “Technology should empower, not overwhelm. I believe in building simple,
          powerful, and human-centered solutions that make a real difference.”
        </motion.p>
      </motion.section>
    </motion.div>
  );
};

export default About;
