import React from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

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
    label: PropTypes.string,
    color: PropTypes.string,
};

export default Badges;
