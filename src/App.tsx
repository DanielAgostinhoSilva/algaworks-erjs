import React, {useReducer} from 'react';
import './App.css';

interface InitialState {
    count: number
}

type Action = {type: 'INCREMENT' | 'DECREMENT'}

const initialState: InitialState = {
    count: 1
}

function reducer(state: InitialState, action: Action): InitialState {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App">
            <div style={{background: 'peachpuff'}}>
                {state.count}
            </div>
            <button onClick={() => {
                dispatch({type: 'INCREMENT'})
            }}>
                acrescer
            </button>
            <button onClick={() => {
                dispatch({type: 'DECREMENT'})
            }}>
                diminuir
            </button>
        </div>
    );
}

export default App;
