import React, { Component } from "react";
import {
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import logo from "../panel/msc_logo.png";
import "./login.css";
// import bg from "./bg.jpg";

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
          <Navbar.Brand href="#">
            <img className="MSC_Logo" src={logo} alt="MSC_Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Form id="form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form_inp">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form_inp">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="form_inp"
                  type="checkbox"
                  label="Keep me signed in"
                />
              </Form.Group>
              <Button className="form_inp" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}

export default Login;
