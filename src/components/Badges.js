import React from "react";
import Badge from "react-bootstrap/Badge";

function Badges({ label, color }) {
    return (
        <div>
            <Badge pill bg={color}>
                {label}
            </Badge>
        </div>
    );
}

export default Badges;
