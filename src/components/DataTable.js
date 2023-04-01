import React from "react";
import Table from "react-bootstrap/Table";
import Spinners from "./Spinners";
import Buttons from "./Buttons";
import Badges from "./Badges";

function DataTable({ toDos, isLoading }) {
    return !isLoading ? (
        <div>
            <h1 style={header}>TO DO LIST</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th stlye={taskNumberStyle}>#</th>
                        <th style={toDosStyle}>To Do</th>
                        <th style={statusStyle}>Status</th>
                        <th style={editBtnStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toDos.map((toDo, index) => {
                        const { id, task, status } = toDo;
                        return (
                            <tr key={id}>
                                <td style={taskNumberStyle}>{index}</td>
                                <td style={toDosStyle}>{task}</td>
                                <td style={statusStyle}>
                                    {status ? (
                                        <Badges
                                            label="Complete"
                                            color="primary"
                                        />
                                    ) : (
                                        <Badges
                                            label="Incomplete"
                                            color="danger"
                                        />
                                    )}
                                </td>
                                <td style={editBtnStyle}>
                                    <Buttons size="sm" label="EDIT" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    ) : (
        <div style={spinners}>
            <Spinners />
        </div>
    );
}

const header = {
    textAlign: "center",
    margin: 25,
};

const spinners = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
};

const taskNumberStyle = { width: "5%" };

const toDosStyle = { width: "75%" };

const statusStyle = { textAlign: "end", width: "10%" };

const editBtnStyle = { textAlign: "end", width: "10%" };

export default DataTable;
