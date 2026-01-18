import React from "react";
import Navbar from "../components/layouts/Navbar.jsx";
import Footer from "../components/layouts/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import Education from "../components/sections/Education.jsx";
import Contact from "../components/sections/Contact.jsx";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
