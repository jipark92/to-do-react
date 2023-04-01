import React from "react";
import Modal from "react-bootstrap/Modal";

function Modals({ show, onHide }) {
    return (
        <Modal
            size="sm"
            show={show}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="example-modal-sizes-title-sm"
                    style={modalTitle}
                >
                    Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>Please Write Something</Modal.Body>
        </Modal>
    );
}

const modalTitle = {
    color: "#ff0000",
};

export default Modals;
