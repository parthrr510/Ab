import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { MdNotificationsActive } from "react-icons/md";
import "./notification.css";
import { connect } from "react-redux";
import { getNotifications } from "../../redux/actions/NotificationsActions";
import PropTypes from "prop-types";

const Notifications = ({
  show,
  handleClose,
  notifications: { notification },
  getNotifications,
}) => {
  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "50px" }}>
        <Modal.Header closeButton id="Not">
          <Modal.Title id="Not_title">
            <MdNotificationsActive
              onClick={() => getNotifications()}
              style={{ cursor: "pointer" }}
            />{" "}
            Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="root">
            {notification &&
              notification.map((notify) => (
                <div>
                  <li className="item">
                    <p className="text">{notify.notification}</p>
                  </li>
                  <hr className="line" />
                </div>
              ))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};
Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  notifications: state.notifications,
});
export default connect(mapStateToProps, { getNotifications })(Notifications);
