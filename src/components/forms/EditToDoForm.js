import React from "react";
import Form from "react-bootstrap/Form";
import { propTypes } from "react-bootstrap/esm/Image";

function EditToDoForm(props) {
    const { updatedTodo, updatedStatus, setUpdatedStatus, setUpdatedTodo } =
        props;

    return (
        <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Write Your Edited To Do</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={updatedTodo}
                    onChange={(e) => setUpdatedTodo(e.target.value)}
                />
            </Form.Group>
            <Form.Check
                type="switch"
                id="custom-switch"
                label={updatedStatus ? "Complete" : "Incomplete"}
                onChange={() => setUpdatedStatus(!updatedStatus)}
                isInvalid={!updatedStatus}
                checked={updatedStatus}
            />
        </Form>
    );
}

EditToDoForm.propTypes = {
    updatedTodo: propTypes.string,
    updatedStatus: propTypes.bool,
    setUpdatedStatus: propTypes.func,
    setUpdatedTodo: propTypes.func,
};

export default EditToDoForm;
