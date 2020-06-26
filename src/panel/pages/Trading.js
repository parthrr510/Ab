import React, { Component, useState } from "react";
// import React, { useState } from "react";
import { Row, Col, Nav, Dropdown } from "react-bootstrap";
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
import "./trading.css";
import Notifications from "../Components/Notifications";

const Trading = () => {
  const [bits, setBits] = useState({ resource: "MSC BITS", done: "100" });
  const [food, setFood] = useState({
    resource: "FOOD RESOURCES",
    donef: "150",
  });
  const [medicine, setMedicine] = useState({
    resource: "MEDICINES",
    donem: "80",
  });
  const [technology, setTech] = useState({
    resource: "TECHNOLOGY",
    donet: "75",
  });
  //For change in value function call when extracting data

  //   setBits([{ resource: "res", done: "value" }]);
  //   setFood([{ resource: "res", done: "value" }]);
  //   setMedicine([{ resource: "res", done: "value" }]);
  //   setTech([{ resource: "res", done: "value" }]);
  // };

  
  //for notifications
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for trade rulebook
  const [showBook, setShowBook] = useState(false);

  const handleCloseBook = () => setShowBook(false);
  const handleShowBook = () => setShowBook(true);


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

            <img
              src={notepad}
              className="head-icons"
              onClick={handleShow}
              alt="Notepad"
            />

            <Notifications
              show={show}
              setShow={setShow}
              handleClose={handleClose}
            />

            <Link to="/logout">
              <img src={mail} className="head-icons" />
            </Link>
            <div className="title">ABHYUDAYA</div>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="side-nav2">
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
            <Row className="dashboard2">Dashboard</Row>

            <Row className="box-row">
              <Col
                style={{
                  marginLeft: "1rem",
                }}
              >
                <Box res={bits.resource} val={bits.done}></Box>
              </Col>
              <Col>
                <Box res={food.resource} val={food.donef}></Box>
              </Col>
              <Col>
                <Box res={medicine.resource} val={medicine.donem}></Box>
              </Col>
              <Col
                style={{
                  paddingLeft: "0px",
                  marginRight: "2rem",
                }}
              >
                <Box res={technology.resource} val={technology.donet}></Box>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="component2  ">
                <div className="trading">
                  <Row>
                    {" "}
                    <Col sm={6}>
                      <h4 className="trade-head">TRADING</h4>
                    </Col>
                    <Col sm={2}>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="btn1"
                          variant="secondary"
                        >
                          Select Resource
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item value="MSC Bits">
                            MSC Bits
                          </Dropdown.Item>
                          <Dropdown.Item value="Technology">
                            Technology
                          </Dropdown.Item>
                          <Dropdown.Item value="Medicine">
                            Medicine
                          </Dropdown.Item>
                          <Dropdown.Item value="Food Resources">
                            Food Resources
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="btn1"
                          variant="secondary"
                        >
                          Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item value="India">India</Dropdown.Item>
                          <Dropdown.Item value="LAX">LAX</Dropdown.Item>
                          <Dropdown.Item value="UAE">UAE</Dropdown.Item>
                          <Dropdown.Item value="Nepal">Nepal</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row>
                    <Col sm={12} className="trade">
                      Enter the amount you wish to transfer:
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <input type="number" className="input"></input>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}></Col>
                    <Col sm={2}>
                      {" "}
                      <Button className="submit">Submit</Button>
                    </Col>
                    <Col sm={5}></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
// const trading = {
//   backgroundColor: "#2d3135",
//   width: "66rem",

//   textAlign: "left",
//   margin: "0rem 2rem 2rem 2rem",
//   border: "1px black solid",
//   fontFamily: "sans-serif",
//   color: "white",
//   lineHeight: "200%",
//   paddingLeft: "1rem",
// };
// const btn = {
//   marginTop: "15px",
//   border: "1px solid white",
//   color: "#fff",
//   paddingLeft: "1.5rem ",
//   paddingTop: "0.5rem",
//   paddingRight: "1.5rem",
//   paddingBottom: "0.5rem",
//   zIndex: "20",
//   backgroundColor: "#2D3135"
// };
// const trade = {
//   textAlign: "center",
//   marginTop: "3rem",
//   fontWeight: "600",
//   fontSize: "26px",
//   color: "#EB4182",
//   wordSpacing: "0.7rem",
// };
// const input = {
//   background: "transparent",
//   border: "1.5px solid #fff",
//   width: "18rem",
//   marginTop: "2rem",
//   marginLeft: "23rem",
// };
// const submit = {
//   backgroundColor: "#A88CCD",
//   marginTop: "1.5rem",
//   width: "9rem",
//   marginBottom: "1rem",
// };
export default Trading;
