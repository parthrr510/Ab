import React, { useState } from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "./msc_logo.png";
import Animation from "./Animation.js";
import scroll from "./scroll.png";
import fb_logo from "./fb_logo_final.png";
import insta_logo from "./insta_logo.png";
import github_logo from "./github_logo_2.png";
import { connect } from "react-redux";
import { complicatedStuff } from "../redux/actions";

const Landing = ({ Auth: { user }, complicatedStuff }) => {
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
        <Animation />
      </nav>

      <section className="masthead">
        <div className="d-flex align-item-end">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <div id="container">
                <div>
                  <div className="jackpots">CRISIS AHEAD </div>
                </div>
              </div>
              <div className="btn-block">
                <Button
                  variant="outline-light"
                  id="button_get"
                  onClick={() => complicatedStuff()}
                >
                  Get Started
                </Button>
              </div>
              <img
                id="scroll_icon"
                src={scroll}
                onClick={handleShow}
                alt="Scroll Icon"
              />
              <Modal show={show} onHide={handleClose} className="rulebook">
                <Modal.Header closeButton>
                  <Modal.Title>RuleBook</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
        </div>
      </section>
      <div className="d-flex align-item-end" id="cnt">
        <div className="dropup">
          <div className="dropbtn d-flex justify-content-start">Contact Us</div>
          <div className="dropup-content">
            <a href="https://instagram.com/msc_tiet?igshid=16huv4u0jf3ld">
              <img
                src={insta_logo}
                alt="Instagram"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
            <a href="https://www.facebook.com/msctiet/">
              <img
                src={fb_logo}
                alt="Facebook"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
            <a href="https://github.com/MicrosoftStudentChapter">
              {" "}
              <img
                src={github_logo}
                alt="GitHub"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  Auth: state.Auth,
});
export default connect(mapStateToProps, { complicatedStuff })(Landing);
