import './App.css';
import {useReducer, useEffect, useState} from "react";
import Pagination from "./Components/Pagination"
import axios from "axios";

const initialState = {
    fetchUrl: "https://api.coincap.io/v2/assets",
    isLoading: true,
    errors: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "COMPLETED":
            return {
                ...state,
                isLoading: false,
            }
        default:
            return Error("type " + state.type + " is not supported")
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [res, setRes] = useState(null)


    useEffect(async () => {
        dispatch({type: "LOADING"})

        // Fetch using state.fetchUrl
        const config = {
            method: 'get',
            baseURL: state.fetchUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
        const _res = await axios.request(config)
        setRes(_res.data);
        dispatch({type: "COMPLETED"})
    }, [state.url])


    return (
        <div id="app">
            <header>
                <h1>Crypto Today</h1>
                <small>Developed By: <a href="https://josenaime.github.io" target="_blank">Jose Naime</a></small>
            </header>
            {!state.isLoading && <Pagination data={res.data} updateDate={res.timestamp} pageSize={10} pageOffset={1} />}
        </div>
    );
}

export default App;
