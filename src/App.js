import './App.css';
import Form from './components/Form';
import ResponsesView from "./components/ResponsesView";
import React, {useState} from 'react';

const LOCAL_STORAGE_KEY = "AI_RESPONSES";

const loadResponses = () => {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (data) {
        return JSON.parse(data)
    }
    return []
}

function App() {

    const [responses, setResponses] = useState(loadResponses());

    const onSubmitHandler = (response) => {
        const newResponses = [response, ...responses]
        setResponses(newResponses)
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newResponses))
    }

    return (
        <div className="App">
            <div className="section"><ResponsesView responses={responses} /></div>
            <div className="section"><Form onSubmit={onSubmitHandler} /></div>
        </div>
    );
}

export default App;
