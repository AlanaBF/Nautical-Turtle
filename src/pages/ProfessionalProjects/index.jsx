import React from "react";
import professional from "../../components/ProfessionalProjects/professional.json"; // Make sure the import path is correct
import ProfessionalProjectCard from "../../components/ProfessionalProjects";
import Testimonials from "../../components/Testimonials";

import "../../assets/styles/pages.css";

function ProfessionalGallery() {
  return (
    <div className="pageBackground">
      <h1 className="galleryPageTitle">Professional Gallery</h1>
      <p className="galleryIntro">
        Here you can find examples of the Front End Development projects I have completed to date.
      </p>
      <div className="galleryPageCard">
        {professional.map((project) => (
          <ProfessionalProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div>
      <Testimonials/>
      </div>
    </div>
  );
}

export default ProfessionalGallery;
