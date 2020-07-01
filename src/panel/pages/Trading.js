import React, { useEffect, useState } from "react";
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
import arrow from "../back-arrow.png";
import team from "../team.PNG";
import { BsChevronLeft } from "react-icons/bs";
import "./trading.css";
import Notifications from "../Components/Notifications";
import TradeRulebook from "../pages/TradeRulebook";
import { connect } from "react-redux";
import { updateResources } from "../../redux/actions";
import { leaderData } from "../../redux/actions";
import { tradingCountries } from "../../redux/actions";
import PropTypes from "prop-types";

const Trading = ({
  resource: { mscBits, food, technology, medicine },
  updateResources,
  team: { country, continent, flag, GDP },
  leaderData,
  trade,
  tradingCountries,
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
  const [body, setBody] = useState({
    to_team: null,
    mscBits: null,
    food: null,
    technology: null,
    medicine: null,
  });

  const [name, setName] = useState("");
  useEffect(() => {
    updateResources();
    leaderData();
    // tradingCountries();
  }, []);

  // const assign = (value, e) => {
  //   setName(value, e);
  //   console.log(value, e);
  // };
  const assign = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const assignCountry = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const [inputTrade, setInputTrade] = useState("");
  const onChangeHandler = (e) => {
    setInputTrade(e.target.value);
    console.log(e.target.value);
  };
  const getValue = () => {
    setBody({ ...body, [name]: inputTrade });
    setInputTrade(" ");
  };
  useEffect(() => {
    tradingCountries(body);
  }, [body]);

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
            <Link to="/panel" className="arrow">
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
          <Col sm={10} className="dv">
            <Row className="dashboard2">Dashboard</Row>

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

            <Row>
              <Col sm={12} className="component2  ">
                <div className="trading">
                  <Row>
                    {" "}
                    <Col sm={6}>
                      <h4 className="trade-head">TRADING</h4>
                    </Col>
                    <Col sm={2}>
                      <select
                        name="resources"
                        id="resources"
                        label="Select Resources"
                        value={name}
                        onChange={assign}
                      >
                        <option value="">Resources</option>
                        <option value="mscBits">MSC Bits</option>
                        <option value="food">Food Resources</option>
                        <option value="medicine">Medicine</option>
                        <option value="technology">Technology</option>
                      </select>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                      <select
                        name="countries"
                        id="countries"
                        label="Country"
                        value={name}
                        onChange={assignCountry}
                      >
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="LAX">LAX</option>
                        <option value="UAE">UAE</option>
                        <option value="Nepal">Nepal</option>
                      </select>
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
                      <input
                        type="number"
                        className="input"
                        name={name}
                        value={inputTrade}
                        onChange={onChangeHandler}
                      ></input>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}></Col>
                    <Col sm={2}>
                      {" "}
                      <Button className="submit" onClick={getValue}>
                        Submit
                      </Button>
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

Trading.propTypes = {
  resource: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  resource: state.resource,
  team: state.team,
  trade: state.trade,
});
export default connect(mapStateToProps, {
  updateResources,
  leaderData,
  tradingCountries,
})(Trading);
