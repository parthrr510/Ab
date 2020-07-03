import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Iframe from "react-iframe";
import Pdf from "../../landing page/Rule_Book_Final.pdf";
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
        <Iframe
                    src={Pdf}
                    className="rulebook"
                    frameborder="0"
                  ></Iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default TradeRulebook;
