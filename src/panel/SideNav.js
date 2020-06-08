import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
                height: "50px",
                left: "0",
                top: "0",
                marginLeft: "-140px",
              }}
            />
            <Media style={{ marginTop: "6px" }}>
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
          </Col>
          <Col sm={9} style={{ backgroundColor: "#2e3036" }}>
            Col 2
          </Col>
        </Row>
      </div>
    );
  }
}
export default SideNav;
