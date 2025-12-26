import React from "react";
import { Container, Row, Col, Button, Card, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">MyReactApp</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div className="bg-primary text-light text-center py-5">
        <Container>
          <h1 className="mb-3">Welcome to My React App</h1>
          <p className="mb-4">
            Build modern, responsive web apps using React & Bootstrap
          </p>
          <Button variant="light">Get Started</Button>
        </Container>
      </div>

    
      <Container className="my-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>Fast</Card.Title>
                <Card.Text>
                  React makes your UI fast and interactive.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>Responsive</Card.Title>
                <Card.Text>
                  React-Bootstrap works perfectly on all devices.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>Reusable</Card.Title>
                <Card.Text>
                  Build reusable components easily with React.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
      <footer className="bg-dark text-light text-center py-3">
        <Container>
          <p className="mb-0">
            © 2025 MyReactApp | Built with React-Bootstrap
          </p>
        </Container>
      </footer>
    </>
  );
}
