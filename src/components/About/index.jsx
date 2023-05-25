import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import "../../assets/styles/components.css";

function About() {
  return (
    <div className="pageBackground">
    <div className="aboutContainer">
      <div className="aboutCard">
        <h2 className="sectionHeader">About Me</h2>
        <div>
          <img src={profilePic} className="profilePic" alt="ABF profilePic" />
        </div>
     
     
      </div>
    </div>
    </div>
  );
}

export default About;
