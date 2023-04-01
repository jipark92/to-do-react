import React, { useState, useEffect } from "react";
import AddToDoForm from "./components/forms/AddToDoForm";
import DataTable from "./components/DataTable";
import Buttons from "./components/Buttons";
import CheckBox from "./components/CheckBox";
import ErrorModal from "./components/modals/ErrorModal";
import { v4 as uuidv4 } from "uuid";

function App() {
    // data
    const [toDos, setToDos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    // ui
    const [form, setForm] = useState("");
    const [status, setStatus] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    const addTask = () => {
        if (!form) {
            setIsErrorModalOpen(true);
            return;
        }
        const id = uuidv4();
        setToDos([...toDos, { id: id, task: form, status: status }]);
        resetForm();
    };

    const resetForm = () => {
        setForm("");
        setStatus(false);
    };

    const clearToDos = () => {
        localStorage.clear();
        setToDos([]);
    };

    const deleteTodo = (id) => {
        setToDos(toDos.filter((todo) => todo.id !== id));
    };

    const editToDo = (id) => {
        return null;
    };

    console.log("todos===", toDos);

    return (
        <div className="App" style={padding}>
            <AddToDoForm form={form} action={setForm} />
            <CheckBox status={status} action={setStatus} />
            <Buttons label="ADD TODO" action={addTask} />
            <DataTable
                toDos={toDos}
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
