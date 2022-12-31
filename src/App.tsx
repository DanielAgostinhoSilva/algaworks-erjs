import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [names, setNames] = useState(['Fulano a', 'Fulano b', 'Fulano c'])

    useEffect(() => {
        console.log(names)
    },[names])

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {
                       names.map((name, index) => <li key={index}>{name}</li>)
                    }
                </ul>
                <button onClick={() => setNames([...names, 'Daniel'])}>
                    Adicionar Daniel
                </button>

            </header>
        </div>
    );
}

export default App;
