import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import {Link} from 'react-router-dom';
import logo from "../panel/msc_logo.png";
import "./login.css";
import bg from "./bg.jpg";



class Login extends Component {
    render() {
      return (
        <div>
            <Row style={{marginTop:"10px"}}>
                <Col sm={2}>
                <img
              src={logo}
              style={{
                height: "60px"
              }}
            />
                </Col>
                <Col sm={4}>
                <Nav
              style={{ }}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/" className="navStyle">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/"
                  eventKey="link-1"
                  className="navStyle"
                >
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
                </Col>

                <Col sm={6} style={{paddingRight:"10px"}}>
                <Nav
              style={{ float:"right"}}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/" className="navStyle">
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/"
                  eventKey="link-1"
                  className="navStyle"
                >
                  SignUp
                </Nav.Link>
              </Nav.Item>
            </Nav>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className="login-div">
                            <p style={{color:"#01c5c4",fontWeight:"700",fontSize:"50px"}}>LOGIN</p>
                            <br></br>
                                    
                                        TEAM-NAME
                                    <br></br>
                                    
                                        <input type="text"
                                         style={{
                                            backgroundColor:"#2f3035",
                                            borderBottom:"1px  #ff6666 solid"
                                            }}>
                                        </input>
                                    <br></br>
                                    <br></br>
                                        PASSWORD
                                        <br></br>
                                        
                                        <input type="password" 
                                        style={{
                                                backgroundColor:"#2f3035",
                                                borderBottom:"1px  #ff6666 solid"
                                            }}>
                                        </input>
                                   <br></br>
                                   <br></br>
                                   <br></br>
                                    
                                        <input type="submit" value="LOGIN" className="login-btn"></input>
                                    
                                
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
}


export default Login;