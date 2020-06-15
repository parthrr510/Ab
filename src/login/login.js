import React, { Component } from "react";
import { Row, Col, Nav, Navbar, Form, Button } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import logo from "../panel/msc_logo.png";
import "./login.css";

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
        <br />
        <br />
        <div className="container">
          <Row>
            <Col></Col>
            <Col md={8}>
              <Form id="form">
                <h3>Login</h3>
                <hr></hr>
                <Form.Group className="form_field" controlId="formBasicEmail">
                  <Form.Label className="form_inp">Email address</Form.Label>
                  <Form.Control className="form_inpField" type="email" />
                </Form.Group>

                <Form.Group
                  className="form_field"
                  controlId="formBasicPassword"
                >
                  <Form.Label className="form_inp">Password</Form.Label>
                  <Form.Control className="form_inpField" type="password" />
                </Form.Group>
                <Button className="form_inp sub_btn" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
