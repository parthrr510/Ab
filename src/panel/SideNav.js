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
import {RiHome2Line} from 'react-icons/ri';
import {FaDiscord} from 'react-icons/fa';
import {GrAnnounce} from 'react-icons/gr';
import update from "./updates.png";
import trade from "./trade.png";
import {AiOutlineTable} from 'react-icons/ai';
import {FaWindowMaximize} from 'react-icons/fa';
import {FaHandsHelping} from 'react-icons/fa';
import {MdUpdate} from 'react-icons/md';



class SideNav extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={3} style={{ backgroundColor: "#2D3135"}} className="logo">
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
              <Media.Body style={{ marginLeft: "-100px", color: "#8A8D92" }}>
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
                  <AiOutlineTable className="icon"/>
                  {/* <i className="fa fa-table mr-3" style={{marginRight:"50px"}}></i> */}
                  Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/updates" eventKey="link-2" className="navStyle">
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
                <Nav.Link href="/trading" eventKey="link-3" className="navStyle">
                <FaHandsHelping className="icon" />
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
              <Nav.Item style={{ paddingBottom: "20px" }}>
                <Nav.Link href="/discord" eventKey="link-5" className="navStyle">
                  {/* <i className="fa fa-discord mr-3" style={icon,{float:"left"}}></i> */}
                  <FaDiscord className="icon" />
                  Discord
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ backgroundColor: "#2D3135" }}>
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
