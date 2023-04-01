import React from "react";
import Form from "react-bootstrap/Form";

function AddToDoForm({ form, action }) {
    return (
        <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Write Your To Do Below:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => action(e.target.value)}
                    value={form}
                />
            </Form.Group>
        </Form>
    );
}

export default AddToDoForm;
