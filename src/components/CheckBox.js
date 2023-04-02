import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

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
    status: PropTypes.bool,
    action: PropTypes.func,
};

export default CheckBox;
