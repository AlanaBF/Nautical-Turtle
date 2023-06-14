import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../assets/styles/components.css";

function ContainerIntro() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div>
            <Link to="/FreelanceDeveloper">
              <Button className="webLinkButton">Website Design and Build</Button>
            </Link>
            <Link to="/FreelanceTutor">
              <Button className="webLinkButton">
                Maths Tutor(General, SATS, Foundation GCSE)
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerIntro;
