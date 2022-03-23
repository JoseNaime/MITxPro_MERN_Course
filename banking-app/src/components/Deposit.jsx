import React, {useEffect, useState} from 'react';
import {UserContext} from "../App";
import TransactionHistoryCard from "./TransactionHistoryCard";

function Deposit() {
    const {userContext, setUserContext} = React.useContext(UserContext);
    const [error, setError] = useState("")
    const [userInput, setUserInput] = useState(null)
    const user = userContext.users.find(user => user.id === userContext.currentUser)

    function handleDeposit(e) {
        e.preventDefault();
        const amount = e.target.elements.amount.value;
        const newBalance = Number(user.balance) + Number(amount);
        setUserContext({
            ...userContext,
            users: userContext.users.map(user => user.id === userContext.currentUser ? {
                ...user,
                balance: newBalance,
                deposits: [...user.deposits, {
                    amount: amount,
                    date: new Date().toLocaleDateString()
                }]
            } : user)

        });
        setUserInput("")
        alert("Deposit completed successfully!");
    }


    function handleUserInputChange(e){
        let input = e.target.value
        if (input < 0){
            input *= -1
        }
        setUserInput(input)
    }

    const userDepositsElements = user && user.deposits.map((deposit,i) => {
        return (
            <TransactionHistoryCard id={i} amount={deposit.amount} date={deposit.date}/>)
    })

    return (
        <>
            <h1>Deposit</h1>
            {user ?
                <div>
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <h2>{user.username}</h2>
                                <p>Current Balance: ${user.balance}</p>
                            </div>
                            <form onSubmit={handleDeposit} className="position-relative">
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="number"
                                           className="form-control"
                                           onChange={handleUserInputChange}
                                           onFocus={() => setError("")}
                                           value={userInput}
                                           id="amount"
                                           placeholder="Enter Amount" />
                                    <p className="text-danger">{error} </p>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2 m-auto" disabled={!userInput}>
                                    Deposit
                                </button>
                            </form>
                        </div>
                    </div>
                    { user.deposits.length > 0 &&
                        <div className="card my-3">
                            <div className="card-body m-3">
                                <h3 className="card-title mb-3 text-center">History</h3>
                                <div>
                                    {userDepositsElements}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                :
                <>
                    <h4 className="text-muted">Please create an account</h4>
                </>
            }
        </>
    );
}

export default Deposit;