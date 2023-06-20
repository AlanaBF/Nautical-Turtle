import React from "react";
import collaborativeproject from "../../collaborativeproject.json";
import ProjectCard from "../../components/ProjectCard";
import "../../assets/styles/components.css"


//Project gallery illustrating my work
function CollaborativeGallery() {
  return (
    <div className="galleryBackground">
      <h1 className="galleryPageTitle">Collaborative Group Projects</h1>
      <p className="galleryIntro">
        Here you can find examples of the Front End Development projects I have
        completed to date as part of a collaborative group.
      </p>
      <div className="galleryPageCard">
        {collaborativeproject.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default CollaborativeGallery;