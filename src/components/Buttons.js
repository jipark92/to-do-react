import React from "react";
import Button from "react-bootstrap/Button";

function Buttons({ label, action, size, color }) {
    return (
        <div className="d-grid gap-2">
            <Button variant={color} onClick={action} size={size}>
                {label}
            </Button>
        </div>
    );
}

export default Buttons;
