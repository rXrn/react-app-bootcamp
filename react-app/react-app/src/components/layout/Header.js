import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export function Header() {
  return (
    <Row as="header">
      <Col xs="12" className="p-0">
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">React Bootstrap</Navbar.Brand>
            <NavbarCollapse>
              <Nav>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/greetings">
                  Greeting
                </Nav.Link>
                <Nav.Link as={Link} to="/guestbook">
                  YearBook
                </Nav.Link>
                <Nav.Link as={Link} to="/guestbookredux">
                  YearBook
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}
