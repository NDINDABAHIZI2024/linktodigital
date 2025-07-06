import React, { useEffect, useRef, useState } from "react";
import StaffSection from "../components/StaffSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  // Intersection Observer to trigger fade-in animation when hero is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.unobserve(heroRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white min-h-[70vh] transition-opacity duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg overflow-hidden">
          <AnimatedText text="Welcome to LinkToDigital" />
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed drop-shadow-md">
          We build modern, scalable, and beautiful digital solutions for startups,
          schools, and businesses.
        </p>
        <p className="text-yellow-300 font-semibold text-lg mb-10 drop-shadow-md">
          Transform your ideas into reality!
        </p>
        <a
          href="/projects"
          className="inline-block bg-white text-green-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
          aria-label="See Our Projects"
        >
          See Our Projects
        </a>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Staff Section */}
      <StaffSection />
    </>
  );
};

// AnimatedText component: reveals text letter by letter
const AnimatedText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
};

export default Home;
