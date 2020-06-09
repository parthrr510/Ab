import React, { useState, useEffect } from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "./msc_logo.png";
import Animation from "./Animation.js";

export default function Landing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top py-3">
        <a href="#" className="navbar-brand text-uppercase font-weight-bold">
          <img
            className="format_logo"
            id="msc_margin"
            src={logo}
            alt="MSC_tiet"
          />
        </a>
      </nav>

      <section className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <div id="container">
              <div>
                <div className="jackpots ">CRISIS AHEAD </div>
              </div>
            </div>
            <div className="btn-block">
              <Button variant="outline-light" id="button_get">
                Get Started
              </Button>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
