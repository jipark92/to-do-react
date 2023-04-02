import React from "react";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";

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
    label: propTypes.string,
    action: propTypes.func,
    size: propTypes.string,
    color: propTypes.string,
};

export default Buttons;
