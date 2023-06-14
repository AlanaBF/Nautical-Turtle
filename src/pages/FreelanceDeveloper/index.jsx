import React from "react";
import "../../assets/styles/pages.css";
import { Link } from "react-router-dom";
import professional from "../../components/ProfessionalProjects/professional.json"; // Make sure the import path is correct
import ProfessionalProjectCard from "../../components/ProfessionalProjects";
import Testimonials from "../../components/Testimonials";
function FreelanceDeveloper() {
  return (
    <div className="pageBackground">
      <div>
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
        <p className="freelanceServicesText">
        Every website design and build will be unique for every client so a
        bespoke package can also be arranged. Get in touch to discuss your needs
        further.
      </p>
      <Link to="/Contact">
        <button className="contact-button">Contact Me</button>
      </Link>
      </div>
      <hr/>
      <div>
        <h2>Services Available</h2>
        <p className="freelanceServicesText">Website Build from scratch standard package £200</p>
        <li>Delivery Time 5 days</li>
        <li>Functional easy to use website</li>
        <li>Home, Service Provided, Contact Page with map</li>
        <li>Content upload</li>
        <li>Social media icons</li>
        <li>Unlimited revision until final handover</li>
        <li>Mobile Responsive</li>
        <li>Header with links to pages and Footer</li>
        <li>Domain Name and secure SSH certificate</li>
      </div>   

      <hr/>
      <h3 className="freelancePricesText">Also available:</h3>
      <h5 className="freelanceServicesText">Website redesign and update</h5>
      <h5 className="freelanceServicesText">Follow up support package</h5>
<hr/>
      <h1 className="galleryPageTitle">Professional Portfolio</h1>
      <div className="galleryPageCard">
        {professional.map((project) => (
          <ProfessionalProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div>
      <hr/>
      <Testimonials/>
      </div>
    </div>
  );
}

export default FreelanceDeveloper;
