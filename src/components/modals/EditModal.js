import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditToDoForm from "../forms/EditToDoForm";

function EditModal({ showModal, closeModal, editValues, editToDo, id }) {
    const [updatedTodo, setUpdatedTodo] = useState(editValues.task);
    const [updatedStatus, setUpdatedStatus] = useState(editValues.status);

    return (
        <>
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditToDoForm
                        updatedTodo={updatedTodo}
                        setUpdatedTodo={setUpdatedTodo}
                        updatedStatus={updatedStatus}
                        setUpdatedStatus={setUpdatedStatus}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => closeModal(false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            closeModal(false);
                            editToDo(id, updatedTodo, updatedStatus);
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;
