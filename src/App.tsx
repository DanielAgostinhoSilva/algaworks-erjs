import React from 'react';
import './App.css';
import useCounter from "./hooks/useCounter";

function App() {

    const number = useCounter()

    return (
        <div className="App">
            <header className="App-header">
                {number}
            </header>
        </div>
    );
}

export default App;
