import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { MdNotificationsActive } from "react-icons/md";
import Avatar from "@material-ui/core/Avatar";
import team from "../team.PNG";
import "./notification.css";

const Notifications = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "50px" }}>
        <Modal.Header closeButton id="Not">
          <Modal.Title id="Not_title">
            <MdNotificationsActive /> Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="root">
            <li className="item">
              <p className="text">Any Random Notification</p>
            </li>
            <hr className="line" />
            <li className="item">
              <p className="text">Any Random Notification</p>
            </li>
            <hr className="line" />
            <li className="item">
              <p className="text">Any Random Notification</p>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Notifications;
