import React from 'react';
import './App.css';

function App() {

    const names = ['Fulano a', 'Fulano b', 'Fulano c']

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {
                       names.map((name, index) => <li key={index}>{name}</li>)
                    }
                </ul>

            </header>
        </div>
    );
}

export default App;
