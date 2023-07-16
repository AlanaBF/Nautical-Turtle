import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap for the modal component
import "../../assets/styles/pages.css";

const Post2 = () => {
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
        <Card.Img variant="top" src="/Corporate days.jpeg" />
        <Card.Body>
          <Card.Title>Journey to Landing my First Job in Tech</Card.Title>
          <Card.Subtitle>5/7/2023</Card.Subtitle>
          <Card.Text>
            I've secured my first job in tech! Woohoo 🥳🤩🥰 It has been an
            exhilarating journey since I left my teaching career and embarked on
            a thrilling path of upskilling and retraining for a career change
            into the world of Tech. Breaking into this sector during a time of
            layoffs and fierce competition from established developers has been
            challenging, but I have gone above and beyond to ensure my success.
          </Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Read More
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Journey to Landing my First Job in Tech</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="https://www.version1.com/wp-content/uploads/2018/04/v1-placeholder-image-1.jpg"
            alt="Version 1"
            className="modalImages"
          />
          <br/>
          <p>
            I've secured my first job in tech! Woohoo 🥳🤩🥰 It has been an
            exhilarating journey since I left my teaching career and embarked on
            a thrilling path of upskilling and retraining for a career change
            into the world of Tech. Breaking into this sector during a time of
            layoffs and fierce competition from established developers has been
            challenging, but I have gone above and beyond to ensure my success.
          </p>

          <p>
            Thank you to Version 1 for this awesome opportunity as I embark on
            my career as an Associate Consultant on their Accelerate Digital
            Academy. I begin my journey with 12 weeks of training followed by 18
            months assigned to a Version 1 Team. My first week starts on the
            10th July 2023 with 2 company days at the Redditch Office.{" "}
          </p>

          <p>
            Embracing the Challenge Leaving behind a comfortable teaching career
            and stepping into the unfamiliar territory of the tech industry was
            undoubtedly a daunting decision. However, I recognized the
            challenges and decided to face them head-on. The competitive job
            market didn't deter me; instead, it fueled my determination to make
            a mark in the tech world.
          </p>

          <h5 className="blogSubTitle">
            <strong>
              Investing in myself to give myself the best chance of success
            </strong></h5>
            <p>I understood the importance of acquiring relevant skills and
            certifications. I enrolled in a government-funded Skills For Life
            bootcamp in Front End Web Development, which provided me with a
            solid foundation in this field. Additionally, I completed
            certifications in Prince2 Project Management and AgilePM, expanding
            my skill set and making myself more versatile.
       </p>
       <h5 className="blogSubTitle">
            <strong>
               Going the extra mile building my resume and gaining practical experience
            </strong></h5>
          <p>
            To showcase my abilities, I took the initiative to build a
            website for a local business, <em><a href="https://www.kernowpets.com" target="_blank">Kernow Pets</a></em> on a
            voluntary basis. This hands-on experience not only allowed me to
            apply my newly acquired skills but also added tangible value to my
            portfolio.
          </p>
          <h5 className="blogSubTitle">
            <strong>
              Networking and seeking advice, recognizing the importance of industry
            connections and expert guidance
            </strong></h5>
          <p>
          
            I actively sought opportunities to
            network with professionals in the tech field. I attended industry
            events, presented my projects to experts, and engaged with
            experienced individuals who provided invaluable insights and advice
            for success. Learning from those who have already walked the path
            was instrumental in shaping my approach.
          </p>
          <h5 className="blogSubTitle">
            <strong>
               A desire to learn and improve
            </strong></h5>
          <p>
            Having spent two decades teaching
            students, I now find myself on the other side of the learning
            journey. The eagerness to continuously learn and grow is a driving
            force behind my decision to transition into tech. I embrace the
            opportunity to practice and improve my skills, knowing that this
            industry thrives on innovation and adaptability.
          </p>

          <p>
            So excited for the future Transitioning from a teaching career to
            the world of tech has been a transformative experience. Despite the
            challenges and competitive landscape, I have remained dedicated,
            committed, and hungry for success. This new chapter allows me to
            practice what I have been preaching to my students for the past 20
            years. With my first job secured, I am thrilled to embark on this
            exciting career path and look forward to the endless possibilities
            that lie ahead.{" "}
          </p>
          <img
            src="/Corporate days.jpeg"
            alt="Corporate Days"
            className="modalImages"
          />
          <p>
            <em>
              Meeting our cohort, employers, trainers and sponsors face-to-face
            </em>
          </p>
          <blockquote>
            <p>
              {" "}
              <em>
                "Take risks, embrace change, and pursue your dreams. You never
                know what incredible opportunities lie ahead."
              </em>{" "}
              - Unknown{" "}
            </p>
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

export default Post2;
