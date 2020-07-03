import React, { Component } from "react";
import { Row, Col, Nav, Navbar, Form, Button } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import logo from "../msc_logo.png";
import "./MemberDetails.css";

class MemberDetails extends Component {
  render() {
    return (
      <div className="bgi1">
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
              {/* <Nav.Link eventKey={2} href="#">
                Sign up
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <br />
        <div className="container">
          <Row>
            <Col></Col>
            <Col md={6}>
              <Form id="form1" className="content-section1">
                <h3>Member Details</h3>
                <hr></hr>
                <fieldset>
                  {/* <p className="member_head">Member-1</p> */}
                  <legend className="member_head">Member 1</legend>
                  <Form.Group className="form_field1" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="form_inpField1" type="text" />
                  </Form.Group>

                  <Form.Group
                    className="form_field1"
                    controlId="formBasicContact"
                  >
                    <Form.Label>Contact</Form.Label>
                    <Form.Control className="form_inpField1" type="text" />
                  </Form.Group>

                  <Form.Group className="form_field1" controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="form_inpField1" type="number" />
                  </Form.Group>

                  <Form.Group
                    className="form_field1"
                    controlId="formBasicUniversity"
                  >
                    <Form.Label>University</Form.Label>
                    <Form.Control className="form_inpField1" type="text" />
                  </Form.Group>
                </fieldset>

                <Button className="form_inp sub_btn1" type="submit">
                  Submit
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

export default MemberDetails;
