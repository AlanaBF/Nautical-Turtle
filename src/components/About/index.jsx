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
          <div className="intro-container">
            <h2 className="sectionHeader">About Me</h2>{" "}
            <p>
              Ahoy! I'm Alana, a spirited explorer on an epic quest to uncover
              the enchanting wonders of life, technology, and the boundless
              world of sports. With a heart that craves adventure, a soul deeply
              connected to the sea, and a passion for developing websites, I
              sail through life's waves and dive into the depths of its
              mysteries.
            </p>
            <p>
              The ocean is my sanctuary, and there's no place I'd rather be,
              especially surrounded by the tropical wonders and graceful turtles
              of the mesmerizing Maldives. But my journey doesn't end at sea; it
              extends into the digital realm, where I weave intricate codes and
              build captivating websites that bring dreams to life.
            </p>
            <p>
              Beyond my marine escapades and coding conquests, I'm an ardent
              sports enthusiast. From adrenaline-pumping water sports to
              heart-pounding games on the field, I embrace the thrill of
              competition and the camaraderie of teamwork. Sports have taught me
              valuable lessons about determination, resilience, and pushing
              beyond my limits.
            </p>
            <p>
              So join me, as we chart a course through creativity, innovation,
              and the thrill of competition, discovering a digital world like no
              other. Together, let's raise our sails and embark on an exciting
              journey of endless exploration!
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
