import React, {useEffect, useRef} from 'react';
import './App.css';
import useCounter from "./hooks/useCounter";
import PeopleList from "./components/PeopleList";

function App() {

    const number = useCounter(5)
    const counter = useRef(2)
    const div = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(div.current) {
            div.current.style.backgroundColor = '#09f'
        }
    },[])



    return (
        <div className="App" ref={div}>

                {number}
                <div style={{background: 'peachpuff'}}>
                    {counter.current}
                </div>
                <PeopleList />
                <PeopleList />
            
        </div>
    );
}

export default App;
