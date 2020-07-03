import React, { Component } from "react";
import { Row, Col, Nav, Navbar, Form, Button } from "react-bootstrap";
// import Media from "react-bootstrap/Media";
// import { Link } from "react-router-dom";
import logo from "../panel/msc_logo.png";
import "./login.css";

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
  handleInputChange = (event) => {
    const target = event.target,
          value = target.value,
          name = target.name
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }
  render() {
    const errors = this.props.errors || {}
    return (
      <div className="bgi">
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
            <Col md={6}>
              <Form id="form" onSubmit={this.onSubmit}>
                <h3>Login</h3>
                <hr></hr>
                <Form.Group className="form_field" controlId="formBasicEmail">
                  <Form.Label>Team Name</Form.Label>
                  <Form.Control className="form_inpField" type="text" error={errors.username} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group
                  className="form_field"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control className="form_inpField" type="password" error={errors.password} onChange={this.handleInputChange} />
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

export default LoginForm;
