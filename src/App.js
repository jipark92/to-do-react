import React, { useState, useEffect } from "react";
import AddToDoForm from "./components/forms/AddToDoForm";
import DataTable from "./components/table/DataTable";
import Buttons from "./components/Buttons";
import CheckBox from "./components/CheckBox";
import ErrorModal from "./components/modals/ErrorModal";
import { v4 as uuidv4 } from "uuid";
import useFetch from "./hooks/useFetch";

function App() {
    //hooks
    const { isLoading, todoData, setToDoData } = useFetch();
    // ui
    const [form, setForm] = useState("");
    const [status, setStatus] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoData));
    }, [todoData]);

    const addToDos = () => {
        if (!form) {
            setIsErrorModalOpen(true);
            return;
        }
        const id = uuidv4();
        setToDoData([...todoData, { id: id, task: form, status: status }]);
        resetForm();
    };

    const resetForm = () => {
        setForm("");
        setStatus(false);
    };

    const clearToDos = () => {
        localStorage.clear();
        setToDoData([]);
    };

    const deleteTodo = (id) => {
        setToDoData(todoData.filter((todo) => todo.id !== id));
    };

    const editToDo = (id, updatedTodo, updatedStatus) => {
        const newState = todoData.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTodo, status: updatedStatus };
            }
            return todo;
        });
        setToDoData(newState);
    };
    console.log("data");
    return (
        <div className="App" style={padding}>
            <AddToDoForm form={form} action={setForm} />
            <CheckBox status={status} action={setStatus} />
            <Buttons label="ADD TODO" action={addToDos} />
            <DataTable
                toDos={todoData}
                isLoading={isLoading}
                clearToDos={clearToDos}
                deleteTodo={deleteTodo}
                editToDo={editToDo}
            />
            <ErrorModal
                showModal={isErrorModalOpen}
                closeModal={setIsErrorModalOpen}
            />
        </div>
    );
}

const padding = {
    padding: 100,
};

export default App;
