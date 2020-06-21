import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import Paper from "@material-ui/core/Paper";
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

export default function Trading() {
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
          <Nav className=" d-md-block  sidebar" style={{ paddingTop: "2rem" }}>
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
              <Nav.Link href="/updates" eventKey="link-2" className="navStyle">
                <MdUpdate className="icon" />
                Updates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/trading" eventKey="link-3" className="navStyle">
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
        <Col sm={10}>col2</Col>
      </Row>
    </div>
  );
}
