import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Spinners() {
    return (
        <div style={spinners}>
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

const spinners = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
};

export default Spinners;
