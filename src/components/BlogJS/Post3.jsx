import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap for the modal component
import "../../assets/styles/pages.css";
import GroupPic from "../../assets/images/GroupBonding.jpeg";
import FamilyPic from "../../assets/images/FamilyPic.jpg";
import BdayWeekend from "../../assets/images/BirthdayWeekend.jpeg";
const Post3 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="pageBackground">
      <div className="blogPageLayout">
        <Card className="blogCard">
          <Card.Img variant="top" src={GroupPic} />
          <Card.Body>
            <Card.Title>
              My First week as an Associate Consultant with Version 1
            </Card.Title>
            <Card.Subtitle>7/10/2023</Card.Subtitle>
            <Card.Text>
              Embarking on a new career after two decades in teaching was a leap
              into the unknown. My first week in the tech world at Version 1 was
              nothing short of incredible, filled with moments of excitement,
              self-discovery, and camaraderie. As I share my journey, I hope to
              inspire those contemplating a career change to embrace the
              possibility and seize the opportunities ahead.
            </Card.Text>
            <Button
              className="blogReadMoreButton"
              variant="primary"
              onClick={handleShowModal}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Modal
          dialogClassName="custom-modal-dialog"
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Header style={{backgroundColor:'#04bfbf', color:"#d8f2e3", fontFamily: "Handlee"}} closeButton>
            <Modal.Title>
              {" "}
              My First week as an Associate Consultant with Version 1
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              After two decades of teaching, my first week in a completely new
              career was nothing short of fabulous. The transition into the
              world of tech at Version 1 was filled with excitement, learning,
              and celebration.{" "}
            </p>

            <p>
              For me, the timing couldn't have been better. Before embarking on
              my first day at the office, I had the chance to spend a weekend
              with family, celebrating all our birthdays. It was a meaningful
              prelude to my new adventure.
            </p>
            <img
              src={BdayWeekend}
              alt="Birthday Picture"
              className="modalImages"
            />
            <p>
              <em>
                My Birthday spent in my favourite place with my wife in St
                Just-in-Roseland, Cornwall
              </em>
            </p>
            <img src={FamilyPic} alt="Family Picture" className="modalImages" />
            <p>
              <em>
                Further birthday celebrations spent with my Mum, Dad, Sister and
                Niece and Nephew
              </em>
            </p>
            <p>
              Day one in the office was about receiving our laptops, getting to
              know our colleagues through introductions, and diving into newbie
              training sessions. As a cohort, for those who could make it, we
              decided to mark the beginning of our new careers with a trip into
              the heart of Birmingham. We savoured a fantastic Indian meal
              together, a perfect way to celebrate our achievements and the
              journey ahead.
            </p>
            <img src={GroupPic} alt="Group Picture" className="modalImages" />
            <p>
              <em>
                West Midlands Digital Skills Academy meal out at Tamatanga,
                Birmingham
              </em>
            </p>

            <p>
              The entire week has been a whirlwind of onboarding activities,
              with a constant stream of information and knowledge to absorb.
              What made my first week even more exhilarating was being chosen
              for my very first project. It is a project where my transferable
              teaching skills can be used and where I can offer a different
              perspective. The prospect of acquiring new skills and evolving
              into a Business Analyst and AI Engineer is incredibly exciting.
            </p>
            <p>
              As a team of new developers, we have supported each other,
              starting each day with a daily stand up Teams call and throughout
              the day checking in with each other. This has helped us transfer
              from being fully engaged all day every day in an academy to flying
              solo working from home and managing our own time to complete our
              training. It has been really nice to have the full support from
              Version 1. It has been such a fantastic and warm welcome to the
              company and I'm really excited to see where this journey will take
              me in the coming years.{" "}
            </p>
            <p>
              If you're reading this and contemplating a career change, I want
              to offer you a piece of advice from my own journey:{" "}
            </p>
            <p>
              <em>
                Be brave and make the leap. Change can be intimidating, but it's
                also incredibly rewarding and exciting. My experience serves as
                proof that it's possible to reinvent yourself and embark on a
                new career path. The rewards are endless, and the opportunities
                for growth and fulfillment are truly exciting. So, if you're
                considering a career change, I encourage you to take that step.
                Embrace the unknown, seize new opportunities, and don't be
                afraid to follow your passion. You've got this! Do it!
              </em>{" "}
            </p>

            <blockquote>
              <p>And to anyone starting a new job:</p>
              <p>
                <em>
                  "Embrace the first week of your new job like a sponge, dive
                  into the deep end, and let the waters of opportunity teach you
                  to swim, not just survive."{" "}
                </em>{" "}
              </p>
            </blockquote>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: '#04bfbf'}}>
            <Button style={{backgroundColor: '#d8f2e3', border:'none', color:'#0388a6'}} variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Post3;
