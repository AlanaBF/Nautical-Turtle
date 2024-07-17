import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import Post6 from "./Post6";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/styles/pages.css";
const Posts = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={8} className="mb-4 mt-4">
        <Post6 />
          <Post5 />
          <Post4 />
          <Post3 />
          <Post2 />
          <Post1 />
        </Col>
        <Col md={2} className="mt-4 float-right">
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className="list-unstyled">
              <li>
                  <Link to="/Post6">
                  My Time with the Awesome Version 1 AI Labs Team
                  </Link>{" "}
                  17/7/2024
                </li>{" "}
                <br />
              <li>
                  <Link to="/Post5">
                    100 Days of Code Challenge - Part 2: A Journey Down lots of
                    Rabbit Holes
                  </Link>{" "}
                  21/2/2024
                </li>{" "}
                <br />
                <li>
                  <Link to="/Post4">
                    100 Days of Code Challenge - Part 1: 30 days of Vanilla
                    JavaScript
                  </Link>{" "}
                  7/2/2024
                </li>{" "}
                <br />
                <li>
                  <Link to="/Post3">
                    My 1st week as an Associate Consultant with Version 1
                  </Link>{" "}
                  7/10/2023
                </li>{" "}
                <li>
                  <Link to="/Post2">
                    Journey to Landing my First Job in Tech
                  </Link>{" "}
                  5/7/2023
                </li>
                <br />
                <li>
                  <Link to="/Post1">
                    A period of reflection and goal setting
                  </Link>{" "}
                  15/7/2023
                </li>
                <br />
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
