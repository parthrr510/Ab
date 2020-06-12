import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import logo from "./msc_logo.png";
import notepad from "./note.png";
import mail from "./email.png";
import arrow from "./back-arrow.png";
import team from "./team.PNG";
import "./style.css";
import {Link} from 'react-router-dom';

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
            <Link to="/logout">     
            <img
              src={arrow}
              style={{
                height: "35px",
                float: "right",
                marginRight: "40px",
                marginTop: "10px"
              }}
            />
          </Link>
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
                <Nav.Link href="/" style={navStyle}>
                  <i className="fa fa-home mr-3" style={icon}></i>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/leaderboard"
                  eventKey="link-1"
                  style={navStyle}
                >
                  <i className="fa fa-table mr-3" style={icon}></i>
                  Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/mscbits" eventKey="link-2" style={navStyle}>
                  <i className="fa fa-money mr-3" style={icon}></i>
                  MSC bits
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/food" eventKey="link-3" style={navStyle}>
                  <i className="fa fa-cutlery mr-3" style={icon}></i>
                  Food Resources
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/dropdown" eventKey="link-4" style={navStyle}>
                  <i className="fa fa-window-maximize mr-3" style={icon}></i>
                  Example Dropdown
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ paddingBottom: "20px" }}>
                <Nav.Link href="/login" eventKey="link-5" style={navStyle}>
                  <i className="fa fa-sign-out mr-3" style={icon}></i>
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ backgroundColor: "#484a4f" }}>
            <Link to="/logout">
                <p style={{ 
                float: "right", 
                color: "darkgrey", 
                marginRight: "20px",  
                marginTop: "10px"
                }}>Logout</p>
            </Link>
          
          <Link to="/logout">     
            <img
              src={notepad}
              style={{
                height: "25px",
                float: "right", 
                marginRight: "20px",  
                marginTop: "10px"
              }}
            />
          </Link>

          <Link to="/logout">     
            <img
              src={mail}
              style={{
                height: "25px",
                float: "right",
                marginRight: "20px",  
                marginTop: "10px"
              }}
            />
          </Link>
          <div className="title">ABHYUDAYA</div>
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
