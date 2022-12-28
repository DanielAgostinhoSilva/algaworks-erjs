import React from 'react';
import './App.css';
import Clock from "./component/Clock";
import Person from "./component/Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Person />
      </header>
    </div>
  );
}

export default App;
