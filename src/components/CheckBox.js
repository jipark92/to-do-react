import React from "react";
import Form from "react-bootstrap/Form";
import { propTypes } from "react-bootstrap/esm/Image";

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

CheckBox.propTypes = {
    status: propTypes.bool,
    action: propTypes.func,
};

export default CheckBox;
