import React, { useEffect, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { AiOutlineTable } from "react-icons/ai";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import logo from "../msc_logo.png";
import notepad from "../note.png";
import arrow from "../back-arrow.png";
import Notifications from "../Components/Notifications";
import TradeRulebook from "../pages/TradeRulebook";
import "./update.css";
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import ReactScrollbar from 'react-scrollbar-js';
import team from "../team.PNG";

// import ScrollArea from 'react-scrollbar';

const Updates = ({}) => {
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
            <img src={logo} className="msc-logo" alt="MSC_Logo" />
            <Link to="/panel" className="arrow">
              <img src={arrow} className="arrow" alt="back" />
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

            <div className="title">ABHYUDAYA</div>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="side-nav4">
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
                  eventKey="link-4"
                  className="navStyle"
                  onClick={handleShowBook}
                >
                  <FaWindowMaximize className="icon" />
                  Trade Rulebook
                </Nav.Link>
                <TradeRulebook
                  showBook={showBook}
                  setShowBook={setShowBook}
                  handleCloseBook={handleCloseBook}
                />
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
          <Col sm={10}>
            <Row>
              <Col sm={12} className="dashboard4">
                UPDATES
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="component4">
                <div>
                  <Row>
                    <Col sm={12} className="card content-section">
                      {/* <ReactScrollbar> */}
                      {/* <ScrollArea
        
        speed={0.8}
            // className="area"
            contentClassName="content"
            horizontal={false}
        > */}
                      <Row>
                        <div id="updates">UPDATE</div>
                      </Row>
                      <Row>
                        <div id="question">QUESTION</div>
                      </Row>
                      <Row>
                        <div id="image">Upload IMAGE Here</div>
                      </Row>
                      <Row>
                        <div id="pdf">Upload PDF here</div>
                      </Row>
                      <Row>
                        <Col
                          sm={6}
                          style={{ paddingTop: "1rem", paddingBottom: "5rem" }}
                        >
                          <input type="text" id="input-box"></input>
                        </Col>
                        <Col sm={6} style={{ paddingTop: "1rem" }}>
                          <input type="submit" id="submit-btn"></input>
                        </Col>
                      </Row>
                      {/* </ScrollArea> */}
                      {/* </ReactScrollbar> */}
                    </Col>
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
export default Updates;
