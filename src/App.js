import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputBox from "./components/InputBox";
import DataTable from "./components/DataTable";
import Buttons from "./components/Buttons";
import CheckBox from "./components/CheckBox";

import { v4 as uuidv4 } from "uuid";
import Modals from "./components/Modal";

function App() {
    // data
    const [toDos, setToDos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    // ui
    const [form, setForm] = useState("");
    const [status, setStatus] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    //loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);

    //set localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    const addTask = () => {
        if (!form) {
            setModalShow(true);
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

    console.log("todos===", toDos);

    return (
        <div className="App" style={padding}>
            <InputBox form={form} action={setForm} />
            <CheckBox status={status} action={setStatus} />
            <Buttons label="ADD TODO" action={addTask} />
            <DataTable toDos={toDos} isLoading={isLoading} />
            <Modals show={modalShow} onHide={setModalShow} />
        </div>
    );
}

const padding = {
    padding: 100,
};

export default App;
