import React from 'react';
import './App.css';
import useCounter from "./hooks/useCounter";
import PeopleList from "./components/PeopleList";

function App() {

    const number = useCounter(5)

    return (
        <div className="App">
            <header className="App-header">
                {number}
                <PeopleList />
                <PeopleList />
            </header>
        </div>
    );
}

export default App;
