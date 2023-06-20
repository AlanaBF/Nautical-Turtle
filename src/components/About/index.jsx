import React from "react";
import "../../assets/styles/components.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <h2 className="sectionHeader">About Me</h2>
        <p className="aboutText">
          An avid lover of all things nautical, on the sea, in the sea and under
          the sea, from sailing, fishing, water sports, snorkelling, swimming...
          With a particular fondness for the Maldives, it's tropical wonders and
          turtles and the inspiration behind my Portfolio.
          </p>
          <p className="aboutText">
          Passionate about life, travel and the outdoors and pushing myself out
          of my comfort zone and to always learn.
          </p>
          <p>
          Former Teacher turned Front End Developer, always learning and seeking
          new knowledge and skills. Very excited to bring highly transferable
          and relevant skillset into the Tech Sector. I value a simple and clean
          approach and don’t like to over complicate tasks. A leader, mentor,
          effective planner and implementor of organization strategies to
          balance day to day requirements.
        </p>
        <h2 className="sectionHeader">Skills</h2>
        <ul className="skillList">
          <li>Prince2 Project Manager Foundation and Practitioner</li>
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
