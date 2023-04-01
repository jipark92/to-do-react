import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BinputBox from './components/BinputBox';
import Btables from './components/Btables';
import Bbutton from './components/Bbutton';

function App() {
    const [toDos, setToDos] = useState([
        { id: 1, task: 'hello world', status: true },
        { id: 2, task: 'hello friend', status: false },
    ]);
    const [form, setForm] = useState('');

    const addTask = () => {
        console.log('clicked');
    };

    console.log('form===', form);

    return (
        <div className="App" style={padding}>
            <BinputBox form={form} action={setForm} />
            <Bbutton label="Add Task" action={addTask} />
            <Btables toDos={toDos} />
        </div>
    );
}

const padding = {
    padding: 100,
};

export default App;
