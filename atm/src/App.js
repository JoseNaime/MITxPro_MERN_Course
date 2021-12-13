import {useState, useEffect, useReducer} from "react";
import './App.css';
import AtmDeposit from "./Components/ATMDeposit";

function reducer(state, action) {
    switch (action.type) {
        case "Deposit":
            if (action.payload) {
                console.log(state.totalBalance)
                return {
                    ...state,
                    totalBalance: (state.totalBalance + action.payload.amount)
                };
            }
            return {
                ...state,
                isDeposit: true,
            };
        case "Cash Back":
            if (action.payload) {
                return {
                    ...state,
                    totalBalance: (state.totalBalance - action.payload.amount)
                };
            }
            return {
                ...state,
                isDeposit: false,
            };
        default:
            throw new Error("Unknown action type: " + action.type);
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {isDeposit: true, totalBalance: 0});

    useEffect(() => {
        dispatch({type: 'Deposit'});
    }, [])

    const handleStateChange = (e) => {
        const newState = (e.target.value);
        dispatch({type: newState});
    }

    return (
        <div className="app-container">
            <div id="title">
                <h1>Online ATM</h1>
                <div className="total-balance">
                    <div>
                        <h2>Total Balance</h2>
                        <h3>${state.totalBalance}</h3>
                    </div>

                </div>
            </div>
            <AtmDeposit state={state} dispatch={dispatch} onChange={handleStateChange} />
        </div>
    );
}

export default App;
