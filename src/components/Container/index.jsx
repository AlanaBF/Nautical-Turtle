import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../assets/images/businessLogo.jpeg";
import "../../assets/styles/components.css";

function ContainerIntro() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="d-inline-flex flex-column align-items-center">
            <Link to="/FreelanceDeveloper" className="mb-2">
              <Button className="webLinkButton">Portfolio Web Designer</Button>{" "}
            </Link>
            <Link to="/FreelanceTutor">
              <Button className="webLinkButton">
                Maths Tutor (KS2, KS3, KS4)
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerIntro;

