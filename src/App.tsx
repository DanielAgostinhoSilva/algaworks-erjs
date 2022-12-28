import React, {useState} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

function App() {
    const [post, setPost] = useState({
        title: 'Título maneiro',
        content: 'Lorem Ipsum dolor sit amet',
    })

    return (
        <div className="App">
            <header className="App-header">
                <Sidebar post={post}/>
                <Post post={post} totalComments={5}/>
            </header>
        </div>
    );
}

export default App;
