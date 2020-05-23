import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function NavBar({ show, setShow }) {
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className="p-4 navbar"
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="coral-pink"
      variant="dark"
    >
      <Navbar.Brand id="nav-brand" href="#home">Book Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Sign in/ Register</Nav.Link>
          <Nav.Link action onClick={handleShow}>
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
