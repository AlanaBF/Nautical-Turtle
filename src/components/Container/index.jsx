import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../assets/styles/components.css'
function ContainerIntro() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>  <Button className="webLinkButton" href="">Portfolio Web Designer</Button>{' '}</Col>
        <Col xs={12} md={6}>  <Button className="webLinkButton">Maths Tutor (KS2, KS3, KS4)</Button>{' '}</Col>
      </Row>
     
    </Container>
  );
}

export default ContainerIntro;