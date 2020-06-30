import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import "./update.css";

const Updates = () => {
  return (
    <div className="update">
      <Row>
        <div className="update-head">UPDATES</div>
      </Row>
      <Row >
        <Col sm={1}></Col>
        <Col sm={10} className="card">
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
          <Col sm={6} style={{paddingTop:"1rem", paddingBottom:"5rem"}}>
          <input type="text" id="input-box"></input>
          </Col>
          <Col sm={6} style={{paddingTop:"1rem"}}>
          <input type="submit" id="submit-btn"></input>
          </Col>
          
        </Row>
        </Col>
        <Col sm={1}></Col>

      </Row>
    </div>
  );
};
export default Updates;
