import React from "react";
import profilePic from "../../assets/images/ProfilePic.jpeg";
import "../../assets/styles/components.css";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutCard">
          <h2 className="sectionHeader">About Me</h2>
          <div>
            <img src={profilePic} className="profilePic" alt="ABF profilePic" />
          </div>
          <br />
          <p>
              {" "}
              Former Teacher turned Front End Developer, always learning and
              seeking new knowledge and skills. Very excited to bring highly
              transferable and relevant skillset into the Tech Sector. I value a
              simple and clean approach and don’t like to over complicate tasks.
              A leader, mentor, effective planner and implementor of
              organization strategies to balance day to day teaching
              requirements alongside extra curricular activities.
            </p>
          <div>
            <p>
              The Nautical Turtle is designed to showcase my services and
              provide information about my freelance services. The website
              incorporates HTML, CSS, and JavaScript for the front-end
              development, with React and React Bootstrap to enhance the user
              experience. You can use this website to explore my services and get in touch with me. The website
              provides an intuitive interface and easy navigation to help you
              find the information you need.
            </p>
            <p>
              I provide freelance work in front-end web development. If you have
              a specific project in mind or need assistance with building a
              website, I am available for freelance collaborations.
            </p>
            <p>
              In addition to front-end web development, the Nautical Turtle also
              offers tutoring services, specifically in Maths for Key Stages 2,
              3, and 4. I am dedicated to helping students improve their
              mathematical skills and achieve academic success.{" "}. Other subjects available on request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
