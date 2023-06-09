import React from "react";
import "../../assets/styles/pages.css";

function FreelanceDeveloper() {
  return (
    <div className="pageBackground">
      <div className="freelanceWhiteSection">
        <h2 className="freelanceAboutText">Freelance Web Development</h2>
        <p className="freelanceAboutText">
          Creating websites for small businesses and startups with user friendly
          design and engaging experiences for their clients.
        </p>
        <p className="freelanceAboutText">
          I am passionate about creating a well designed website that meets both
          the product owner and users needs. I will work with you throughout the
          consultation, design process and build to create something that will
          leave both you and your clients engaged and happy. Following
          successful completion and sign off of the website, I can also provide
          a 6 month support package to help with any potential issues or tweaks
          you may wish to make.
        </p>
      </div>
      <div className="freelanceColorSection">
        <h2>Services Available</h2>
        <p className="freelanceServicesText">Website Build from scratch</p>
        <p className="freelanceServicesText">Website redesign and update</p>
        <p className="freelanceServicesText">Follow up support package</p>
        <p className="freelanceServicesText">
          Every website design and build will be unique for every client so a
          bespoke package can also be arranged. Get in touch to discuss your
          needs further.
        </p>
      </div>
      <div className="freelanceDarkSection">
        <h3 className="freelancePricesText">Prices Available on Request</h3>
      </div>
    </div>
  );
}

export default FreelanceDeveloper;
