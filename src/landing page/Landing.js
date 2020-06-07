import React, { useState, useEffect } from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "./msc_logo.png";
import Animation from "./Animation.js";
import scroll from "./scroll.png";

export default function Landing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="landing">
      <div className="image">
        <div className="logo" position="relative">
          <img
            src={logo}
            style={{
              height: "70px",
            }}
          />
        </div>
        <Animation />
        <div className="title">CRISIS AHEAD</div>
        <div
          className="square"
          style={{ marginLeft: "630px", marginTop: "40px" }}
        >
          <span></span>
          <span></span>
          <span></span>
          <button className="btn">Get Started</button>
        </div>
        <br />
        <br />

        <img
          src={scroll}
          onClick={handleShow}
          style={{
            color: "#000",
            height: "80px",
            marginLeft: "40px",
            marginTop: "120px",
            zIndex: "-1",
          }}
        />
        <Modal show={show} onHide={handleClose} className="rulebook">
          <Modal.Header closeButton>
            <Modal.Title>RuleBook</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              XYZ
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
