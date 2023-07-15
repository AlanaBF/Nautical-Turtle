import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import "../../assets/styles/components.css";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutCard">
          <div>
            <img src={profilePic} className="profilePic" alt="ABF profilePic" />
          </div>
          <br />
          <h2 className="sectionHeader">About Me</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
