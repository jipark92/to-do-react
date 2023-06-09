import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

function Modals({ showModal, closeModal }) {
    return (
        <Modal
            size="sm"
            show={showModal}
            onHide={closeModal}
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

Modals.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
};

export default Modals;
