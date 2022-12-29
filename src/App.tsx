import React, {useState} from 'react';
import './App.css';
import Post from "./components/Post";
import Card from "./components/Card";

function App() {
    const [post] = useState({
        title: 'Título maneiro',
        content: 'Lorem Ipsum dolor sit amet',
    })

    return (
        <div className="App">
            <header className="App-header">
                <Card title={'Card'} align={"left"}>
                    <Post post={post} totalComments={5}/>
                </Card>
            </header>
        </div>
    );
}

export default App;
