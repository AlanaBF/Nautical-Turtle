import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap for the modal component
import "../../assets/styles/pages.css";

const Post4 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src=""
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text>
          
          </Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Read More
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src=""
            alt=""
            className="modalImages"
          />
          <p>
            <em></em>
          </p>
          <blockquote>
            <p>
            </p>
            <p></p>
          </blockquote>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post4;
