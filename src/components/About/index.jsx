import React from "react";
import "../../assets/styles/components.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <h2 className="sectionHeader">About Me</h2>
        <p className="aboutText">
          Former Teacher turned Front End Developer, always learning and seeking
          new knowledge and skills. Very excited to bring highly transferable
          and relevant skillset into the Tech Sector. I value a simple and clean
          approach and don’t like to over complicate tasks. A leader, mentor,
          effective planner and implementor of organization strategies to
          balance day to day teaching requirements alongside extra curricular
          activities.
        </p>
        <h2 className="sectionHeader">Skills</h2>
        <ul className="skillList">
          <li>Programming: HTML, CSS, JavaScript</li>
          <li>Frameworks: React.js, Node.js, Bootstrap</li>
          <li>Methodologies: Agile, Scrum, Kanban</li>
          <li>Other: Git, APIs</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
