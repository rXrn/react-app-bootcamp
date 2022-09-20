import { Container, Row, Col, Navbar } from "react-bootstrap";

export function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Batal klik");
  };
  return (
    <Row as="footer" className="fixed-bottom text-center">
      <Col>
        <Navbar
          bg="dark"
          variant="dark"
          className="justify-content-center text-center"
        >
          <Container fluid>
            <Navbar.Brand
              href="https://www.google.com"
              onClick={(e) => handleClick(e)}
              className="text-center"
            >
              React Footer
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

<Col xs="12" className="p-0 text-center ">
  <Navbar bg="dark" variant="dark">
    <span className="text-white text-center">React Footer!</span>
  </Navbar>
</Col>;
