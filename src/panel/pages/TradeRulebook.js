import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const TradeRulebook = ({ showBook, handleCloseBook }) => {
  return (
    <div>
      <Modal
        show={showBook}
        onHide={handleCloseBook}
        style={{ borderRadius: "50px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Trade Rulebook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default TradeRulebook;
