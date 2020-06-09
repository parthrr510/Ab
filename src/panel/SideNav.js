import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import logo from "./msc_logo.png";
import team from "./team.PNG";
import "./style.css";

class SideNav extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={3} style={{ backgroundColor: "#484a4f" }} className="logo">
            <img
              src={logo}
              style={{
                height: "60px",
                left: "0",
                top: "0",
                marginLeft: "-120px",
              }}
            />
            <Media style={{ marginTop: "15px" }}>
              <img
                width={55}
                height={55}
                className="team"
                src={team}
                alt="Generic placeholder"
                style={{
                  borderRadius: "50%",
                  marginLeft: "28px",
                }}
              />
              <Media.Body style={{ marginLeft: "-100px", color: "#F8F8FF" }}>
                <h5>Team 1</h5>
                <p>Rank 1</p>
              </Media.Body>
            </Media>
            <Nav
              className=" d-md-block  sidebar"
              style={{ paddingTop: "35px" }}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/home" style={navStyle}>
                  <i className="fa fa-home mr-3" style={icon}></i>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={navStyle}>
                  <i className="fa fa-table mr-3" style={icon}></i>
                  Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" style={navStyle}>
                  <i className="fa fa-money mr-3" style={icon}></i>
                  MSC bits
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" style={navStyle}>
                  <i className="fa fa-cutlery mr-3" style={icon}></i>
                  Food Resources
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" style={navStyle}>
                  <i className="fa fa-window-maximize mr-3" style={icon}></i>
                  Example Dropdown
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ paddingBottom: "20px" }}>
                <Nav.Link eventKey="link-5" style={navStyle}>
                  <i className="fa fa-sign-out mr-3" style={icon}></i>
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ backgroundColor: "#2e3036" }}>
            Col 2
          </Col>
        </Row>
      </div>
    );
  }
}
const navStyle = {
  color: "#F8F8FF",
  padding: "22px",
};
const icon = {
  color: "#F8F8FF",
};
export default SideNav;
