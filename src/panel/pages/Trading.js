import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Media from "react-bootstrap/Media";
import Box from "../Components/Box/Box";
import { AiOutlineTable } from "react-icons/ai";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import logo from "../msc_logo.png";
import notepad from "../note.png";
import mail from "../email.png";
import arrow from "../back-arrow.png";
import team from "../team.PNG";
import { BsChevronLeft } from "react-icons/bs";

class Trading extends Component {
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
            <img
              src={arrow}
              style={{
                height: "27px",
                float: "right",
                marginRight: "5px",
                marginTop: "12px",
              }}
            />
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

            <img
              src={notepad}
              style={{
                height: "25px",
                float: "right",
                marginRight: "20px",
                marginTop: "10px",
              }}
            />

            <img
              src={mail}
              style={{
                height: "25px",
                float: "right",
                marginRight: "20px",
                marginTop: "10px",
              }}
            />
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
                  style={{ paddingBottom: "3.5rem" }}
                >
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
            <Row
              style={{ backgroundColor: "dark-grey", paddingBottom: "1rem" }}
            >
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

            <Row>
              <Col sm={12}>
                <div style={trading}>
                  <Row>
                    {" "}
                    <Col sm={6}>
                      <h4 style={{ marginTop: "15px" }}>TRADING</h4>
                    </Col>
                    <Col sm={2}>
                      <Button variant="secondary" block style={btn}>
                        Resources <BsChevronLeft />
                      </Button>{" "}
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                      <Button style={btn} block>
                        Country <BsChevronLeft />
                      </Button>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row>
                    <Col sm={12} style={trade}>
                      Enter the amount you wish to transfer:
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <input type="number" style={input}></input>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}></Col>
                    <Col sm={2}>
                      {" "}
                      <Button style={submit}>Submit</Button>
                    </Col>
                    <Col sm={5}></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const trading = {
  backgroundColor: "#2d3135",
  width: "66rem",

  textAlign: "left",
  margin: "0rem 2rem 2rem 2rem",
  border: "1px black solid",
  fontFamily: "sans-serif",
  color: "white",
  lineHeight: "200%",
  paddingLeft: "1rem",
};
const btn = {
  marginTop: "15px",
  border: "1px solid white",
  color: "#fff",
  paddingLeft: "1.5rem ",
  paddingTop: "0.5rem",
  paddingRight: "1.5rem",
  paddingBottom: "0.5rem",
  zIndex: "5",
};
const trade = {
  textAlign: "center",
  marginTop: "3rem",
  fontWeight: "600",
  fontSize: "26px",
  color: "#EB4182",
  wordSpacing: "0.7rem",
};
const input = {
  background: "transparent",
  border: "1.5px solid #fff",
  width: "18rem",
  marginTop: "2rem",
  marginLeft: "23rem",
};
const submit = {
  backgroundColor: "#A88CCD",
  marginTop: "1.5rem",
  width: "9rem",
  marginBottom: "1rem",
};
export default Trading;
