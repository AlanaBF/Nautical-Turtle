import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/styles/components.css";

function ProfessionalProjectCard({ project }) {
  const { name, images, deployedLink, about } = project;

  return (
    <Card className="galleryCard">
      <Carousel className="cardImageCarousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="professionalCardImage"
              src={image}
              alt={`Image ${index + 1} for ${name}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body className="cardBodyText">
        <Card.Title>
          <h4 className="cardBodyTitle">
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <Card.Text className="galleryText">{about}</Card.Text>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        <Card.Link
          className="galleryCardLink"
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          kernowpets.com
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfessionalProjectCard;
