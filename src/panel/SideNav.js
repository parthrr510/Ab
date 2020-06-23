import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import logo from "./msc_logo.png";
import notepad from "./note.png";
import mail from "./email.png";
import arrow from "./back-arrow.png";
import team from "./team.PNG";
import "./style.css";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import update from "./updates.png";
import trade from "./trade.png";
import { AiOutlineTable } from "react-icons/ai";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import Leaderboard from "./Components/Leaderboard.js";
// import logo from './logo.svg';
import Box from "./Components/Box/Box.js";
import Updates from "./Components/Updates.js";

class SideNav extends Component {
  state = {
    resource: "MSC BITS",
    done: "100",

    food: "FOOD RESOURCES",
    donef: "150",

    medicine: "MEDICINES",
    donem: "80",

    technology: "TECHNOLOGY",
    donet: "75",
  };
  //For change in value function call when extracting data
  change = (res, value) => {
    this.setState({
      resource: res,
      done: value,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="error">Please use our desktop site</div>
        </div>
        <div className="panel">
          <Row style={{ borderBottom: "1px #8A8D92 solid" }}>
            <Col sm={2} style={{ backgroundColor: "#2D3135" }} className="logo">
              <img src={logo} className="msc-logo" />
              <Link to="/logout" className="arrow">
                <img src={arrow} className="arrow" />
              </Link>
            </Col>
            <Col sm={10} style={{ backgroundColor: "#2D3135" }}>
              <Link to="/logout">
                <p className="head-icons">Logout</p>
              </Link>

              <Link to="/logout">
                <img src={notepad} className="head-icons" />
              </Link>

              <Link to="/logout">
                <img src={mail} className="head-icons" />
              </Link>
              <div className="title">ABHYUDAYA</div>
            </Col>
          </Row>
          <Row>
            <Col sm={2} className="side-nav">
              <Media style={{ marginTop: "3rem" }}>
                <img
                  width={55}
                  height={55}
                  className="team"
                  src={team}
                  alt="Generic placeholder"
                  style={{
                    borderRadius: "50%",
                    marginLeft: "12px",
                  }}
                />
                <Media.Body className="team">
                  <h5>Team 1</h5>
                  <p>Rank 1</p>
                </Media.Body>
              </Media>
              <Nav
                className=" d-md-block  sidebar"
                style={{ paddingTop: "2rem" }}
              >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                  <Nav.Link href="/" className="navStyle">
                    <RiHome2Line className="icon" />
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/leaderboard"
                    eventKey="link-1"
                    className="navStyle"
                  >
                    <AiOutlineTable className="icon" />
                    Leaderboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/updates"
                    eventKey="link-2"
                    className="navStyle"
                  >
                    <MdUpdate className="icon" />
                    Updates
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/trading"
                    eventKey="link-3"
                    className="navStyle"
                  >
                    <FaHandshake className="icon" />
                    Trading
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/traderulebook"
                    eventKey="link-4"
                    className="navStyle"
                  >
                    <FaWindowMaximize className="icon" />
                    Trade Rulebook
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/discord"
                    eventKey="link-5"
                    className="navStyle"
                    style={{ paddingBottom: "44px" }}
                  >
                    <FaDiscord className="icon" />
                    Discord
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10} className="dv">
              <Row className="dashboard">
                  Dashboard
              </Row>

              <Row className="box-row">
                <Col
                  style={{
                    marginLeft: "1rem"
                  }}
                >
                  <Box res={this.state.resource} val={this.state.done}></Box>
                </Col>
                <Col>
                  <Box res={this.state.food} val={this.state.donef}></Box>
                </Col>
                <Col>
                  <Box res={this.state.medicine} val={this.state.donem}></Box>
                </Col>
                <Col
                  style={{
                    paddingLeft: "0px",
                    marginRight: "2rem"
                  }}
                >
                  <Box res={this.state.technology} val={this.state.donet}></Box>
                </Col>
              </Row>
              <Row className="component">
                <Col
                  sm={8}
                  style={{ backgroundColor: "#23252a", paddingLeft: "0px" }}
                >
                  <Updates />
                </Col>
                <Col
                  sm={4}
                  style={{
                    backgroundColor: "#2D3135",
                    color: "white",
                    paddingTop: "1rem",
                    float: "left",
                  }}
                >
                  <Link to="/leaderboard" className="lead">
                    LEADERBOARD
                  </Link>
                  <Leaderboard />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SideNav;
