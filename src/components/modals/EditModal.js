import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditToDoForm from "../forms/EditToDoForm";
import PropTypes from "prop-types";

function EditModal({ showModal, closeModal, editValues, editToDo, id }) {
    const [updatedTodo, setUpdatedTodo] = useState(editValues.task);
    const [updatedStatus, setUpdatedStatus] = useState(editValues.status);
    console.log("ggag");
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

EditModal.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
    editValues: PropTypes.object,
    editToDo: PropTypes.func,
    id: PropTypes.string,
};

export default EditModal;
