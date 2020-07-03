import React, { useState, useEffect } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Media from "react-bootstrap/Media";
import logo from "./msc_logo.png";
import notepad from "./note.png";
import arrow from "./back-arrow.png";
import team from "./team.PNG";
import "./style.css";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineTable } from "react-icons/ai";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import Leaderboard from "./Components/Leaderboard.js";
import PropTypes from "prop-types";
import TradeRulebook from "./pages/TradeRulebook";
import Box from "./Components/Box/Box.js";
import Updates from "./Components/Updates.js";
import Notifications from "./Components/Notifications";
import { updateResources } from "../redux/actions";
import { leaderData } from "../redux/actions";

const SideNav = ({
  resource: { mscBits, food, technology, medicine },
  updateResources,
  team: { country, continent, flag, GDP },
  leaderData,
}) => {
  const [nameBits, setBits] = useState({ resources: "MSC BITS" });
  const [nameFood, setFood] = useState({
    resources: "FOOD RESOURCES",
  });
  const [nameMedicine, setMedicine] = useState({
    resources: "MEDICINES",
  });
  const [nameTechnology, setTech] = useState({
    resources: "TECHNOLOGY",
  });
  useEffect(() => {
    updateResources();
    leaderData();
  }, []);
  //for notifications
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for trade rulebook
  const [showBook, setShowBook] = useState(false);

  const handleCloseBook = () => setShowBook(false);
  const handleShowBook = () => setShowBook(true);
  //For change in value function call when extracting data

  //   setBits([{ resource: "res", done: "value" }]);
  //   setFood([{ resource: "res", done: "value" }]);
  //   setMedicine([{ resource: "res", done: "value" }]);
  //   setTech([{ resource: "res", done: "value" }]);
  // };

  return (
    <div>
      <div className="container">
        <div className="error">Please use our desktop site</div>
      </div>
      <div className="panel">
        <Row style={{ borderBottom: "1px #8A8D92 solid" }}>
          <Col sm={2} style={{ backgroundColor: "#2D3135" }} className="logo">
            <img src={logo} className="msc-logo" alt="" />
            <Link to="/panel" className="arrow">
              <img src={arrow} className="arrow" alt="Back" />
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
          <Col sm={2} className="side-nav">
            <Media style={{ marginTop: "3rem" }}>
              <img
                width={55}
                height={55}
                className="team"
                src={flag}
                alt="Generic placeholder"
                style={{
                  borderRadius: "50%",
                  marginLeft: "12px",
                }}
              />
              <Media.Body className="team">
                <h5>{country}</h5>
                <p>{continent}</p>
              </Media.Body>
            </Media>
            <Nav
              className=" d-md-block  sidebar"
              style={{ paddingTop: "2rem" }}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/panel" eventKey="link-1" className="navStyle">
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
                  href="https://discord.gg/zTpEPW8"
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
            <Row className="dashboard">Dashboard</Row>

            <Row className="box-row">
              <Col
                style={{
                  marginLeft: "1rem",
                }}
              >
                <Box res={nameBits.resources} val={mscBits}></Box>
              </Col>
              <Col>
                <Box res={nameFood.resources} val={food}></Box>
              </Col>
              <Col>
                <Box res={nameMedicine.resources} val={medicine}></Box>
              </Col>
              <Col
                style={{
                  paddingLeft: "0px",
                  marginRight: "2rem",
                }}
              >
                <Box res={nameTechnology.resources} val={technology}></Box>
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
};
SideNav.propTypes = {
  resource: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  resource: state.resource,
  team: state.team,
});

export default connect(mapStateToProps, { updateResources, leaderData })(
  SideNav
);
