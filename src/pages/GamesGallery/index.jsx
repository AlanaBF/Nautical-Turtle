import React from "react";
import "../../assets/styles/pages.css";
import ProjectCard from "../../components/ProjectCard";
import games from "../../games.json";
import image from "../../assets/Avatar/ReadyPlayerMe-Avatar (4).jpeg";

function GamesGallery() {
  return (
    <div className="galleryBackground">
      <div>
        <h1 className="galleryPageTitle">Games</h1>
        <img className="avatar-img" src={image} alt="Avatar" />
      </div>
      <p className="galleryIntro">
        Here you can play Front End Games I have made.
      </p>
      <div className="galleryPageCard">
        {games.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default GamesGallery;
