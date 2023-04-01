import React from "react";
import Form from "react-bootstrap/Form";

function CheckBox({ status, action }) {
    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label={status ? "Complete" : "Incomplete"}
                onChange={() => action(!status)}
                isInvalid={!status}
                checked={status}
            />
        </Form>
    );
}

export default CheckBox;
