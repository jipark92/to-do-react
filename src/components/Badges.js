import React from "react";
import Badge from "react-bootstrap/Badge";
import { propTypes } from "react-bootstrap/esm/Image";

function Badges({ label, color }) {
    return (
        <div>
            <Badge pill bg={color}>
                {label}
            </Badge>
        </div>
    );
}

Badges.propTypes = {
    label: propTypes.string,
    color: propTypes.string,
};

export default Badges;
