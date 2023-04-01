import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Spinners from "./Spinners";
import Buttons from "./Buttons";
import Badges from "./Badges";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

function DataTable({ toDos, isLoading, clearToDos, deleteTodo, editToDo }) {
    //ui
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    //data
    const [id, setId] = useState();

    return !isLoading ? (
        <>
            <h1 style={header}>TO DO LIST</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th stlye={taskNumberStyle}>#</th>
                        <th style={toDosStyle}>To Do</th>
                        <th style={statusStyle}>Status</th>
                        <th style={editBtnStyle}>Edit</th>
                        <th style={deleteBtnStyle}>Delete</th>
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
                                    <Buttons
                                        size="sm"
                                        label="Edit"
                                        action={setIsEditModalOpen}
                                    />
                                </td>
                                <td style={deleteBtnStyle}>
                                    <Buttons
                                        size="sm"
                                        label="Delete"
                                        color="danger"
                                        action={() => {
                                            setIsDeleteModalOpen(true);
                                            setId(id);
                                        }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <EditModal
                showModal={isEditModalOpen}
                closeModal={setIsEditModalOpen}
                editToDo={() => editToDo(id)}
            />
            <DeleteModal
                showModal={isDeleteModalOpen}
                closeModal={setIsDeleteModalOpen}
                deleteToDo={() => deleteTodo(id)}
            />
            {toDos.length > 0 && (
                <Buttons label="CLEAR" color="danger" action={clearToDos} />
            )}
        </>
    ) : (
        <Spinners />
    );
}

const header = {
    textAlign: "center",
    margin: 25,
};

const taskNumberStyle = { width: "5%" };

const toDosStyle = { width: "75%" };

const statusStyle = { textAlign: "end", width: "10%" };

const editBtnStyle = { textAlign: "end", width: "5%" };

const deleteBtnStyle = { textAlign: "end", width: "10%" };

export default DataTable;
