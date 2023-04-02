import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Spinners from "../Spinners";
import Buttons from "../Buttons";
import Badges from "../Badges";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { propTypes } from "react-bootstrap/esm/Image";

function DataTable({ toDos, isLoading, clearToDos, deleteTodo, editToDo }) {
    //ui
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
        useState(false);
    //data
    const [id, setId] = useState();
    const [editValues, setEditValues] = useState();

    return !isLoading ? (
        <>
            <h1 style={header}>TO DO LIST</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th style={taskNumberStyle}>#</th>
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
                                        action={() => {
                                            setIsEditModalOpen(true);
                                            setEditValues(toDo);
                                            setId(id);
                                        }}
                                    />
                                </td>
                                <td style={deleteBtnStyle}>
                                    <Buttons
                                        size="sm"
                                        label="Delete"
                                        color="danger"
                                        action={() => {
                                            setIsDeleteModalOpen(true);
                                            setEditValues(toDo);
                                            setId(id);
                                        }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {isEditModalOpen && (
                <EditModal
                    showModal={isEditModalOpen}
                    closeModal={setIsEditModalOpen}
                    editValues={editValues}
                    editToDo={editToDo}
                    id={id}
                />
            )}
            {isDeleteModalOpen && (
                <DeleteModal
                    showModal={isDeleteModalOpen}
                    closeModal={setIsDeleteModalOpen}
                    action={() => deleteTodo(id)}
                    todoValue={editValues.task}
                />
            )}
            {toDos.length > 0 && (
                <>
                    <Buttons
                        label="CLEAR"
                        color="danger"
                        action={() => setIsConfirmDeleteModalOpen(true)}
                    />
                    <DeleteModal
                        showModal={isConfirmDeleteModalOpen}
                        closeModal={setIsConfirmDeleteModalOpen}
                        action={clearToDos}
                        todoValue="ALL"
                    />
                </>
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

DataTable.propTypes = {
    toDos: propTypes.array,
    isLoading: propTypes.bool,
    clearToDos: propTypes.func,
    deleteTodo: propTypes.func,
    editToDo: propTypes.func,
};

export default DataTable;
