import React from "react";
import "./CSS/Homepage.css";
import Navbar from "../components/navbar/Navbar";
import SocialLinks from "../components/social-links/SocialLinks";
import WheelComponent from "../components/wheel-component/WheelComponent";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <SocialLinks />
      <WheelComponent />
      <h2 className="projects-link">Projects</h2>
      <h2 className="resume-link">Resume</h2>
      <h2 className="about-link">About</h2>
      <h2 className="skills-link">My Skills</h2>
      <h2 className="feats-link">Feats</h2>
      <h3 className="contact-link">Say hi..</h3>
    </div>
  );
};

export default Homepage;
