import React from "react";
import "../../assets/styles/pages.css";
import { Link } from "react-router-dom";
function FreelanceTutor() {
  return (
    <div className="pageBackground">
      <div>
        <h2 className="freelanceAboutText">Freelance Tutoring</h2>
        <p className="freelanceAboutText">
          I have been a teacher for 20 years... As I move away from teaching in
          the traditional education setting and into Web Development, I would
          like to offer my services as a Tutor. I started out my teaching career
          as a PE Teacher. I then taught the 7-13 age range Maths to Common
          Entrance 13+, Geography and PE for 8 years. I moved to Spain then, and
          taught Spanish students a whole range of subjects in a British School.
          This was an amazing experience, including Teaching English as a
          Foreign Language on Saturdays. When I moved back to England I moved
          towards secondary Maths Teaching, Geography and Animal Care.
        </p>
        <p className="freelanceAboutText">
          Maths Tutoring available for ages 7-16+ including:
          <li>GCSE Foundation Maths</li>
          <li>Key Skills Maths</li>
          <li>Key Stage 2 SATS Maths</li>
          <li>General Maths Support</li>
        </p>
        <p className="freelanceAboutText">Other subjects available on request</p>
      </div>
      <Link to="/Contact">
        <button className="contact-button">Contact Me</button>
      </Link>
      <hr/>
      <div >
        <h2 className="freelanceServicesText">Services Available</h2>
        <p className="freelanceServicesText">Remote Tutoring</p>
        <p className="freelanceServicesText">Group Tutoring</p>
        <p className="freelanceServicesText">
          Tutoring at my home. Hands on practical Math learning as well as sit
          down study - must love animals!
        </p>
        <p className="freelanceServicesText">
          Face-to-Face 1-1 Tutoring within a 10 mile radius of Grampound Road,
          Cornwall
        </p>
        <p className="freelanceServicesText">
          Face-to-Face Small Group Tutoring within a 10 mile radius of Grampound
          Road, Cornwall
        </p>
        <p className="freelanceServicesText">
          Every student learns differently. Following 20 years as a Maths
          teacher at Key Stage 2, Key Stage 3 and Key Stage 4 in a variety of
          settings I will tailor a tutoring package to meet the needs of the
          student. Get in touch to discuss your needs further.
        </p>
      </div>
      <hr/>
      <div>
        <h3 className="freelancePricesText">Prices</h3>
        <p className="freelancePricesText">£20 per person per hour for Small Group</p>
        <p className="freelancePricesText">£25 per hour 1-1 Remote</p>
        <p className="freelancePricesText">£30 per hour 1-1 Face-to-Face</p>
        <p className="freelancePricesText">£30 per hour for tutoring at my home</p>
        <p className="freelancePricesText">
          All resources provided unless you want to provide your own, for
          example with homework help, or exam preparation
        </p>
      </div>
    </div>
  );
}

export default FreelanceTutor;
