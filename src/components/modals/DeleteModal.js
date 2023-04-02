import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { propTypes } from "react-bootstrap/esm/Image";

function DeleteModal({ showModal, closeModal, action, todoValue }) {
    return (
        <>
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>CONFIRM DELETE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ARE YOU SURE YOU WANT TO DELETE <b>{todoValue}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => closeModal(false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            action();
                            closeModal(false);
                        }}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

DeleteModal.propTypes = {
    showModal: propTypes.bool,
    closeModal: propTypes.func,
    action: propTypes.func,
    todoValue: propTypes.string,
};

export default DeleteModal;
