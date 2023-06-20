import React from "react";
import Card from "react-bootstrap/Card";
import "../../assets/styles/components.css"
// Card that gives an image of the project, the name and a description and the deployed link

function ProjectCard({ project }) {
  const { name, image, Github, deployedLink, about } = project;

  return (
    <Card className="galleryCard">
      <div className="cardImagePosition">
        <Card.Img className="cardImage" variant="top" alt={`Image for ${name}`} src={image} />
      </div>
      <Card.Body className="cardBodyText">
        <Card.Title>
          <h4 className="cardBodyTitle">
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <Card.Text className="galleryText">
          <h5 className="galleryText">{about}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        <Card.Link className="galleryCardLink">
          {deployedLink === "not deployed" ? (
            <h5 className="galleryCardLink">Backend Project</h5>
          ) : (
            <h5 className="galleryCardLink">
              <a className="galleryCardLink" href={deployedLink} target="_blank">Deployed Web Page</a>
            </h5>
          )}
        </Card.Link>
        <Card.Link href="#">
          <h5 className="galleryCardLink">
            <a className="galleryCardLink" href={Github} target="_blank">Github</a>
          </h5>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;