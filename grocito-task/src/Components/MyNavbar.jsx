import React from "react";
import img from "../assets/Grocito.png";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const MyNavbar = () => {
  const MyStyle = {
    backgroundColor: "white",
  };
  return (
    <>
      <Navbar expand="lg" style={MyStyle}>
        <Container fluid>
          <Navbar.Brand>
            <img
              href="/"
              src={img}
              width="160"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "black" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "black" }}>
                Login
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "black" }}>
                AboutUs
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "black" }}>
                ContactUs
              </Nav.Link>
              <NavDropdown
                title="Categories"
                id="navbarScrollingDropdown"
                style={{ color: "black" }}
              >
                <NavDropdown.Item href="#action3">SmartPhones</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Laptop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Refrigrator</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ border: "1px solid #000" }}
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
