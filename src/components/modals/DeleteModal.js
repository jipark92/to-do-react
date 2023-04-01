import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ showModal, closeModal, deleteToDo }) {
    return (
        <>
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>CONFIRM DELETE</Modal.Title>
                </Modal.Header>
                <Modal.Body>ARE YOU SURE YOU WANT TO DELETE?</Modal.Body>
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
                            deleteToDo();
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

export default DeleteModal;
