import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function Buttons({ label, action, size, color }) {
    return (
        <div className="d-grid gap-2">
            <Button variant={color} onClick={action} size={size}>
                {label}
            </Button>
        </div>
    );
}

Buttons.propTypes = {
    label: PropTypes.string,
    action: PropTypes.func,
    size: PropTypes.string,
    color: PropTypes.string,
};

export default Buttons;
