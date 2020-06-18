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
    done: "70",

    food: "FOOD RESOURCES",
    donef: "50",

    medicine: "MEDICINES",
    donem: "20",

    technology: "TECHNOLOGY",
    donet: "90",
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
        <Row style={{ borderBottom: "1px #8A8D92 solid" }}>
          <Col sm={2} style={{ backgroundColor: "#2D3135" }} className="logo">
            <img
              src={logo}
              style={{
                height: "60px",
                left: "0",
                top: "0",
                marginLeft: "-1rem",
              }}
            />
            <Link to="/logout">
              <img
                src={arrow}
                style={{
                  height: "27px",
                  float: "right",
                  marginRight: "5px",
                  marginTop: "12px",
                }}
              />
            </Link>
          </Col>
          <Col sm={10} style={{ backgroundColor: "#2D3135" }}>
            <Link to="/logout">
              <p
                style={{
                  float: "right",
                  color: "darkgrey",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
              >
                Logout
              </p>
            </Link>

            <Link to="/logout">
              <img
                src={notepad}
                style={{
                  height: "25px",
                  float: "right",
                  marginRight: "20px",
                  marginTop: "10px",
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
                  marginTop: "10px",
                }}
              />
            </Link>
            <div className="title">ABHYUDAYA</div>
          </Col>
        </Row>
        <Row>
          <Col
            sm={2}
            style={{
              backgroundColor: "#2D3135",
              borderRight: "1px #8A8D92 solid",
            }}
          >
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
              <Media.Body style={{ marginLeft: "-3rem", color: "#8A8D92" }}>
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
                  {/* <i className="fa fa-home mr-3" style={icon,{float:"left"}}></i> */}
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
                  {/* <i className="fa fa-table mr-3" style={{marginRight:"50px"}}></i> */}
                  Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/updates"
                  eventKey="link-2"
                  className="navStyle"
                >
                  {/* <i className="fa fa-money mr-3" style={icon,{float:"left"}}></i> */}
                  <MdUpdate className="icon" />
                  {/* <img
              src={update}
              style={{
                height: "27px",
                width:"30px",
                marginRight:"70px",
                borderRight:"1px #8A8D92 solid",
                paddingRight:"10px"
              }}
            /> */}
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
                  {/* <i className="fa fa-cutlery mr-3" aria-hidden="true" style={icon,{float:"left"}}></i> */}
                  {/* <img
              src={trade}
              style={{
                height: "30px",
                width:"30px",
                marginRight:"70px",
                borderRight:"1px #8A8D92 solid",
                paddingRight:"10px"
              }}
            /> */}
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
                  {/* <i className="fa fa-window-maximize mr-3" style={icon,{marginRight:"50px"}}></i> */}
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
                  {/* <i className="fa fa-discord mr-3" style={icon,{float:"left"}}></i> */}
                  <FaDiscord className="icon" />
                  Discord
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Row>
              <Col
                sm={12}
                style={{
                  backgroundColor: "#2D3135",
                  color: "#8A8D92",
                  height: "3rem",
                  fontSize: "20px",
                  textAlign: "left",
                  paddingTop: "5px",
                }}
              >
                Dashboard
              </Col>
            </Row>

            <Row style={{ backgroundColor: "#23252a", paddingBottom: "1rem" }}>
              <Col
                style={{
                  paddingLeft: "0px",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Box res={this.state.resource} val={this.state.done}></Box>
              </Col>
              <Col style={{ paddingLeft: "0px", marginTop: "1rem" }}>
                <Box res={this.state.food} val={this.state.donef}></Box>
              </Col>
              <Col style={{ paddingLeft: "0px", marginTop: "1rem" }}>
                <Box res={this.state.medicine} val={this.state.donem}></Box>
              </Col>
              <Col
                style={{
                  paddingLeft: "0px",
                  marginRight: "2rem",
                  marginTop: "1rem",
                }}
              >
                <Box res={this.state.technology} val={this.state.donet}></Box>
              </Col>
            </Row>
            <Row style={{ height: "30.5rem" }}>
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
                LEADERBOARD
                <Leaderboard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
// const navStyle = {
//   color: "#8A8D92",
//   padding: "22px",
//   textAlign:"left"
// };

// const icon = {
//   marginRight:"70px",
//   borderRight:"1px #8A8D92 solid",
//   paddingRight:"10px",
//   fontSize:"30px"
// }

export default SideNav;
