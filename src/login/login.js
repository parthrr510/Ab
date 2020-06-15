import React, { Component } from "react";
import { Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <Col sm={12}>
            <div className="login-div">
              <p
                style={{
                  color: "#01c5c4",
                  fontWeight: "700",
                  fontSize: "50px",
                }}
              >
                LOGIN
              </p>
              <br></br>
              TEAM-NAME
              <br></br>
              <input
                type="text"
                style={{
                  backgroundColor: "#2f3035",
                  borderBottom: "1px  #ff6666 solid",
                }}
              ></input>
              <br></br>
              <br></br>
              PASSWORD
              <br></br>
              <input
                type="password"
                style={{
                  backgroundColor: "#2f3035",
                  borderBottom: "1px  #ff6666 solid",
                }}
              ></input>
              <br></br>
              <br></br>
              <br></br>
              <input type="submit" value="LOGIN" className="login-btn"></input>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
