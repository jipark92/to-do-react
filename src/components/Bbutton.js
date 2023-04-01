import React from 'react'
import Button from 'react-bootstrap/Button';

function Bbutton({ label, action }) {
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" onClick={action}>{label}</Button>
        </div>
    )
}

export default Bbutton