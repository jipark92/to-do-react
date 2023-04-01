import React from 'react';
import Table from 'react-bootstrap/Table';

function Btables({ toDos }) {
    return (
        <div>
            <h1 style={header}>TO DO LIST</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>TO DO</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {toDos.map((toDo) => {
                        const { id, task, status } = toDo;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{task}</td>
                                <td>{status ? 'Complete' : 'Incomplete'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

const header = {
    textAlign: 'center',
};

export default Btables;
